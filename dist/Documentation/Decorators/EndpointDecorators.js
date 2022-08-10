"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endpoint = Endpoint;
exports.EndpointDescription = EndpointDescription;
exports.EndpointSummary = EndpointSummary;
exports.ResponseDocs = exports.RequestDocs = void 0;

var _MetadataStore = _interopRequireDefault(require("../MetadataStore"));

var _RequestDocs = _interopRequireWildcard(require("./Endpoint/RequestDecorators"));

exports.RequestDocs = _RequestDocs;

var _ResponseDocs = _interopRequireWildcard(require("./Endpoint/ResponseDecorators"));

exports.ResponseDocs = _ResponseDocs;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EndpointDescription(description) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointDescription(target.constructor.name, propertyKey, description);
  };
}

function EndpointSummary(summary) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointSummary(target.constructor.name, propertyKey, summary);
  };
}

function Endpoint(options) {
  return (target, propertyKey) => {
    _MetadataStore.default.instance.route.endpointDocumentation(target.constructor.name, propertyKey, options);
  };
}