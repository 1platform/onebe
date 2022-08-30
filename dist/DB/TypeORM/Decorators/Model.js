"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = Model;

var _typeorm = require("typeorm");

var _ObjectUtils = require("typeorm/util/ObjectUtils");

var _MetadataStore = _interopRequireDefault(require("../../../Documentation/MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This decorator is used to mark classes that will be an entity (table or document
 * depend on database type). Database schema will be created for all classes decorated
 * with it and Repository can be retrieved and used for it.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [nameOrOptions] The name of the entity or options used to define the entity.
 * @param [maybeOptions] Options used for the entity definition.
 */
function Model(nameOrOptions, maybeOptions) {
  const options = (_ObjectUtils.ObjectUtils.isObject(nameOrOptions) ? nameOrOptions : maybeOptions) || {};
  const name = typeof nameOrOptions === "string" ? nameOrOptions : options.name;
  return function (BaseClass) {
    (0, _typeorm.Entity)(name, options)(BaseClass);
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.update(name, options.description ?? "");
    entityMetadata.tableName(BaseClass.name, name);
    entityMetadata.extends(name, Object.getPrototypeOf(BaseClass).name);
    return BaseClass;
  };
}