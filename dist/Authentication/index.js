"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  initPassportStrategy: true,
  AuthenticationMethod: true
};
Object.defineProperty(exports, "AuthenticationMethod", {
  enumerable: true,
  get: function () {
    return _AuthenticationMethod.default;
  }
});
Object.defineProperty(exports, "initPassportStrategy", {
  enumerable: true,
  get: function () {
    return _Passport.default;
  }
});

var _AuthDecorators = require("./AuthDecorators");

Object.keys(_AuthDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AuthDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AuthDecorators[key];
    }
  });
});

var _JWT = require("./JWT");

Object.keys(_JWT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _JWT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _JWT[key];
    }
  });
});

var _Passport = _interopRequireWildcard(require("./Passport"));

Object.keys(_Passport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Passport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Passport[key];
    }
  });
});

var _AuthenticationMethod = _interopRequireDefault(require("./AuthenticationMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }