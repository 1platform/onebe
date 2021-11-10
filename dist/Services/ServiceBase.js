"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Service base class. Using this class we can perform
 * various actions in the application.
 */
class ServiceBase {
  constructor() {
    _defineProperty(this, "_validator", void 0);
  }

  /**
   * Returns the default data validator of the service.
   */
  get validator() {
    return this._validator;
  }
  /**
   * Validates the given data against the default validator and returns
   * the data after applying the validator on it.
   *
   * @param data The data to be validated.
   */


  validate(data) {
    return this.customValidate(data, this._validator);
  }
  /**
   * Validates the given data against a given validator and returns
   * the data after applying the validator on it.
   *
   * @param data The data to be validated.
   * @param validator The validator to be used.
   */


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