/**
 * team router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::team.team', {
  only: ['find'],
  config: {
    find: {
      middlewares: [
        'api::team.comparefag',
      ]
    }
  }
});
