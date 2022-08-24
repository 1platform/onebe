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

var _DataTypes = require("../Definition/DataTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Decorator used to describe a custom entity that is extending the
 * BaseEntity class.
 *
 * Using this decorator we can give a custom entity a name and define
 * what other entity it extends. When the Documentation API is exposing
 * the metadata, it will look in the hierarchy of the class and list
 * all the properties in one place.
 *
 * @decorator
 * @param [description] A short description of the entity.
 */
function Entity(description) {
  return function (BaseClass) {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.update(BaseClass.name, description ?? "");
    entityMetadata.extends(BaseClass.name, Object.getPrototypeOf(BaseClass).name);
    return BaseClass;
  };
}
/**
 * Function used to document a property from an entity.
 *
 * @param entity The entity to be documented.
 * @param propertyName The name of the property to be documented.
 * @param [options] Additional options to be passed for documentation purposes.
 */


function DocumentProperty(entity, propertyName, options) {
  _MetadataStore.default.instance.entity.property(entity, propertyName, _objectSpread({
    required: false,
    dataType: _DataTypes.EntityPropertyDataTypes.STRING
  }, options || {}));
}
/**
 * Decorator used to describe the property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function Property(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, options);
  };
}
/**
 * Decorator used to mark the property of a custom entity as required.
 *
 * @decorator
 * @param object The entity on which we apply the decorator.
 * @param propertyName The name of the property on which we apply the decorator.
 */


function IsRequired(object, propertyName) {
  _MetadataStore.default.instance.entity.markRequired(object.constructor.name, propertyName);
}
/**
 * Decorator used to describe a required property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function RequiredProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      required: true
    }));
  };
}
/**
 * Decorator used to describe a date property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function DateProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING,
      isDate: true
    }));
  };
}
/**
 * Decorator used to describe a date-time property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function DateTimeProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING,
      isDateTime: true
    }));
  };
}
/**
 * Decorator used to describe a string property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function StringProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING
    }));
  };
}
/**
 * Decorator used to describe a number property of a custom entity.
 *
 * @param [options] A list of options to define a property of an entity.
 */


function NumberProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.NUMBER
    }));
  };
}
/**
 * Decorator used to describe a boolean property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function BooleanProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.BOOLEAN
    }));
  };
}
/**
 * Decorator used to describe an integer property of a custom entity.
 *
 * @decorator
 * @param [options] A list of options to define a property of an entity.
 */


function IntegerProperty(options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.INTEGER
    }));
  };
}
/**
 * Decorator used to describe an array property of a custom entity.
 *
 * @decorator
 * @param [dataType] The data type of the property.
 * @param [options] A list of options to define a property of an entity.
 */


function ArrayProperty(dataType = _DataTypes.EntityPropertyDataTypes.STRING, options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
      childType: dataType
    }));
  };
}
/**
 * Decorator used to describe a property of a custom entity that references a list of another entities.
 *
 * @decorator
 * @param entityName The name of the entity we want to reference.
 * @param [options] A list of options to define a property of an entity.
 */


function EntityArrayProperty(entityName, options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
      reference: entityName
    }));
  };
}
/**
 * Decorator used to describe a property of a custom entity that references another entity.
 *
 * @decorator
 * @param entityName The name of the entity we want to reference.
 * @param [options] A list of options to define a property of an entity.
 */


function EntityProperty(entityName, options) {
  return function (object, propertyName) {
    DocumentProperty(object.constructor.name, propertyName, _objectSpread(_objectSpread({}, options), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.OBJECT,
      reference: entityName
    }));
  };
}