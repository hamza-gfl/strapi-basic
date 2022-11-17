//config/plugins.js

module.exports = {
  // Step 1: Configure the redis connection
  // @see https://github.com/strapi-community/strapi-plugin-redis
  // redis: {
  //   config: {
  //     connections: {
  //       default: {
  //         connection: {
  //           host: '127.0.0.1',
  //           port: 6379,
  //           db: 0,
  //         },
  //         settings: {
  //           debug: true,
  //         },
  //       },
  //     },
  //   },
  // },
  // // Step 2: Configure the redis cache plugin
  // "rest-cache": {
  //   config: {
  //     provider: {
  //       name: "redis",
  //       options: {
  //         max: 32767,
  //         connection: "default",
  //       },
  //     },
  //     strategy: {
  //       enableEtagSupport: true,
  //       logs: true,
  //       clearRelatedCache: true,
  //       maxAge: 3600000,
  //       contentTypes: [
  //         "api::first-page.first-page",
  //         "api::service-categorie.service-categorie",
  //       ],
  //     },
  //   },
  // }
  "redis-cache-plugin": {
    enabled: true,
    resolve: './src/plugins/redis-cache'
  }
};
