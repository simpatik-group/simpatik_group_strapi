const compareTeamFAQMiddleware = (_, { strapi }) => {
  return async (ctx, next) => {
    try {
      const teamData = await strapi.entityService.findMany('api::team.team', {
        populate: {
          departments: {
            populate: 'image'
          }
        },
      });

      const homepageData = await strapi.entityService.findMany('api::homepage.homepage', {
        populate: { 
          fag: true
        },
        fields: ['fag_title', 'fag_title_shadow', 'fag_text', 'fag_button'],
      });

      const combinedData = {
        data: { ...teamData, ...homepageData }
      };

      ctx.status = 200;
      ctx.body = combinedData;
    } catch (error) {
      strapi.log.error(`compareTeamFAQMiddleware error 500`);
      ctx.throw(500, 'Помилка під час отримання даних');
      return;
    }

  strapi.log.info('compareTeamFAQMiddleware success');
  await next();
  };
};

export default compareTeamFAQMiddleware;