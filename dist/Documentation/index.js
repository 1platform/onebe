"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BaseEntity: true,
  GetDocs: true,
  GetRoutes: true,
  EntityHelpers: true
};
Object.defineProperty(exports, "BaseEntity", {
  enumerable: true,
  get: function () {
    return _BaseEntity.default;
  }
});
Object.defineProperty(exports, "EntityHelpers", {
  enumerable: true,
  get: function () {
    return _EntityHelpers.default;
  }
});
Object.defineProperty(exports, "GetDocs", {
  enumerable: true,
  get: function () {
    return _GetDocs.default;
  }
});
Object.defineProperty(exports, "GetRoutes", {
  enumerable: true,
  get: function () {
    return _GetRoutes.default;
  }
});

var _BaseEntity = _interopRequireDefault(require("./BaseEntity"));

var _GetDocs = _interopRequireDefault(require("./GetDocs"));

var _GetRoutes = _interopRequireDefault(require("./GetRoutes"));

var _EntityHelpers = _interopRequireWildcard(require("./Helpers/EntityHelpers"));

Object.keys(_EntityHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _EntityHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EntityHelpers[key];
    }
  });
});

var _DataTypes = require("./Definition/DataTypes");

Object.keys(_DataTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _DataTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DataTypes[key];
    }
  });
});

var _EntityDecorators = require("./Decorators/EntityDecorators");

Object.keys(_EntityDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _EntityDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EntityDecorators[key];
    }
  });
});

var _EndpointDecorators = require("./Decorators/EndpointDecorators");

Object.keys(_EndpointDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _EndpointDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EndpointDecorators[key];
    }
  });
});

var _ControllerDecorators = require("./Decorators/ControllerDecorators");

Object.keys(_ControllerDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ControllerDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ControllerDecorators[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }