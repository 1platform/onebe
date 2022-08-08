"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeorm = require("typeorm");

Object.keys(_typeorm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _typeorm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typeorm[key];
    }
  });
});