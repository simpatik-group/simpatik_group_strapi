/**
 * charity-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::charity-page.charity-page', {
  only: ['find'],
});
