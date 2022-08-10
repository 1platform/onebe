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

  get list() {
    return Object.values(this._entities);
  }

  add(name, description) {
    this._entities[name] = {
      name,
      description: description ?? "",
      properties: [],
      extends: ""
    };
    return this;
  }

  entity(name) {
    if (!this._entities[name]) {
      this.add(name);
    }

    return this._entities[name];
  }

  update(name, description) {
    if (!this._entities[name]) {
      this.add(name, description);
    } else {
      this._entities[name].description = description;
    }

    return this._entities[name];
  }

  tableName(entity, tableName) {
    this._entities[entity].tableName = tableName;
    return this;
  }

  extends(entity, extendedEntity) {
    if (extendedEntity.toLowerCase() !== "object" && extendedEntity.toLowerCase() !== "baseentity") {
      this._entities[entity].extends = extendedEntity;
    }

    return this;
  }

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

  hasProperty(entity, propertyName) {
    if (!this._entities[entity]) {
      return false;
    }

    return this._entities[entity].properties.findIndex(property => property.name === propertyName) >= 0;
  }

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

  getPrimaryKey(entity) {
    if (!this._entities[entity]) {
      return [];
    }

    return this._entities[entity].properties.filter(property => property.isPrimaryKey);
  }

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

  relationField(entity, propertyName, relationField) {
    if (!this._mapping[entity]) {
      this._mapping[entity] = {};
    }

    this._mapping[entity][propertyName] = relationField;
  }

  registerRelations() {
    for (const entity of Object.keys(this._relations)) {
      for (const relation of this._relations[entity]) {
        this.registerRelation(entity, relation);
      }
    }
  }

  registerRelation(entityName, relation) {
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

    if (this._mapping[entityName] && this._mapping[entityName][relation.propertyName]) {
      fieldName = this._mapping[entityName][relation.propertyName];
    }

    this.property(entityName, relation.propertyName, {
      dataType: relation.isArray ? _DataTypes.EntityPropertyDataTypes.ARRAY : _DataTypes.EntityPropertyDataTypes.OBJECT,
      fieldName,
      reference: name,
      referenceId: idField
    });

    if (!this.hasProperty(name, fieldName) && !relation.isArray) {
      this.property(entityName, fieldName, {
        dataType: dataType
      }, relation.propertyName);
    }
  }

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