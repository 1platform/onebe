"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayProperty = ArrayProperty;
exports.BooleanProperty = BooleanProperty;
exports.DateProperty = DateProperty;
exports.DateTimeProperty = DateTimeProperty;
exports.Entity = Entity;
exports.EntityArrayProperty = EntityArrayProperty;
exports.EntityProperty = EntityProperty;
exports.IntegerProperty = IntegerProperty;
exports.IsRequired = IsRequired;
exports.NumberProperty = NumberProperty;
exports.Property = Property;
exports.RequiredProperty = RequiredProperty;
exports.StringProperty = StringProperty;

var _MetadataStore = _interopRequireDefault(require("../MetadataStore"));

var _EntityMetadata = require("../Definition/EntityMetadata");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Entity(name, description) {
  return function (BaseClass) {
    const entity = new BaseClass();
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.update(name ?? entity.constructor.name, description ?? "");
    entityMetadata.extends(name, Object.getPrototypeOf(Object.getPrototypeOf(entity)).constructor.name);
    return BaseClass;
  };
}

function Property(options) {
  return function (object, propertyName) {
    _MetadataStore.default.instance.entity.property(object.constructor.name, propertyName, _objectSpread({
      required: false
    }, options));
  };
}

function IsRequired(object, propertyName) {
  _MetadataStore.default.instance.entity.markRequired(object.constructor.name, propertyName);
}

function RequiredProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    required: true
  }));
}

function DateProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.STRING,
    isDate: true
  }));
}

function DateTimeProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.STRING,
    isDateTime: true
  }));
}

function StringProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.STRING
  }));
}

function NumberProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.NUMBER
  }));
}

function BooleanProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.BOOLEAN
  }));
}

function IntegerProperty(options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.INTEGER
  }));
}

function ArrayProperty(dataType, options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.ARRAY,
    childType: dataType
  }));
}

function EntityArrayProperty(entityName, options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.ARRAY,
    reference: entityName
  }));
}

function EntityProperty(entityName, options) {
  return Property(_objectSpread(_objectSpread({}, options), {}, {
    dataType: _EntityMetadata.EntityPropertyDataTypes.OBJECT,
    reference: entityName
  }));
}