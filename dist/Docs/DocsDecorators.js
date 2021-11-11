"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = exports.MethodMetadataType = void 0;
exports.getElementDocs = getElementDocs;
exports.method = void 0;

require("reflect-metadata");

var _DocsInterfaces = require("./DocsInterfaces");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A method that retrieves the element Documentation
 *
 * @param target The target route
 * @param propertyKey The property key
 */
function getElementDocs(target, propertyKey) {
  let docs = Reflect.getMetadata("route:docs", target, propertyKey);

  if (!docs) {
    docs = {};
    Reflect.defineMetadata("route:docs", docs, target, propertyKey);
  }

  return docs;
}
/**
 * Enum representing the Metadata Type
 *
 * @enum
 */


let MethodMetadataType;
/**
 * Decorator used to define a method Metadata
 *
 * @param type The metadata type
 * @param key The key on which to set the value
 * @param value The value to be set
 */

exports.MethodMetadataType = MethodMetadataType;

(function (MethodMetadataType) {
  MethodMetadataType["ROUTE"] = "route";
  MethodMetadataType["PARAMETER"] = "parameter";
  MethodMetadataType["QUERY"] = "query";
  MethodMetadataType["BODY"] = "body";
  MethodMetadataType["BODY_REQUEST"] = "body_request";
  MethodMetadataType["RESPONSE"] = "response";
  MethodMetadataType["THROW"] = "throw";
})(MethodMetadataType || (exports.MethodMetadataType = MethodMetadataType = {}));

function methodMetadataDecorator(type, key, value) {
  return (target, propertyKey, descriptor) => {
    const routeDocs = getElementDocs(target, propertyKey);

    switch (type) {
      case MethodMetadataType.THROW:
        routeDocs.throw = _objectSpread(_objectSpread({}, routeDocs.throw || {}), {}, {
          [key]: value
        });
        break;

      case MethodMetadataType.RESPONSE:
        routeDocs.response = {
          statusCode: key,
          description: value
        };
        break;

      case MethodMetadataType.BODY:
        routeDocs.body = _objectSpread(_objectSpread({}, routeDocs.body || {}), {}, {
          [key]: _objectSpread({
            name: key
          }, value)
        });
        break;

      case MethodMetadataType.BODY_REQUEST:
        routeDocs.body = _objectSpread(_objectSpread({}, routeDocs.body || {}), {}, {
          [_DocsInterfaces.DEFAULT_BODY_TAG]: {
            name: _DocsInterfaces.DEFAULT_BODY_TAG,
            description: value,
            type: _DocsInterfaces.BodyParameterType.SCHEMA,
            schema: key,
            required: true
          }
        });
        break;

      case MethodMetadataType.ROUTE:
      default:
        routeDocs[type] = _objectSpread(_objectSpread({}, routeDocs[type] || {}), {}, {
          [key]: value
        });
    }
  };
}
/**
 * Decorator used to define a class Metadata
 *
 * @param key The key on which to set the value
 * @param value The value to be set
 */


function classMetadataDecorator(key, value) {
  return function (BaseClass) {
    const classDocs = getElementDocs(BaseClass.prototype);
    classDocs[key] = value;
    return BaseClass;
  };
}
/**
 * A list of decorators to define properties of a controller.
 */


const controller = {
  /**
   * Decorator to add a description to a controller.
   *
   * @decorator
   * @param description Controller Description
   */
  description: function (description) {
    return classMetadataDecorator("description", description);
  },

  /**
   * Decorator to add a name to a controller.
   *
   * @decorator
   * @param description Controller Name
   */
  name: function (description) {
    return classMetadataDecorator("name", description);
  }
};
/**
 * A list of decorators to define properties of a method.
 */

exports.controller = controller;
const method = {
  /**
   * Decorator to add a description to a method.
   *
   * @decorator
   * @param description Method Description
   */
  description: function (description) {
    return methodMetadataDecorator(MethodMetadataType.ROUTE, "description", description);
  },

  /**
   * Decorator to add a throws property to a method.
   *
   * @decorator
   * @param errorCode The error code
   * @param description The description
   * @param response The response value
   */
  throws: function (errorCode, description, response) {
    return methodMetadataDecorator(MethodMetadataType.THROW, errorCode.toString(), {
      statusCode: errorCode,
      body: description
    });
  },

  /**
   * Decorator to add a response status to a method.
   *
   * @decorator
   * @param statusCode An http status code
   * @param description The description of the response
   */
  responseStatus: function (statusCode, description) {
    return methodMetadataDecorator(MethodMetadataType.RESPONSE, statusCode.toString(), description);
  },

  /**
   * Decorator to add a body to a method.
   *
   * @decorator
   * @param parameter The body parameter
   * @param type The type of the parameter
   * @param description The description of the parameter
   */
  body: function (parameter, type, description) {
    return methodMetadataDecorator(MethodMetadataType.BODY, parameter, {
      type,
      description
    });
  },

  /**
   * Decorator to add a request to a method.
   *
   * @decorator
   * @param type The type of the request
   * @param description The description of the request
   */
  request: function (type, description) {
    return methodMetadataDecorator(MethodMetadataType.BODY_REQUEST, type, description);
  }
};
exports.method = method;