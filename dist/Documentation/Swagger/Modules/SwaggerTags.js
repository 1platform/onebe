"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SwaggerTags {
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