"use strict";

/**
 * api service
 */

module.exports = () => ({
  heroSectionService: async () => {
    try {
      let entries = await strapi.db
        .query("api::hero-section.hero-section")
        .findMany({
          where: {
            publishedAt: {
              $ne: null,
            },
          },
          populate: {
            //   Image: true,
            Keywords: {
              populate: true,
            },
          },
        });
      return entries || [];
    } catch (err) {
      throw new Error(err.message);
    }
  },
  workingStepsService: async () => {
    try {
      let entries = await strapi.db
        .query("api::working-process.working-process")
        .findMany({
          where: {
            publishedAt: {
              $ne: null,
            },
          },
          populate: {
            //   Image: true,
            Steps: {
              populate: true,
            },
          },
        });
      return entries || [];
    } catch (err) {
      throw new Error(err.message);
    }
  },
  servicesService: async () => {
    try {
      let entries = await strapi.db.query("api::service.service").findMany({
        where: {
          publishedAt: {
            $ne: null,
          },
        },
        populate: {
          Image: true,
          Services_List: {
            populate: true,
          },
        },
      });
      return entries || [];
    } catch (err) {
      throw new Error(err.message);
    }
  },
  teamService: async () => {
    try {
      let entries = await strapi.db.query("api::team.team").findMany({
        where: {
          publishedAt: {
            $ne: null,
          },
        },
        populate: {
          Team_Members: {
            populate: true,
          },
        },
      });
      return entries || [];
    } catch (err) {
      throw new Error(err.message);
    }
  },
  testimonialsService: async () => {
    try {
      let entries = await strapi.db
        .query("api::testimonials-list.testimonials-list")
        .findMany({
          where: {
            publishedAt: {
              $ne: null,
            },
          },
          populate: {
            Testimonials_List: {
              populate: true,
            },
          },
        });
      return entries || [];
    } catch (err) {
      throw new Error(err.message);
    }
  },
  faqService: async () => {
    try {
      let entries = await strapi.db.query("api::faq.faq").findMany({
        where: {
          publishedAt: {
            $ne: null,
          },
        },
        populate: {
          Faq: {
            populate: true,
          },
        },
      });
      return entries || [];
    } catch (err) {
      throw new Error(err.message);
    }
  },
});
