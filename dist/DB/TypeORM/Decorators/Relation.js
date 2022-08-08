"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var _EntityMetadata = require("../../../Documentation/Definition/EntityMetadata");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentEntity(object, propertyName, typeFunctionOrTarget, isArray) {
  let name = "";
  let idField = "id";
  let dataType = "integer";
  let fieldName = "";
  const entityMetadata = _MetadataStore.default.instance.entity;

  if (typeof typeFunctionOrTarget !== "string") {
    const result = typeFunctionOrTarget();
    console.log(result, propertyName, object.constructor.name);

    if (!result) {
      return;
    }

    name = result.name;
    fieldName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}Id`;
  } else {
    name = typeFunctionOrTarget;
    fieldName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}Id`;
  }

  const primaryKeyList = entityMetadata.getPrimaryKey(name);

  if (primaryKeyList.length > 0) {
    idField = primaryKeyList[0].name;
    fieldName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}${idField.slice(0, 1).toUpperCase()}${idField.slice(1)}`;
    dataType = primaryKeyList[0].dataType;
  }

  entityMetadata.property(object.constructor.name, propertyName, {
    dataType: isArray ? _EntityMetadata.EntityPropertyDataTypes.ARRAY : _EntityMetadata.EntityPropertyDataTypes.OBJECT,
    fieldName,
    reference: name,
    referenceId: idField
  });

  if (!entityMetadata.hasProperty(name, fieldName)) {
    entityMetadata.property(object.constructor.name, fieldName, {
      dataType: dataType
    });
  }
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