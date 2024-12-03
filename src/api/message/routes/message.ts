/**
 * message router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::message.message', {
  only: ['create'],
  config: {
    create: {
      middlewares: [
        // point to a registered middleware
        'api::message.recaptcha',
        'api::message.validation',

        // point to a registered middleware with some custom configuration
        // { name: 'api::message.captcha', config: {} }, 

        // pass a middleware implementation directly
        // (ctx, next) => {
        //   const { name } = ctx.request.body.data;
        //   console.log(`Request: ${ctx.method} ${ctx.url} ${name}`);
        //   // console.log(`Response: ${ctx.status}`);
        //   // ctx.status = 400;
        //   if (!name || name.trim() === '') {
        //     ctx.status = 400; // HTTP статус "Bad Request"
        //     ctx.body = {
        //       error: 'Field "name" cannot be empty',
        //     };
        //     console.log('Validation failed: "name" is empty');
        //     return; // Останавливаем выполнение
        //   }
        //   return next();
        // },
        // () => {
        //   return async (ctx, next) => {
        //     console.log(`Request: ${ctx.method} ${ctx.url}`);

        //     // Проверяем значение поля `name` из тела запроса
        //     const { name } = ctx.request.body.data;

        //     if (!name || name.trim() === '') {
        //       // Если `name` пустое, возвращаем ошибку
        //       ctx.status = 400; // HTTP статус "Bad Request"
        //       // ctx.body = {
        //       //   error: 'Field "name" cannot be empty',
        //       // };
        //       console.log('Validation failed: "name" is empty');
        //       return; // Останавливаем выполнение
        //     }

        //     await next(); // Продолжаем выполнение, если проверка успешна
        //     console.log(`Response: ${ctx.status}`);
        //   };
        // },
      ]
    }
  }
});
