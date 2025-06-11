import axios from 'axios';

const emailToBafMiddleware = (_, { strapi }) => {
  return async (ctx, next) => {
    const { name, phone, email, message } = ctx.request.body.data;

    const requestBody = {
      subject: 'Message from site simpatik.group',
      message: `<b>Name</b>: ${name}<br>
                <b>Phone</b>: ${phone}<br>
                <b>Email</b>: ${email}<br>
                <b>Message</b>: ${message}`,
    };

    axios.post(
      process.env.EMAIL_TO_BAF_URL,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.EMAIL_TO_BAF_AUTH,
        },
      }
    ).then(() => {
      strapi.log.info('Email request sent middleware: success');
    }).catch((error) => {
      strapi.log.error(`Error sending email to 1C: ${error.message}`);

      // Sentry
      strapi
        .plugin('sentry')
        .service('sentry')
        .sendError(error);
    });

    strapi.log.info('emailToBafMiddleware started (non-blocking)');
    await next();
  };
};

export default emailToBafMiddleware;
