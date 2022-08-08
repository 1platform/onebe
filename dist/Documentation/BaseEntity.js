"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BaseEntity {
  constructor(options) {
    this.init(options);
  }

  init(options) {
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      });
    }
  }

}

exports.default = BaseEntity;