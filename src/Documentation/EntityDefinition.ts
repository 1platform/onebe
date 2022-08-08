import {
  IEntityMetadata,
  IEntityProperty,
  IEntityPropertyMetadata,
} from "./Definition/EntityMetadata";

export default class EntityDefinition {
  private _entities: Record<string, IEntityMetadata> = {};

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
    propertyOptions: IEntityProperty
  ): EntityDefinition {
    const newProperty: IEntityPropertyMetadata = {
      name: propertyName,
      dataType: propertyOptions.dataType,
      options: propertyOptions,
    };

    this.entity(entity).properties.push(newProperty);
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
