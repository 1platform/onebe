"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResponseDecorators = require("./Endpoint/ResponseDecorators");

Object.keys(_ResponseDecorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ResponseDecorators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ResponseDecorators[key];
    }
  });
});