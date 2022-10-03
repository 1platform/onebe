import { IEntityMetadata, IEntityProperty, IEntityPropertyMetadata, IRelationMetadata } from "./Definition/EntityMetadata";
import { ObjectLiteral, ObjectType } from "typeorm";
import { Constructor } from "./MetadataTypes";
import { EntityPropertyDataTypes } from "./Definition/DataTypes";

export default class EntityDefinition {
  /**
   * A map with all the entities you defined in the application.
   */
  private _entities: Record<string, IEntityMetadata> = {};

  /**
   * A map with all the relations between entities defined in the application.
   */
  private _relations: Record<string, Array<IRelationMetadata>> = {};

  /**
   * A map with the mapping fields between relations and entities.
   */
  private _mapping: Record<string, Record<string, string>> = {};

  /**
   * Getter used to list all the entities defined in the application.
   */
  public get list(): Array<IEntityMetadata> {
    return Object.values(this._entities);
  }

  /**
   * Builds the list of entities, based on the relation between them and
   * the parents defined for each of them.
   */
  public buildEntityList(): Array<IEntityMetadata> {
    return Object.keys(this._entities).map((entityName) => {
      const entity = { ...this._entities[entityName] };
      entity.properties = [ ...(entity.properties || []) ];
      if (entity.extends) {
        entity.properties = entity.extends.reduce((accum, extender) => [ ...accum, ...this.getParentEntityProperties(extender) ], []);
        entity.properties.push(...entity.properties);
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
  public add(entity: string, description?: string): EntityDefinition {
    this._entities[entity] = {
      name: entity,
      description: description ?? "",
      properties: [],
      extends: [],
    };

    return this;
  }

  /**
   * Method used to get an entity from the entity metadata store. If the entity does
   * not exist yet, it will create it.
   *
   * @param entity The entity on which we add information.
   */
  public entity(entity: string): IEntityMetadata {
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
  public update(entity: string, description?: string): IEntityMetadata {
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
  public tableName(entity: string, tableName: string): EntityDefinition {
    this._entities[entity].tableName = tableName;
    return this;
  }

  /**
   * Method used to define the parent entity of the current entity.
   *
   * @param entity The entity on which we add information.
   * @param extendedEntity The entity from which we get additional information.
   */
  public extends(entity: string, extendedEntity: string): EntityDefinition {
    if (extendedEntity.toLowerCase() !== "object" && extendedEntity.toLowerCase() !== "baseentity") {
      if (!this._entities[entity].extends) {
        this._entities[entity].extends = [];
      }
      this._entities[entity].extends.push(extendedEntity);
    }
    return this;
  }

  /**
   * Method used to define the parent entity of the current entity.
   *
   * @param entity The entity on which we add information.
   * @param baseClass The actual entity class.
   */
  public buildChainExtension(entity, baseClass: Constructor | ObjectLiteral): EntityDefinition {
    let name = entity;
    let prototypeObject = Object.getPrototypeOf(baseClass);

    do {
      this.extends(name, prototypeObject.name);
      name = prototypeObject.name;
      prototypeObject = Object.getPrototypeOf(prototypeObject);
    } while (
      prototypeObject &&
      prototypeObject.name &&
      prototypeObject.name.toLowerCase() !== "object" &&
      prototypeObject.name.toLowerCase() !== "baseentity"
    );

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
  public property(entity: string, propertyName: string, propertyOptions: IEntityProperty, afterProperty?: string): EntityDefinition {
    const entityDoc = this.entity(entity);

    if (this.hasProperty(entity, propertyName)) {
      const propertyIndex = entityDoc.properties.findIndex((property) => property.name === propertyName);
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
      const propertyIndex = entityDoc.properties.findIndex((property) => property.name === afterProperty);
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
  public hasProperty(entity: string, propertyName: string): boolean {
    if (!this._entities[entity]) {
      return false;
    }

    return this._entities[entity].properties.findIndex((property) => property.name === propertyName) >= 0;
  }

  /**
   * Method used to mark a property as a primary key.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   */
  public markPrimaryKey(entity: string, propertyName: string): void {
    if (!this._entities[entity]) {
      return;
    }

    const propertyItemIndex = this._entities[entity].properties.findIndex((property) => property.name === propertyName);

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
  public markRequired(entity: string, propertyName: string): void {
    if (!this._entities[entity]) {
      return;
    }

    const propertyItemIndex = this._entities[entity].properties.findIndex((property) => property.name === propertyName);

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
  public getPrimaryKey(entity: string): Array<IEntityPropertyMetadata> {
    if (!this._entities[entity]) {
      return [];
    }

    return this._entities[entity].properties.filter((property) => property.isPrimaryKey);
  }

  /**
   * Method used to add a relation between entities.
   *
   * @param entity The entity on which we add information.
   * @param propertyName The name of the property on which we add information.
   * @param typeFunctionOrTarget The target of the relation.
   * @param [isArray] Flag to mark the relation as one-to-many or many-to-many.
   */
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
      dataType: isArray ? EntityPropertyDataTypes.ARRAY : EntityPropertyDataTypes.OBJECT,
      fieldName: propertyName,
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
  public relationField(entity: string, propertyName: string, relationField: string): void {
    if (!this._mapping[entity]) {
      this._mapping[entity] = {};
    }

    this._mapping[entity][propertyName] = relationField;
  }

  /**
   * Method used to register all the relations between entities.
   */
  public registerRelations(): void {
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
  protected registerRelation(entity: string, relation: IRelationMetadata): void {
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
      fieldName = `${ name.slice(0, 1).toLowerCase() }${ name.slice(1) }${ idField.slice(0, 1).toUpperCase() }${ idField.slice(1) }`;
      dataType = primaryKeyList[0].dataType;
    }

    if (this._mapping[entity] && this._mapping[entity][relation.propertyName]) {
      fieldName = this._mapping[entity][relation.propertyName];
    }

    this.property(entity, relation.propertyName, {
      dataType: relation.isArray ? EntityPropertyDataTypes.ARRAY : EntityPropertyDataTypes.OBJECT,
      fieldName,
      reference: name,
      referenceId: idField,
    });

    if (!this.hasProperty(name, fieldName) && !relation.isArray) {
      this.property(
        entity,
        fieldName,
        {
          dataType: dataType as EntityPropertyDataTypes,
        },
        relation.propertyName
      );
    }
  }

  /**
   * Method used internally to get properties of the parent entities of an entity.
   *
   * @param parentEntityName The name of the parent entity.
   */
  protected getParentEntityProperties(parentEntityName: string): Array<IEntityPropertyMetadata> {
    const parentEntity = this._entities[parentEntityName];
    const properties = [ ...(parentEntity.properties || []) ];
    if (parentEntity.extends) {
      const parentProperties = parentEntity.extends.reduce((accum, extender) => [ ...accum, ...this.getParentEntityProperties(extender) ], []);
      properties.unshift(...parentProperties);
    }
    return properties;
  }
}
