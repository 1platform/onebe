"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ServiceBase: true,
  ServiceFullRepository: true,
  ServiceLoader: true,
  ServiceReadRepository: true,
  ServiceWithRepository: true
};
Object.defineProperty(exports, "ServiceBase", {
  enumerable: true,
  get: function () {
    return _ServiceBase.default;
  }
});
Object.defineProperty(exports, "ServiceFullRepository", {
  enumerable: true,
  get: function () {
    return _ServiceFullRepository.default;
  }
});
Object.defineProperty(exports, "ServiceLoader", {
  enumerable: true,
  get: function () {
    return _ServiceLoader.default;
  }
});
Object.defineProperty(exports, "ServiceReadRepository", {
  enumerable: true,
  get: function () {
    return _ServiceReadRepository.default;
  }
});
Object.defineProperty(exports, "ServiceWithRepository", {
  enumerable: true,
  get: function () {
    return _ServiceWithRepository.default;
  }
});

var _PaginationDefinition = require("./PaginationDefinition");

Object.keys(_PaginationDefinition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PaginationDefinition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PaginationDefinition[key];
    }
  });
});

var _ServiceBase = _interopRequireDefault(require("./ServiceBase"));

var _ServiceFullRepository = _interopRequireDefault(require("./ServiceFullRepository"));

var _ServiceLoader = _interopRequireDefault(require("./ServiceLoader"));

var _ServiceReadRepository = _interopRequireDefault(require("./ServiceReadRepository"));

var _ServiceWithRepository = _interopRequireDefault(require("./ServiceWithRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }