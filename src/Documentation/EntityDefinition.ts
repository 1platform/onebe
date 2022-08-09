import {
  EntityPropertyDataTypes,
  IEntityMetadata,
  IEntityProperty,
  IEntityPropertyMetadata,
  IRelationMetadata,
} from "./Definition/EntityMetadata";
import { ObjectType } from "typeorm";
import { Constructor } from "./MetadataTypes";

export default class EntityDefinition {
  private _entities: Record<string, IEntityMetadata> = {};
  private _relations: Record<string, Array<IRelationMetadata>> = {};
  private _mapping: Record<string, Record<string, string>> = {};

  public get list(): Array<IEntityMetadata> {
    return Object.values(this._entities);
  }

  public add(name: string, description?: string): EntityDefinition {
    this._entities[name] = {
      name,
      description: description ?? "",
      properties: [],
      extends: "",
    };

    return this;
  }

  public entity(name: string): IEntityMetadata {
    if (!this._entities[name]) {
      this.add(name);
    }
    return this._entities[name];
  }

  public update(name: string, description?: string): IEntityMetadata {
    if (!this._entities[name]) {
      this.add(name, description);
    } else {
      this._entities[name].description = description;
    }
    return this._entities[name];
  }

  public tableName(entity: string, tableName: string): EntityDefinition {
    this._entities[entity].tableName = tableName;
    return this;
  }

  public extends(entity: string, extendedEntity: string): EntityDefinition {
    if (
      extendedEntity.toLowerCase() !== "object" &&
      extendedEntity.toLowerCase() !== "baseentity"
    ) {
      this._entities[entity].extends = extendedEntity;
    }
    return this;
  }

  public property(
    entity: string,
    propertyName: string,
    propertyOptions: IEntityProperty,
    afterProperty?: string
  ): EntityDefinition {
    const entityDoc = this.entity(entity);

    if (this.hasProperty(entity, propertyName)) {
      const propertyIndex = entityDoc.properties.findIndex(
        (property) => property.name === propertyName
      );
      const property = entityDoc.properties[propertyIndex];
      entityDoc.properties.splice(propertyIndex, 1, {
        ...property,
        dataType: propertyOptions.dataType,
        options: {
          ...property.options,
          ...propertyOptions,
        },
      });

      return this;
    }

    const newProperty: IEntityPropertyMetadata = {
      name: propertyName,
      dataType: propertyOptions.dataType,
      options: propertyOptions,
    };

    if (afterProperty) {
      const propertyIndex = entityDoc.properties.findIndex(
        (property) => property.name === afterProperty
      );
      entityDoc.properties.splice(propertyIndex, 0, newProperty);
    } else {
      entityDoc.properties.push(newProperty);
    }
    return this;
  }

  public hasProperty(entity: string, propertyName: string): boolean {
    if (!this._entities[entity]) {
      return false;
    }

    return (
      this._entities[entity].properties.findIndex(
        (property) => property.name === propertyName
      ) >= 0
    );
  }

  public markPrimaryKey(entity: string, propertyName: string): void {
    if (!this._entities[entity]) {
      return;
    }

    const propertyItemIndex = this._entities[entity].properties.findIndex(
      (property) => property.name === propertyName
    );

    if (propertyItemIndex < 0) {
      return;
    }

    const propertyItem = this._entities[entity].properties[propertyItemIndex];
    propertyItem.isPrimaryKey = true;
    propertyItem.options.isPrimaryKey = true;
    this._entities[entity].properties.splice(
      propertyItemIndex,
      1,
      propertyItem
    );
  }

  public markRequired(entity: string, propertyName: string): void {
    if (!this._entities[entity]) {
      return;
    }

    const propertyItemIndex = this._entities[entity].properties.findIndex(
      (property) => property.name === propertyName
    );

    if (propertyItemIndex < 0) {
      return;
    }

    const propertyItem = this._entities[entity].properties[propertyItemIndex];
    propertyItem.required = true;
    propertyItem.options.required = true;
    this._entities[entity].properties.splice(
      propertyItemIndex,
      1,
      propertyItem
    );
  }

  public getPrimaryKey(entity: string): Array<IEntityPropertyMetadata> {
    if (!this._entities[entity]) {
      return [];
    }

    return this._entities[entity].properties.filter(
      (property) => property.isPrimaryKey
    );
  }

  public buildEntityList(): Array<IEntityMetadata> {
    return Object.keys(this._entities).map((entityName) => {
      const entity = { ...this._entities[entityName] };
      entity.properties = [ ...(entity.properties || []) ];
      if (entity.extends) {
        entity.properties = [
          ...this.getParentEntityProperties(entity.extends),
          ...entity.properties,
        ];
      }

      delete entity.extends;
      return entity;
    });
  }

  public addRelation<T = Constructor>(
    entity: string,
    propertyName: string,
    typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>),
    isArray?: boolean
  ): void {
    if (!this._relations[entity]) {
      this._relations[entity] = [];
    }

    this._relations[entity].push({
      propertyName,
      typeFunctionOrTarget,
      isArray: isArray ?? false,
    });

    this.property(entity, propertyName, {
      dataType: isArray
        ? EntityPropertyDataTypes.ARRAY
        : EntityPropertyDataTypes.OBJECT,
      fieldName: propertyName,
    });
  }

  public relationField(
    entity: string,
    propertyName: string,
    relationField: string
  ): void {
    if (!this._mapping[entity]) {
      this._mapping[entity] = {};
    }

    this._mapping[entity][propertyName] = relationField;
  }

  public registerRelations(): void {
    for (const entity of Object.keys(this._relations)) {
      for (const relation of this._relations[entity]) {
        this.registerRelation(entity, relation);
      }
    }
  }

  protected registerRelation(
    entityName: string,
    relation: IRelationMetadata
  ): void {
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
      fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }Id`;
    } else {
      name = relation.typeFunctionOrTarget;
      fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }Id`;
    }

    const primaryKeyList = this.getPrimaryKey(name);
    if (primaryKeyList.length > 0) {
      idField = primaryKeyList[0].name;
      fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }${ idField
        .slice(0, 1)
        .toUpperCase() }${ idField.slice(1) }`;
      dataType = primaryKeyList[0].dataType;
    }

    if (
      this._mapping[entityName] &&
      this._mapping[entityName][relation.propertyName]
    ) {
      fieldName = this._mapping[entityName][relation.propertyName];
    }

    this.property(entityName, relation.propertyName, {
      dataType: relation.isArray
        ? EntityPropertyDataTypes.ARRAY
        : EntityPropertyDataTypes.OBJECT,
      fieldName,
      reference: name,
      referenceId: idField,
    });

    if (!this.hasProperty(name, fieldName) && !relation.isArray) {
      this.property(
        entityName,
        fieldName,
        {
          dataType: dataType as EntityPropertyDataTypes,
        },
        relation.propertyName
      );
    }
  }

  protected getParentEntityProperties(
    parentEntityName: string
  ): Array<IEntityPropertyMetadata> {
    const parentEntity = this._entities[parentEntityName];
    const properties = [ ...(parentEntity.properties || []) ];
    if (parentEntity.extends) {
      properties.unshift(
        ...this.getParentEntityProperties(parentEntity.extends)
      );
    }
    return properties;
  }
}
