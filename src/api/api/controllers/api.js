"use strict";

/**
 * A set of functions called "actions" for `api`
 */

module.exports = {
  heroSectionController: async (ctx) => {
    try {
      let data = await strapi.service("api::api.api").heroSectionService();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Something went wrong.", { details: err.message });
    }
  },
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
  },
  testimonialsController: async (ctx) => {
    try {
      let data = await strapi.service("api::api.api").testimonialsService();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Something went wrong.", { details: err.message });
    }
  },
  faqController: async (ctx) => {
    try {
      let data = await strapi.service("api::api.api").faqService();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Something went wrong.", { details: err.message });
    }
  },
};
