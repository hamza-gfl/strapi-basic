'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('redis-cache')
      .service('myService')
      .getWelcomeMessage();
  },
});
