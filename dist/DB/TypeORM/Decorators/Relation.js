"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoinColumn = JoinColumn;
Object.defineProperty(exports, "JoinTable", {
  enumerable: true,
  get: function () {
    return _typeorm.JoinTable;
  }
});
exports.ManyToMany = ManyToMany;
exports.ManyToOne = ManyToOne;
exports.OneToMany = OneToMany;
exports.OneToOne = OneToOne;

var _typeorm = require("typeorm");

var _MetadataStore = _interopRequireDefault(require("../../../Documentation/MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentEntity(object, propertyName, typeFunctionOrTarget, isArray) {
  _MetadataStore.default.instance.entity.addRelation(object.constructor.name, propertyName, typeFunctionOrTarget, isArray ?? false);
}

function ManyToOne(typeFunctionOrTarget, options) {
  return function (object, propertyName) {
    (0, _typeorm.ManyToOne)(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntity(object, propertyName, typeFunctionOrTarget);
  };
}

function ManyToMany(typeFunctionOrTarget, inverseSide, options) {
  return function (object, propertyName) {
    (0, _typeorm.ManyToMany)(typeFunctionOrTarget, inverseSide, options)(object, propertyName);
    DocumentEntity(object, propertyName, typeFunctionOrTarget, true);
  };
}

function OneToMany(typeFunctionOrTarget, inverseSide, options) {
  return function (object, propertyName) {
    (0, _typeorm.OneToMany)(typeFunctionOrTarget, inverseSide, options)(object, propertyName);
    DocumentEntity(object, propertyName, typeFunctionOrTarget, true);
  };
}

function OneToOne(typeFunctionOrTarget, options) {
  return function (object, propertyName) {
    (0, _typeorm.OneToOne)(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntity(object, propertyName, typeFunctionOrTarget, false);
  };
}

function JoinColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.JoinColumn)(options)(object, propertyName);

    _MetadataStore.default.instance.entity.relationField(object.constructor.name, propertyName, options.name);
  };
}