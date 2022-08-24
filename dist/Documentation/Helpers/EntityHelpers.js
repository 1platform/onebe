"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CustomEntityHelper = void 0;

var _MetadataStore = _interopRequireDefault(require("../MetadataStore"));

var _DataTypes = require("../Definition/DataTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Helper class used to document a custom entity. Use this class only when you want
 * to document an interface.
 *
 * Instances of this class are created using the exposed helper functions defined below.
 * The scope of this class is to provide an Object-Oriented way to define Custom Entities.
 */
class CustomEntityHelper {
  /**
   * The name of the entity you are documenting.
   */

  /**
   * Custom Entity helper constructor.
   *
   * @param entityName The name of the entity you want to document.
   */
  constructor(entityName) {
    _defineProperty(this, "_entityName", void 0);

    this._entityName = entityName;
  }
  /**
   * Helper method used to define the class that the custom entity you are documenting
   * is extending.
   *
   * @param baseClass The name of the class you want to extend.
   */


  extends(baseClass) {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.extends(this._entityName, baseClass);
    return this;
  }
  /**
   * Helper method used to define a property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  property(propertyName, propertyOptions) {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.property(this._entityName, propertyName, _objectSpread({
      required: false
    }, propertyOptions));
    return this;
  }
  /**
   * Helper method used to define a required property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  requiredProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      required: true
    }));
  }
  /**
   * Helper method used to define a Date property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  dateProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING,
      isDate: true
    }));
  }
  /**
   * Helper method used to define a DateTime property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  dateTimeProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING,
      isDateTime: true
    }));
  }
  /**
   * Helper method used to define a Number property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  numberProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.NUMBER
    }));
  }
  /**
   * Helper method used to define a Boolean property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  booleanProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.BOOLEAN
    }));
  }
  /**
   * Helper method used to define an Integer property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */


  integerProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.INTEGER
    }));
  }
  /**
   * Helper method used to define an Array property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param dataType The data type of the array items.
   * @param propertyOptions The definition of the property.
   */


  arrayProperty(propertyName, dataType, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
      childType: dataType
    }));
  }
  /**
   * Helper method used to define an Array of Entity property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param referenceEntityName The name of the entity used to describe the items of the property.
   * @param propertyOptions The definition of the property.
   */


  entityArrayProperty(propertyName, referenceEntityName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
      reference: referenceEntityName
    }));
  }
  /**
   * Helper method used to define an Object property from a custom entity.
   *
   * @param propertyName The name of the property you want to document.
   * @param referenceEntityName The name of the entity used to describe the property contents.
   * @param propertyOptions The definition of the property.
   */


  entityProperty(propertyName, referenceEntityName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.OBJECT,
      reference: referenceEntityName
    }));
  }

}
/**
 * Helper functions to document custom entities using interfaces.
 */


exports.CustomEntityHelper = CustomEntityHelper;
const EntityHelpers = {
  /**
   * Helper function used to document an entity. Use this helper method only
   * to document interfaces.
   *
   * @param name The name of the entity you are documenting.
   * @param [description] A short description of the entity.
   */
  entity: (name, description) => {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.add(name, description);
    return new CustomEntityHelper(name);
  },

  /**
   * Helper function used to define the class that the custom entity you are documenting
   * is extending.
   *
   * @param entityName The name of the entity you are documenting.
   * @param baseEntity The name of the class you want to extend.
   */
  extends: (entityName, baseEntity) => {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.extends(entityName, baseEntity);
    return new CustomEntityHelper(entityName);
  },

  /**
   * Helper function used to define a property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  property: (entityName, propertyName, propertyOptions) => {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.property(entityName, propertyName, _objectSpread({
      required: false
    }, propertyOptions));
    return new CustomEntityHelper(entityName);
  },

  /**
   * Helper function used to define a required property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  requiredProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      required: true
    }));
  },

  /**
   * Helper function used to define a Date property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  dateProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING,
      isDate: true
    }));
  },

  /**
   * Helper function used to define a DateTime property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  dateTimeProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.STRING,
      isDateTime: true
    }));
  },

  /**
   * Helper function used to define a Number property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  numberProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.NUMBER
    }));
  },

  /**
   * Helper function used to define a Boolean property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  booleanProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.BOOLEAN
    }));
  },

  /**
   * Helper function used to define an Integer property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param propertyOptions The definition of the property.
   */
  integerProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.INTEGER
    }));
  },

  /**
   * Helper function used to define an Array property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param dataType The data type of the array items.
   * @param propertyOptions The definition of the property.
   */
  arrayProperty: (entityName, propertyName, dataType, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
      childType: dataType
    }));
  },

  /**
   * Helper function used to define an Array of Entity property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param referenceEntityName The name of the entity used to describe the items of the property.
   * @param propertyOptions The definition of the property.
   */
  entityArrayProperty: (entityName, propertyName, referenceEntityName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.ARRAY,
      reference: referenceEntityName
    }));
  },

  /**
   * Helper function used to define an Object property from a custom entity.
   *
   * @param entityName The name of the entity you are documenting.
   * @param propertyName The name of the property you want to document.
   * @param referenceEntityName The name of the entity used to describe the property contents.
   * @param propertyOptions The definition of the property.
   */
  entityProperty: (entityName, propertyName, referenceEntityName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _DataTypes.EntityPropertyDataTypes.OBJECT,
      reference: referenceEntityName
    }));
  }
};
var _default = EntityHelpers;
exports.default = _default;