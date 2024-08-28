'use strict';

/**
 * A set of functions called "actions" for `api`
 */

module.exports = {
  serviceController: async (ctx) => {
    try {
      let data = await strapi.service("api::api.api").servicesService();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Something went wrong.", { details: err.message });
    }
  },
  teamController: async (ctx) => {
    try {
      let data = await strapi.service("api::api.api").teamService();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Something went wrong.", { details: err.message });
    }
  }
};
