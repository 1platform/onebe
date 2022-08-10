import { IEntityProperty } from "../Definition/EntityMetadata";
import { EntityPropertyDataTypes } from "../Definition/DataTypes";
declare class CustomEntityHelper {
    private readonly _entityName;
    constructor(entityName: string);
    extends(baseClass: string): CustomEntityHelper;
    property(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    requiredProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    dateProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    dateTimeProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    numberProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    booleanProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    integerProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    arrayProperty(propertyName: string, dataType: EntityPropertyDataTypes, propertyOptions: IEntityProperty): CustomEntityHelper;
    entityArrayProperty(propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    entityProperty(propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
}
declare const EntityHelpers: {
    entity: (name: string, description: string) => CustomEntityHelper;
    extends: (entityName: string, baseEntity: string) => CustomEntityHelper;
    property: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    requiredProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    dateProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    dateTimeProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    numberProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    booleanProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    integerProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    arrayProperty: (entityName: string, propertyName: string, dataType: EntityPropertyDataTypes, propertyOptions: IEntityProperty) => CustomEntityHelper;
    entityArrayProperty: (entityName: string, propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    entityProperty: (entityName: string, propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
};
export default EntityHelpers;
