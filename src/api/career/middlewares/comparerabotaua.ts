import axios, { AxiosResponse } from "axios";

interface RabotaUAResponse {
  totalVacanciesCount: number;
  filteredVacancies: VacancyItem[];
}

interface VacancyItem {
  id: number;
  name: string;
  date: string;
}

const compareCareerRabotaUaMiddleware = (_, { strapi }) => {
  return async (ctx, next) => {
    const { locale } = ctx.query;
    try {
      const careerData = await strapi.entityService.findMany('api::career.career', {
        populate: '*',
        locale,
      });

      const rabotaUaVacancies = { vacancy: [] };

      try {
        const responseRabotaUa: AxiosResponse<RabotaUAResponse> = await axios.get(process.env.RABOTAUA_URL || 'https://api.robota.ua/companies/767178/published-vacancies');
        const { filteredVacancies } = responseRabotaUa.data;

        if (filteredVacancies.length > 0) {
          const itemsResponse = filteredVacancies
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((item: VacancyItem) => {
              return {
                id: +item.id,
                title: item.name,
                url: `https://robota.ua/company767178/vacancy${item.id}`,
                date: item.date,
              };
            });
  
          rabotaUaVacancies.vacancy = [...itemsResponse];
        }

        strapi.log.info(`RabotaUa Request success`);
      } catch(error) {
        strapi.log.error(`RabotaUa Request error: ${error.message}`);
      }

      const combinedData = {
        data: { ...careerData, ...rabotaUaVacancies },
      };

      ctx.status = 200;
      ctx.body = combinedData;

      strapi.log.info('compareCareerRabotaUaMiddleware success');
      await next();
    } catch (error) {
      strapi.log.error(`compareCareerRabotaUaMiddleware error: ${error.message}`);
      ctx.throw(500, 'Internal server error during fetching data');
      return;
    }
  };
};

export default compareCareerRabotaUaMiddleware;