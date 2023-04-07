'use strict';

/**
 * type-of-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-of-article.type-of-article');
