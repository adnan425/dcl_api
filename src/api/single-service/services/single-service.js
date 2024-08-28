'use strict';

/**
 * single-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-service.single-service');
