"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MetadataStore = _interopRequireDefault(require("../MetadataStore"));

var _EntityMetadata = require("../Definition/EntityMetadata");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CustomEntityHelper {
  constructor(entityName) {
    _defineProperty(this, "_entityName", void 0);

    this._entityName = entityName;
  }

  extends(baseClass) {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.extends(this._entityName, baseClass);
    return this;
  }

  property(propertyName, propertyOptions) {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.property(this._entityName, propertyName, _objectSpread({
      required: false
    }, propertyOptions));
    return this;
  }

  requiredProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      required: true
    }));
  }

  dateProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.STRING,
      isDate: true
    }));
  }

  dateTimeProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.STRING,
      isDateTime: true
    }));
  }

  numberProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.NUMBER
    }));
  }

  booleanProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.BOOLEAN
    }));
  }

  integerProperty(propertyName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.INTEGER
    }));
  }

  arrayProperty(propertyName, dataType, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.ARRAY,
      childType: dataType
    }));
  }

  entityArrayProperty(propertyName, referenceEntityName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.ARRAY,
      reference: referenceEntityName
    }));
  }

  entityProperty(propertyName, referenceEntityName, propertyOptions) {
    return this.property(propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.OBJECT,
      reference: referenceEntityName
    }));
  }

}

const EntityHelpers = {
  entity: (name, description) => {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.add(name, description);
    return new CustomEntityHelper(name);
  },
  extends: (entityName, baseEntity) => {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.extends(entityName, baseEntity);
    return new CustomEntityHelper(entityName);
  },
  property: (entityName, propertyName, propertyOptions) => {
    const entityMetadata = _MetadataStore.default.instance.entity;
    entityMetadata.property(entityName, propertyName, _objectSpread({
      required: false
    }, propertyOptions));
    return new CustomEntityHelper(entityName);
  },
  requiredProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      required: true
    }));
  },
  dateProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.STRING,
      isDate: true
    }));
  },
  dateTimeProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.STRING,
      isDateTime: true
    }));
  },
  numberProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.NUMBER
    }));
  },
  booleanProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.BOOLEAN
    }));
  },
  integerProperty: (entityName, propertyName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.INTEGER
    }));
  },
  arrayProperty: (entityName, propertyName, dataType, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.ARRAY,
      childType: dataType
    }));
  },
  entityArrayProperty: (entityName, propertyName, referenceEntityName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.ARRAY,
      reference: referenceEntityName
    }));
  },
  entityProperty: (entityName, propertyName, referenceEntityName, propertyOptions) => {
    return EntityHelpers.property(entityName, propertyName, _objectSpread(_objectSpread({}, propertyOptions), {}, {
      dataType: _EntityMetadata.EntityPropertyDataTypes.OBJECT,
      reference: referenceEntityName
    }));
  }
};
var _default = EntityHelpers;
exports.default = _default;