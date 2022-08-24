"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DataTypes = require("./Definition/DataTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EntityDefinition {
  constructor() {
    _defineProperty(this, "_entities", {});

    _defineProperty(this, "_relations", {});

    _defineProperty(this, "_mapping", {});
  }

  /**
   * Getter used to list all the entities defined in the application.
   */
  get list() {
    return Object.values(this._entities);
  }
  /**
   * Builds the list of entities, based on the relation between them and
   * the parents defined for each of them.
   */


  buildEntityList() {
    return Object.keys(this._entities).map(entityName => {
      const entity = _objectSpread({}, this._entities[entityName]);

      entity.properties = [...(entity.properties || [])];

      if (entity.extends) {
        entity.properties = [...this.getParentEntityProperties(entity.extends), ...entity.properties];
      }

      delete entity.extends;
      return entity;
    });
  }
  /**
   *  Method used to add a new entity in the entity metadata store.
   *
   * @param entity The entity on which we add information.
   * @param [description] A short description of the entity.
   */


  add(entity, description) {
    this._entities[entity] = {
      name: entity,
      description: description ?? "",
      properties: [],
      extends: ""
    };
    return this;
  }
  /**
   * Method used to get an entity from the entity metadata store. If the entity does
   * not exist yet, it will create it.
   *
   * @param entity The entity on which we add information.
   */


  entity(entity) {
    if (!this._entities[entity]) {
      this.add(entity);
    }

    return this._entities[entity];
  }
  /**
   * Method used to update the information about an entity. If the entity does not exist
   * it will be created.
   *
   * @param entity The entity on which we add information.
   * @param [description] A short description of the entity.
   */


  update(entity, description) {
    if (!this._entities[entity]) {
      this.add(entity, description);
    } else {
      this._entities[entity].description = description;
    }

    return this._entities[entity];
  }
  /**
   * Method used to attach a table name to an entity.
   *
   * @param entity The entity on which we add information.
   * @param tableName The name of the table attached to the entity.
   */


  tableName(entity, tableName) {
    this._entities[entity].tableName = tableName;
    return this;
  }
  /**
   * Method used to define the parent entity of the current entity.
   *
   * @param entity The entity on which we add information.
   * @param extendedEntity The entity from which we get additional information.
   */


  extends(entity, extendedEntity) {
    if (extendedEntity.toLowerCase() !== "object" && extendedEntity.toLowerCase() !== "baseentity") {
      this._entities[entity].extends = extendedEntity;
    }

    return this;
  }
  /**
   * Method used to document properties of the entity.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   * @param propertyOptions The list of options related to the property.
   * @param [afterProperty] The name of the property after which we add the property.
   */


  property(entity, propertyName, propertyOptions, afterProperty) {
    const entityDoc = this.entity(entity);

    if (this.hasProperty(entity, propertyName)) {
      const propertyIndex = entityDoc.properties.findIndex(property => property.name === propertyName);
      const property = entityDoc.properties[propertyIndex];
      entityDoc.properties.splice(propertyIndex, 1, _objectSpread(_objectSpread({}, property), {}, {
        dataType: propertyOptions.dataType,
        options: _objectSpread(_objectSpread({}, property.options), propertyOptions)
      }));
      return this;
    }

    const newProperty = {
      name: propertyName,
      dataType: propertyOptions.dataType,
      options: propertyOptions
    };

    if (afterProperty) {
      const propertyIndex = entityDoc.properties.findIndex(property => property.name === afterProperty);
      entityDoc.properties.splice(propertyIndex, 0, newProperty);
    } else {
      entityDoc.properties.push(newProperty);
    }

    return this;
  }
  /**
   * Check if an entity has the given property.
   *
   * @param entity The entity on which we perform the check.
   * @param propertyName The name of the property which we want to check after.
   */


  hasProperty(entity, propertyName) {
    if (!this._entities[entity]) {
      return false;
    }

    return this._entities[entity].properties.findIndex(property => property.name === propertyName) >= 0;
  }
  /**
   * Method used to mark a property as a primary key.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   */


  markPrimaryKey(entity, propertyName) {
    if (!this._entities[entity]) {
      return;
    }

    const propertyItemIndex = this._entities[entity].properties.findIndex(property => property.name === propertyName);

    if (propertyItemIndex < 0) {
      return;
    }

    const propertyItem = this._entities[entity].properties[propertyItemIndex];
    propertyItem.isPrimaryKey = true;
    propertyItem.options.isPrimaryKey = true;

    this._entities[entity].properties.splice(propertyItemIndex, 1, propertyItem);
  }
  /**
   * Method used to mark a property as required.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   */


  markRequired(entity, propertyName) {
    if (!this._entities[entity]) {
      return;
    }

    const propertyItemIndex = this._entities[entity].properties.findIndex(property => property.name === propertyName);

    if (propertyItemIndex < 0) {
      return;
    }

    const propertyItem = this._entities[entity].properties[propertyItemIndex];
    propertyItem.required = true;
    propertyItem.options.required = true;

    this._entities[entity].properties.splice(propertyItemIndex, 1, propertyItem);
  }
  /**
   * Returns an array of items marked as primary keys.
   *
   * @param entity The entity on which we add information.
   */


  getPrimaryKey(entity) {
    if (!this._entities[entity]) {
      return [];
    }

    return this._entities[entity].properties.filter(property => property.isPrimaryKey);
  }
  /**
   * Method used to add a relation between entities.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   * @param typeFunctionOrTarget The target of the relation.
   * @param [isArray] Flag to mark the relation as one-to-many or many-to-many.
   */


  addRelation(entity, propertyName, typeFunctionOrTarget, isArray) {
    if (!this._relations[entity]) {
      this._relations[entity] = [];
    }

    this._relations[entity].push({
      propertyName,
      typeFunctionOrTarget,
      isArray: isArray ?? false
    });

    this.property(entity, propertyName, {
      dataType: isArray ? _DataTypes.EntityPropertyDataTypes.ARRAY : _DataTypes.EntityPropertyDataTypes.OBJECT,
      fieldName: propertyName
    });
  }
  /**
   * Method used to define the relation between the property and the destination
   * entity.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   * @param relationField The field used for the relation.
   */


  relationField(entity, propertyName, relationField) {
    if (!this._mapping[entity]) {
      this._mapping[entity] = {};
    }

    this._mapping[entity][propertyName] = relationField;
  }
  /**
   * Method used to register all the relations between entities.
   */


  registerRelations() {
    for (const entity of Object.keys(this._relations)) {
      for (const relation of this._relations[entity]) {
        this.registerRelation(entity, relation);
      }
    }
  }
  /**
   * Method used internally to add all the relations for an entity.
   *
   * @param entity The entity on which we add information.
   * @param relation Relation metadata for an entity.
   */


  registerRelation(entity, relation) {
    let name = "";
    let idField = "id";
    let dataType = "integer";
    let fieldName = "";

    if (typeof relation.typeFunctionOrTarget !== "string") {
      const result = relation.typeFunctionOrTarget();

      if (!result) {
        return;
      }

      name = result.name;
      fieldName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}Id`;
    } else {
      name = relation.typeFunctionOrTarget;
      fieldName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}Id`;
    }

    const primaryKeyList = this.getPrimaryKey(name);

    if (primaryKeyList.length > 0) {
      idField = primaryKeyList[0].name;
      fieldName = `${name.slice(0, 1).toLowerCase()}${name.slice(1)}${idField.slice(0, 1).toUpperCase()}${idField.slice(1)}`;
      dataType = primaryKeyList[0].dataType;
    }

    if (this._mapping[entity] && this._mapping[entity][relation.propertyName]) {
      fieldName = this._mapping[entity][relation.propertyName];
    }

    this.property(entity, relation.propertyName, {
      dataType: relation.isArray ? _DataTypes.EntityPropertyDataTypes.ARRAY : _DataTypes.EntityPropertyDataTypes.OBJECT,
      fieldName,
      reference: name,
      referenceId: idField
    });

    if (!this.hasProperty(name, fieldName) && !relation.isArray) {
      this.property(entity, fieldName, {
        dataType: dataType
      }, relation.propertyName);
    }
  }
  /**
   * Method used internally to get properties of the parent entities of an entity.
   *
   * @param parentEntityName The name of the parent entity.
   */


  getParentEntityProperties(parentEntityName) {
    const parentEntity = this._entities[parentEntityName];
    const properties = [...(parentEntity.properties || [])];

    if (parentEntity.extends) {
      properties.unshift(...this.getParentEntityProperties(parentEntity.extends));
    }

    return properties;
  }

}

exports.default = EntityDefinition;