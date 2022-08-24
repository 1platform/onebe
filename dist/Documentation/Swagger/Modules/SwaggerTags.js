"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Swagger Tags Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 tags specification.
 */
class SwaggerTags {
  /**
   * Method that extracts the tags from the route definition metadata.
   *
   * @param routesMetadata The list of documented routes from the metadata store.
   */
  getTags(routesMetadata) {
    if (routesMetadata.length === 0) {
      return [];
    }

    return routesMetadata.map(route => ({
      name: route.name,
      description: route.description || ""
    }));
  }

}

exports.default = SwaggerTags;