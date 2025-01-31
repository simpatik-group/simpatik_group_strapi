import axios, { AxiosResponse } from "axios";

interface WorkUAResponse {
  status: string;
  items: VacancyItem[];
}

interface VacancyItem {
  id: string;
  name: string;
  date: string;
}

const compareCareerWorkUaMiddleware = (_, { strapi }) => {
  return async (ctx, next) => {
    const { locale } = ctx.query;
    try {
      const careerData = await strapi.entityService.findMany('api::career.career', {
        populate: '*',
        locale,
      });

      const localeMap = {
        uk: 'uk_UA',
        en: 'en_US',
      };
      const localeX = localeMap[locale] || 'uk_UA';

      const workUaVacancies = { vacancy: [] };

      try {
        const responseWorkUa: AxiosResponse<WorkUAResponse> = await axios.get(
          process.env.WORKUA_URL || 'https://api.work.ua/jobs/my',
          {
            params: {
              all: 1,
              active: 1,
            },
            headers: {
              'Authorization': process.env.WORKUA_AUTH,
              'User-Agent': process.env.WORKUA_USERAGENT,
              'X-Locale': localeX, // uk_UA or 'en_US'
            },
          }
        );
  
        const { items } = responseWorkUa.data;
  
        const itemsResponse = items
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((item: VacancyItem) => {
            return {
              id: +item.id,
              title: item.name,
              url: `https://www.work.ua/jobs/${item.id}/`,
              date: item.date,
            };
          });
  
          workUaVacancies.vacancy = [...itemsResponse];
          strapi.log.info(`WorkUa Request success`);
      } catch(error) {
        strapi.log.error(`WorkUa Request error: ${error.message}`);
      }

      const combinedData = {
        data: { ...careerData, ...workUaVacancies },
      };

      ctx.status = 200;
      ctx.body = combinedData;

      strapi.log.info('compareCareerWorkUaMiddleware success');
      await next();
    } catch (error) {
      strapi.log.error(`compareCareerWorkUaMiddleware error: ${error.message}`);
      ctx.throw(500, 'Internal server error during fetching data');
      return;
    }
  };
};

export default compareCareerWorkUaMiddleware;