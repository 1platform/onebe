"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ServiceBase {
  constructor() {
    _defineProperty(this, "_validator", void 0);
  }

  get validator() {
    return this._validator;
  }

  validate(data) {
    return this.customValidate(data, this._validator);
  }

  customValidate(data, validator) {
    if (!validator) {
      return data;
    }

    const results = validator.validate(data, {
      abortEarly: false,
      dateFormat: "utc",
      stripUnknown: true,
      context: data
    });

    if (results.error) {
      throw results.error;
    }

    return results.value;
  }

}

exports.default = ServiceBase;