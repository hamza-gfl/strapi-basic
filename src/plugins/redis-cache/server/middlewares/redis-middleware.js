module.exports = (options, { strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Math.ceil(Date.now() - start);
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    strapi.log.http(`${ctx.method} ${ctx.url} (${delta} ms) ${ctx.status} kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk`);
  };
};
