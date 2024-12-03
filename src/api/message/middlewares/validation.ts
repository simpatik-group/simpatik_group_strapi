const validateFields = (fields: Record<string, any>, requiredFields: string[]): { isValid: boolean; error?: string } => {
  for (const field of requiredFields) {
    const value = fields[field];
    if (!value || value.trim() === '') {
      return { isValid: false, error: `Field "${field}" cannot be empty` };
    }
  }
  return { isValid: true };
};

const validationMessageMiddleware = (_, { strapi }) => {
  return async (ctx, next) => {
  const requiredFields = ['name', 'phone', 'message'];

  const validation = validateFields(ctx.request.body.data, requiredFields);

  if (!validation.isValid) {
    ctx.status = 400;
    ctx.body = { error: validation.error };
    strapi.log.error(`Validation failed: ${validation.error}`);
    return;
  }

  strapi.log.info('Validation middleware: success');
  await next();
  };
};

export default validationMessageMiddleware;