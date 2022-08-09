"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Throws = Throws;

var _MetadataStore = _interopRequireDefault(require("../../MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export function Response (type: string, statusCode = HTTPStatus.OK, description?: string): RouteDecorator {
//
// }
function Throws(errorCode, description, response) {
  return (target, propertyKey, descriptor) => {
    _MetadataStore.default.instance.route.endpointThrows(target.constructor.name, propertyKey, {
      statusCode: errorCode,
      description,
      response
    });
  };
} // /**
//  * Decorator to add a response to a method.
//  *
//  * @decorator
//  * @param type The type of the response
//  * @param statusCode The status code of the response
//  * @param description The description of the response
//  */
//
//
// response: function (
//   type: string,
//   statusCode = HTTPStatus.OK,
//   description?: string
// ): RouteDecorator {
//   return methodMetadataDecorator(MethodMetadataType.RESPONSE, type, {
//     statusCode,
//     description,
//   });
// },
//
// /**
//  * Decorator to add a response to a method.
//  *
//  * @decorator
//  * @param type The type of the response
//  * @param statusCode The status code of the response
//  * @param description The description of the response
//  */
// responseArray: function (
//   type: string,
//   statusCode = HTTPStatus.OK,
//   description?: string
// ): RouteDecorator {
//   return methodMetadataDecorator(MethodMetadataType.RESPONSE, type, {
//     statusCode,
//     description,
//     isArray: true,
//   });
// },
// /**
//  * Decorator to add a throws property to a method.
//  *
//  * @decorator
//  * @param errorCode The error code
//  * @param description The description
//  * @param response The response value
//  */
// throws: function <TResponse>(
//   errorCode: HTTPStatus,
//   description: string,
//   response?: ResponseValue<TResponse>
// ): RouteDecorator {
//   return methodMetadataDecorator(
//     MethodMetadataType.THROW,
//     errorCode.toString(),
//     {
//       statusCode: errorCode,
//       body: description,
//       response,
//     }
//   );
// },
//
// /**
//  * Decorator to add a response status to a method.
//  *
//  * @decorator
//  * @param statusCode An http status code
//  * @param description The description of the response
//  */
// responseStatus: function (
//   statusCode: HTTPStatus,
//   description?: string
// ): RouteDecorator {
//   return methodMetadataDecorator(
//     MethodMetadataType.RESPONSE_CODE,
//     statusCode.toString(),
//     description
//   );
// },