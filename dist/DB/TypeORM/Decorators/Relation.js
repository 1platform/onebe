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

/**
 * Function used to document the relation between two models.
 *
 * This function is used by all the available model/entity relations that can be defined
 * for a model that is using TypeORM. Based on the `typeFunctionOrTarget` parameter the
 * frameworks generates metadata for the given property in the given model class.
 * This metadata is then enhanced by the model definition and exposed to the
 * developers through the Documentation SDK and API.
 *
 * @param object The model constructor.
 * @param propertyName The name of the property we want to document
 * @param [typeFunctionOrTarget] The type of the relation or function used to define the target of the relation.
 * @param [isArray] Is the relation describing an array or a single element.
 */
function DocumentEntityRelation(object, propertyName, typeFunctionOrTarget, isArray) {
  _MetadataStore.default.instance.entity.addRelation(object.constructor.name, propertyName, typeFunctionOrTarget, isArray ?? false);
}
/**
 * Decorator used to define a many-to-one relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the many-to-one relation.
 * @param [options] A list of options used for defining the relation.
 */


function ManyToOne(typeFunctionOrTarget, options) {
  return function (object, propertyName) {
    (0, _typeorm.ManyToOne)(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntityRelation(object, propertyName, typeFunctionOrTarget);
  };
}
/**
 * Decorator used to define a many-to-many relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the many-to-many relation.
 * @param [inverseSide] The inverse side target of the many-to-many relation.
 * @param [options] A list of options used for defining the relation.
 */


function ManyToMany(typeFunctionOrTarget, inverseSide, options) {
  return function (object, propertyName) {
    (0, _typeorm.ManyToMany)(typeFunctionOrTarget, inverseSide, options)(object, propertyName);
    DocumentEntityRelation(object, propertyName, typeFunctionOrTarget, true);
  };
}
/**
 * Decorator used to define a one-to-many relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the one-to-many relation.
 * @param [inverseSide] The inverse side target of the one-to-many relation.
 * @param [options] A list of options used for defining the relation.
 */


function OneToMany(typeFunctionOrTarget, inverseSide, options) {
  return function (object, propertyName) {
    (0, _typeorm.OneToMany)(typeFunctionOrTarget, inverseSide, options)(object, propertyName);
    DocumentEntityRelation(object, propertyName, typeFunctionOrTarget, true);
  };
}
/**
 * Decorator used to define a one-to-one relation between two models.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param typeFunctionOrTarget The target of the one-to-one relation.
 * @param [options] A list of options used for defining the relation.
 */


function OneToOne(typeFunctionOrTarget, options) {
  return function (object, propertyName) {
    (0, _typeorm.OneToOne)(typeFunctionOrTarget, options)(object, propertyName);
    DocumentEntityRelation(object, propertyName, typeFunctionOrTarget, false);
  };
}
/**
 * Decorator used to define a column used to store the relation key for a referenced model.
 *
 * As a bonus, this decorator will add metadata information to the column that
 * will be used for documentation.
 *
 * @decorator
 * @param [options] A list of options used for defining the join column.
 */


function JoinColumn(options) {
  return function (object, propertyName) {
    (0, _typeorm.JoinColumn)(options)(object, propertyName);

    _MetadataStore.default.instance.entity.relationField(object.constructor.name, propertyName, options.name);
  };
}