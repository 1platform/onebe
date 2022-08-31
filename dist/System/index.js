"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Config: true,
  Env: true,
  LoggerType: true,
  LogLevel: true
};
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function () {
    return _Config.default;
  }
});
Object.defineProperty(exports, "Env", {
  enumerable: true,
  get: function () {
    return _Env.default;
  }
});
Object.defineProperty(exports, "LogLevel", {
  enumerable: true,
  get: function () {
    return _LogLevel.default;
  }
});
Object.defineProperty(exports, "LoggerType", {
  enumerable: true,
  get: function () {
    return _LoggerType.default;
  }
});

var _Config = _interopRequireWildcard(require("./Config"));

Object.keys(_Config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Config[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Config[key];
    }
  });
});

var _Env = _interopRequireWildcard(require("./Env"));

Object.keys(_Env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Env[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Env[key];
    }
  });
});

var _LoggerType = _interopRequireDefault(require("./LoggerType"));

var _LogLevel = _interopRequireDefault(require("./LogLevel"));

var _Logger = require("./Logger");

Object.keys(_Logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Logger[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Logger[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }