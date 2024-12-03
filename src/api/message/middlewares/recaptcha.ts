import axios from 'axios';
import { AxiosResponse } from 'axios';

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  errorCodes?: string[];
}

const recaptchaMiddleware= (_, { strapi }) => {
  return async (ctx, next) => {
    try {
      const recaptchaToken = ctx.request.body.data.recaptcha;

      if (!recaptchaToken) {
        ctx.status = 400;
        ctx.body = { error: 'reCAPTCHA token is missing' };
        return;
      }

      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const threshold = parseFloat(process.env.RECAPTCHA_THRESHOLD || '0.5');

      if (!secretKey) {
        strapi.log.error('reCAPTCHA secret key is not configured');
        ctx.status = 500;
        ctx.body = { error: 'Internal server error: reCAPTCHA secret key is missing' };
        return;
      }

      const response: AxiosResponse<RecaptchaResponse> = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: secretKey,
            response: recaptchaToken,
          },
        }
      );

      const { success, score } = response.data;

      if (!success || score < threshold) {
        ctx.status = 403;
        ctx.body = { error: 'Failed reCAPTCHA validation' };
        return;
      }

      delete ctx.request.body.data.recaptcha;

      strapi.log.info('Recaptcha middleware: success');

      await next();
    } catch (error) {
      strapi.log.error('reCAPTCHA verification failed', error);
      ctx.status = 500;
      ctx.body = { error: 'Internal server error during reCAPTCHA validation' };
    }
  };
};

export default recaptchaMiddleware;
