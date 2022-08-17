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

/**
 * Function used to document a property of a model class.
 *
 * This function is used by all the various types of columns that can be defined
 * for a model that is using TypeORM. Based on the `columnOptions` parameter the
 * frameworks generates metadata for the given property in the given model class.
 * This metadata is then enhanced by the model definition and exposed to the
 * developers through the Documentation SDK and API.
 *
 * @param object The model constructor.
 * @param propertyName The name of the property we want to document
 * @param [columnOptions] The options used to describe the column in the database.
 */
function DocumentEntityProperty(object, propertyName, columnOptions) {
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
/**
 * Decorator used to define a column used to store the modification date of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the modification date column.
 */


function UpdateDateColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.UpdateDateColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
/**
 * Decorator used to define a column used to store the deletion date of a model.
 * This kind of column is usually used when you want to do soft deletion in your
 * application.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the deletion date column.
 */


function DeleteDateColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.DeleteDateColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
/**
 * Decorator used to define a column used to store the creation date of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the creation date column.
 */


function CreateDateColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.CreateDateColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
/**
 * Decorator used to define a column used to store the primary key of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the primary key column.
 */


function PrimaryColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.PrimaryColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);

    _MetadataStore.default.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  };
}
/**
 * Decorator used to define a column used to store a generated primary key of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param strategy The strategy used for generating the primary key or the list of options used for
 *                 defining the generated primary key column.
 * @param options A list of options used for defining the generated primary key column.
 */


function PrimaryGeneratedColumn(strategy, options) {
  return function (object, propertyName) {
    (0, _typeorm.PrimaryGeneratedColumn)(strategy, options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options ?? strategy);

    _MetadataStore.default.instance.entity.markPrimaryKey(object.constructor.name, propertyName);
  };
}
/**
 * Decorator used to define a column used to store the version of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the version column.
 */


function VersionColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.VersionColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
/**
 * Decorator used to mark a column of a model as a view column.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the view column.
 */


function ViewColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.ViewColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
/**
 * Decorator used to mark a column of a model as an ObjectId column.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the ObjectId column.
 */


function ObjectIdColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.ObjectIdColumn)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}
/**
 * Decorator used to define the column of a model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the column.
 */


function Column(options) {
  return function (object, propertyName) {
    (0, _typeorm.Column)(options)(object, propertyName);
    DocumentEntityProperty(object, propertyName, options);
  };
}