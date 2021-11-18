"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Environment = void 0;

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
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */
  get(field, defaultValue = null) {
    return process.env[field] || defaultValue;
  }
  /**
   * Returns the integer value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */


  int(field, defaultValue = 0) {
    return parseInt(this.get(field)) || Math.floor(defaultValue);
  }
  /**
   * Returns the number value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */


  number(field, defaultValue = 0) {
    return Number(this.get(field)) || Math.floor(defaultValue);
  }
  /**
   * Returns the boolean value of a given environment variable.
   *
   * @param field The name of the flag.
   */


  boolean(field) {
    const fieldValue = this.get(field) || "";
    return fieldValue.toUpperCase() === "TRUE";
  }
  /**
   * An alias for the Env.get method.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */


  string(field, defaultValue = "") {
    return this.get(field) || defaultValue;
  }
  /**
   * An alias for the Env.bool method.
   *
   * @param flagName The name of the flag.
   */


  flag(flagName) {
    return this.boolean(flagName);
  }

}

exports.Environment = Environment;
const Env = new Environment();
global.env = Env;
var _default = Env;
exports.default = _default;