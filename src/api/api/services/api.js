'use strict';

/**
 * api service
 */

module.exports = () => ({
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
                        populate: true
                    }
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
                        populate: true
                    }
                },
            });
            return entries || [];
        } catch (err) {
            throw new Error(err.message);
        }
    },
    testimonialsService: async () => {
        try {
            let entries = await strapi.db.query("api::testimonials-list.testimonials-list").findMany({
                where: {
                    publishedAt: {
                        $ne: null,
                    },
                },
                populate: {
                    Testimonials_List: {
                        populate: true
                    }
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
                        populate: true
                    }
                },
            });
            return entries || [];
        } catch (err) {
            throw new Error(err.message);
        }
    },
});

