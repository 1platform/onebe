"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  HTTP: true,
  HTTPStatus: true,
  HTTPVerb: true
};
Object.defineProperty(exports, "HTTP", {
  enumerable: true,
  get: function () {
    return _HTTP.default;
  }
});
Object.defineProperty(exports, "HTTPStatus", {
  enumerable: true,
  get: function () {
    return _HTTPStatus.default;
  }
});
Object.defineProperty(exports, "HTTPVerb", {
  enumerable: true,
  get: function () {
    return _HTTPVerb.default;
  }
});

var _HTTPTypes = require("./HTTPTypes");

Object.keys(_HTTPTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _HTTPTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HTTPTypes[key];
    }
  });
});

var _HTTP = _interopRequireDefault(require("./HTTP"));

var _HTTPStatus = _interopRequireDefault(require("./HTTPStatus"));

var _HTTPVerb = _interopRequireDefault(require("./HTTPVerb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }