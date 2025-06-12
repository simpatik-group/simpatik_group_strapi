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

        // Sentry
        strapi
          .plugin('sentry')
          .service('sentry')
          .sendError(error);
      }

      const combinedData = {
        data: { ...careerData, ...rabotaUaVacancies },
      };

      ctx.status = 200;
      ctx.body = combinedData;

      strapi.log.info('compareCareerRabotaUaMiddleware success');

      // Verify if Sentry is enabled
      // if (strapi.plugin('sentry').config('enabled')) {
      //   strapi.plugin('sentry').service('sentry').sendError(new Error('Test Sentry error from compareCareerRabotaUaMiddleware'), {
      //     tags: { source: 'compareCareerRabotaUaMiddleware' },
      //     extra: { locale: ctx.query.locale },
      //   });
      // }

      // ⬇️ Тестовая ошибка
      // const testError = new Error('🔥 Sentry test error from middleware');
      // strapi.plugin('sentry').service('sentry').sendError(testError);

      await next();
    } catch (error) {
      strapi.log.error(`compareCareerRabotaUaMiddleware error: ${error.message}`);

      // Sentry
      strapi
        .plugin('sentry')
        .service('sentry')
        .sendError(error);

      ctx.throw(500, 'Internal server error during fetching data');
      return;
    }
  };
};

export default compareCareerRabotaUaMiddleware;