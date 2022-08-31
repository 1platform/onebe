"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Route: true,
  ContextAPI: true,
  AuthContextAPI: true
};
Object.defineProperty(exports, "AuthContextAPI", {
  enumerable: true,
  get: function () {
    return _AuthContextAPI.default;
  }
});
Object.defineProperty(exports, "ContextAPI", {
  enumerable: true,
  get: function () {
    return _ContextAPI.default;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function () {
    return _Route.default;
  }
});
exports.default = void 0;

var _RouteDecorators = require("./RouteDecorators");

Object.keys(_RouteDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RouteDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RouteDecorators[key];
    }
  });
});

var _VerbsDecorators = require("./VerbsDecorators");

Object.keys(_VerbsDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VerbsDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _VerbsDecorators[key];
    }
  });
});

var _RouteInterfaces = require("./RouteInterfaces");

Object.keys(_RouteInterfaces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RouteInterfaces[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RouteInterfaces[key];
    }
  });
});

var _RouteUtils = require("./RouteUtils");

Object.keys(_RouteUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RouteUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RouteUtils[key];
    }
  });
});

var _RouteTypes = require("./RouteTypes");

Object.keys(_RouteTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RouteTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RouteTypes[key];
    }
  });
});

var _Route = _interopRequireDefault(require("./Route"));

var _ContextAPI = _interopRequireDefault(require("./ContextAPI"));

var _AuthContextAPI = _interopRequireDefault(require("./AuthContextAPI"));

var _Router = _interopRequireDefault(require("./Router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The global default Router that the application is going to use.
 */
const Router = new _Router.default();
global.router = Router;
var _default = Router;
exports.default = _default;