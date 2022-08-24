"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * The base class for entities defined in your application.
 *
 * Use this class as a base when defining an entity that can be reused
 * in your application. This class allows you to easily fill an entity
 * with data very fast and get the contents as an object.
 */
class BaseEntity {
  /**
   * Constructor used to create a new Entity and fill it with data.
   *
   * @param [options] A map of properties with values that can be filled in the current entity.
   */
  constructor(options) {
    this.init(options);
  }
  /**
   * Method used to init the entity with data.
   *
   * @param [options] A map of properties with values that can be filled in the current entity.
   */


  init(options) {
    if (options) {
      Object.keys(options).forEach(key => {
        this[key] = options[key];
      });
    }
  }
  /**
   * Return the data from the entity as an object.
   *
   * Use this method when you want to extract the data from the entity.
   */


  toJSON() {
    return JSON.parse(JSON.stringify(this));
  }
  /**
   * Return the data from the entity as an object.
   *
   * Use this method when you want to extract the data from the entity.
   * This is an alias for the `toJSON` method.
   */


  toObject() {
    return this.toJSON();
  }

}

exports.default = BaseEntity;