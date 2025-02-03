/**
 * charity router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::charity.charity', {
  only: ['find', 'findOne'],
});
