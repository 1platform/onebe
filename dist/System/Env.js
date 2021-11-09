"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
/**
 * The environment handling class. Use the object exported
 * by the module to get various environment variable values.
 */

class Environment {
  /**
   * Returns the value of a given environment variable.
   *
   * @param {string} field The name of the environment variable.
   * @param {string|null} [defaultValue] The default value if the variable doesn't exists.
   *
   * @return string
   */
  get(field, defaultValue = null) {
    return process.env[field] || defaultValue;
  }
  /**
   * Returns the integer value of a given environment variable.
   *
   * @param {string} field The name of the envionmental variable.
   * @param {number|null} [defaultValue] The default value if the variable doesn't exists.
   *
   * @return number
   */


  int(field, defaultValue = 0) {
    return parseInt(this.get(field)) || Math.floor(defaultValue);
  }
  /**
   * Returns the boolean value of a given environment variable.
   *
   * @param {string} field The name of the flag.
   *
   * @return boolean
   */


  boolean(field) {
    const fieldValue = this.get(field) || "";
    return fieldValue.toUpperCase() === "TRUE";
  }
  /**
   * An alias for the Env.get method.
   *
   * @param {string} field The name of the environment variable.
   * @param {string} [defaultValue] The default value if the variable doesn't exists.
   *
   * @return string
   */


  string(field, defaultValue = "") {
    return this.get(field) || defaultValue;
  }
  /**
   * An alias for the Env.bool method.
   *
   * @param {string} flagName The name of the flag.
   *
   * @return boolean
   */


  flag(flagName) {
    return this.boolean(flagName);
  }

}

const Env = new Environment();
global.env = Env;
var _default = Env;
exports.default = _default;