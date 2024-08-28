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
});

