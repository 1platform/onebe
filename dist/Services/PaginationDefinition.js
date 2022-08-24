"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginatedOptions = exports.PaginatedEntity = void 0;
exports.generatePaginatedEntityDocs = generatePaginatedEntityDocs;

var _BaseEntity = _interopRequireDefault(require("../Documentation/BaseEntity"));

var _EntityDecorators = require("../Documentation/Decorators/EntityDecorators");

var _DataTypes = require("../Documentation/Definition/DataTypes");

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/**
 * The base response for a Paginated Entity.
 */
let PaginatedEntity = (_dec = (0, _EntityDecorators.Entity)("The base of what Paginated Entity looks like"), _dec2 = (0, _EntityDecorators.NumberProperty)({
  description: "Current page served by the paged entity."
}), _dec3 = (0, _EntityDecorators.NumberProperty)({
  description: "How many records contains the page."
}), _dec4 = (0, _EntityDecorators.NumberProperty)({
  description: "How many records are available in the entity table."
}), _dec5 = (0, _EntityDecorators.ArrayProperty)(_DataTypes.EntityPropertyDataTypes.OBJECT, {
  description: "The data fetched from the entity based on the given input parameters."
}), _dec6 = (0, _EntityDecorators.BooleanProperty)({
  description: "Flag to show if there is a next page."
}), _dec7 = (0, _EntityDecorators.StringProperty)({
  description: "URL to the next page."
}), _dec8 = (0, _EntityDecorators.BooleanProperty)({
  description: "Flag to show if there is a previous page."
}), _dec9 = (0, _EntityDecorators.StringProperty)({
  description: "URL to the previous page."
}), _dec(_class = (_class2 = class PaginatedEntity extends _BaseEntity.default {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "page", _descriptor, this);

    _initializerDefineProperty(this, "size", _descriptor2, this);

    _initializerDefineProperty(this, "count", _descriptor3, this);

    _initializerDefineProperty(this, "data", _descriptor4, this);

    _initializerDefineProperty(this, "hasNext", _descriptor5, this);

    _initializerDefineProperty(this, "nextPage", _descriptor6, this);

    _initializerDefineProperty(this, "hasPrevious", _descriptor7, this);

    _initializerDefineProperty(this, "previousPage", _descriptor8, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "page", [_dec2, _EntityDecorators.IsRequired], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec3, _EntityDecorators.IsRequired], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec4, _EntityDecorators.IsRequired], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "data", [_dec5, _EntityDecorators.IsRequired], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hasNext", [_dec6, _EntityDecorators.IsRequired], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nextPage", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hasPrevious", [_dec8, _EntityDecorators.IsRequired], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "previousPage", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
/**
 * The base object to be used when requesting a paginated entity.
 */

exports.PaginatedEntity = PaginatedEntity;

class PaginatedOptions extends _BaseEntity.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "page", void 0);

    _defineProperty(this, "size", void 0);

    _defineProperty(this, "options", void 0);
  }

}
/**
 * Function used to quickly generate documentation for a paginated entity.
 * The result of the function is always: `Paginated<Entity Name>`. For example
 * `PaginatedUser` when you pass `User` as input.
 *
 * @param name The name of the entity you want to document.
 */


exports.PaginatedOptions = PaginatedOptions;

function generatePaginatedEntityDocs(name) {
  const entityMetadata = _MetadataStore.default.instance.entity;
  const paginatedEntity = entityMetadata.entity("PaginatedEntity");
  entityMetadata.add(`Paginated${name}`, paginatedEntity.description);
  entityMetadata.extends(`Paginated${name}`, "PaginatedEntity");
  entityMetadata.property(`Paginated${name}`, "data", {
    dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
    reference: name
  });
  return `Paginated${name}`;
}