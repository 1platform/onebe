import MetadataStore from "../MetadataStore";
import { IEntityProperty } from "../Definition/EntityMetadata";
import { EntityPropertyDataTypes } from "../Definition/DataTypes";

class CustomEntityHelper {
  private readonly _entityName: string;

  public constructor(entityName: string) {
    this._entityName = entityName;
  }

  public extends(baseClass: string): CustomEntityHelper {
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.extends(this._entityName, baseClass);

    return this;
  }

  public property(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.property(this._entityName, propertyName, {
      required: false,
      ...propertyOptions,
    });

    return this;
  }

  requiredProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, { ...propertyOptions, required: true });
  }

  dateProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.STRING,
      isDate: true,
    });
  }

  dateTimeProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.STRING,
      isDateTime: true,
    });
  }

  numberProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.NUMBER,
    });
  }

  booleanProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.BOOLEAN,
    });
  }

  integerProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.INTEGER,
    });
  }

  arrayProperty(propertyName: string, dataType: EntityPropertyDataTypes, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.ARRAY,
      childType: dataType,
    });
  }

  entityArrayProperty(propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.ARRAY,
      reference: referenceEntityName,
    });
  }

  entityProperty(propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper {
    return this.property(propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.OBJECT,
      reference: referenceEntityName,
    });
  }
}

const EntityHelpers = {
  entity: (name: string, description: string): CustomEntityHelper => {
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.add(name, description);

    return new CustomEntityHelper(name);
  },

  extends: (entityName: string, baseEntity: string): CustomEntityHelper => {
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.extends(entityName, baseEntity);

    return new CustomEntityHelper(entityName);
  },

  property: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    const entityMetadata = MetadataStore.instance.entity;
    entityMetadata.property(entityName, propertyName, {
      required: false,
      ...propertyOptions,
    });

    return new CustomEntityHelper(entityName);
  },
  requiredProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      required: true,
    });
  },
  dateProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.STRING,
      isDate: true,
    });
  },
  dateTimeProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.STRING,
      isDateTime: true,
    });
  },
  numberProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.NUMBER,
    });
  },
  booleanProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.BOOLEAN,
    });
  },
  integerProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.INTEGER,
    });
  },
  arrayProperty: (
    entityName: string,
    propertyName: string,
    dataType: EntityPropertyDataTypes,
    propertyOptions: IEntityProperty
  ): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.ARRAY,
      childType: dataType,
    });
  },
  entityArrayProperty: (
    entityName: string,
    propertyName: string,
    referenceEntityName: string,
    propertyOptions: IEntityProperty
  ): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.ARRAY,
      reference: referenceEntityName,
    });
  },
  entityProperty: (entityName: string, propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper => {
    return EntityHelpers.property(entityName, propertyName, {
      ...propertyOptions,
      dataType: EntityPropertyDataTypes.OBJECT,
      reference: referenceEntityName,
    });
  },
};

export default EntityHelpers;
