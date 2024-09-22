'use strict';

/**
 * working-process service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::working-process.working-process');
