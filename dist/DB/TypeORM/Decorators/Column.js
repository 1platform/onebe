"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = Column;
exports.CreateDateColumn = CreateDateColumn;
exports.DeleteDateColumn = DeleteDateColumn;
exports.ObjectIdColumn = ObjectIdColumn;
exports.PrimaryColumn = PrimaryColumn;
exports.PrimaryGeneratedColumn = PrimaryGeneratedColumn;
exports.UpdateDateColumn = UpdateDateColumn;
exports.VersionColumn = VersionColumn;
exports.ViewColumn = ViewColumn;

var _typeorm = require("typeorm");

var _EntityMetadata = require("../../../Documentation/Definition/EntityMetadata");

var _MetadataStore = _interopRequireDefault(require("../../../Documentation/MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentEntity(object, propertyName, columnOptions) {
  _MetadataStore.default.instance.entity.property(object.constructor.name, propertyName, {
    description: columnOptions.description,
    required: !columnOptions.nullable ?? true,
    dataType: (0, _EntityMetadata.mapSQLToEntity)(columnOptions.type || "string"),
    length: columnOptions.length,
    isDate: columnOptions.type === "date",
    isDateTime: ["datetime", "timestamp"].indexOf(columnOptions.type?.toString()) >= 0,
    fieldName: columnOptions.name || propertyName
  });

  if (columnOptions.primary) {
    _MetadataStore.default.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  }
}

function UpdateDateColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.UpdateDateColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

function DeleteDateColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.DeleteDateColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

function CreateDateColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.CreateDateColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

function PrimaryColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.PrimaryColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);

    _MetadataStore.default.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  };
}

function PrimaryGeneratedColumn(strategy, options) {
  return function (object, propertyName) {
    (0, _typeorm.PrimaryGeneratedColumn)(strategy, options)(object, propertyName);
    DocumentEntity(object, propertyName, options ?? strategy);

    _MetadataStore.default.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  };
}

function VersionColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.VersionColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

function ViewColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.ViewColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

function ObjectIdColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.ObjectIdColumn)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}

function Column(options) {
  return function (object, propertyName) {
    (0, _typeorm.Column)(options)(object, propertyName);
    DocumentEntity(object, propertyName, options);
  };
}