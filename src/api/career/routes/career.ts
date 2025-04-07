/**
 * career router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::career.career', {
  only: ['find'],
  config: {
    find: {
      middlewares: [
        'api::career.comparerabotaua',
        // 'api::career.compareworkua',
      ]
    }
  }
});
