'use strict';

/**
 * api service
 */

module.exports = () => ({
    servicesService: async () => {
        try {
            let entries = await strapi.db.query("api::service.service").findMany({
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
});
