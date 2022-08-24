import { IEntityProperty } from "../Definition/EntityMetadata";
import { EntityPropertyDataTypes } from "../Definition/DataTypes";
/**
 * Helper class used to document a custom entity. Use this class only when you want
 * to document an interface.
 *
 * Instances of this class are created using the exposed helper functions defined below.
 * The scope of this class is to provide an Object-Oriented way to define Custom Entities.
 */
export declare class CustomEntityHelper {
    /**
     * The name of the entity you are documenting.
     */
    private readonly _entityName;
    /**
     * Custom Entity helper constructor.
     *
     * @param entityName The name of the entity you want to document.
     */
    constructor(entityName: string);
    /**
     * Helper method used to define the class that the custom entity you are documenting
     * is extending.
     *
     * @param baseClass The name of the class you want to extend.
     */
    extends(baseClass: string): CustomEntityHelper;
    /**
     * Helper method used to define a property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    property(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define a required property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    requiredProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define a Date property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    dateProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define a DateTime property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    dateTimeProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define a Number property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    numberProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define a Boolean property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    booleanProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define an Integer property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    integerProperty(propertyName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define an Array property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param dataType The data type of the array items.
     * @param propertyOptions The definition of the property.
     */
    arrayProperty(propertyName: string, dataType: EntityPropertyDataTypes, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define an Array of Entity property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param referenceEntityName The name of the entity used to describe the items of the property.
     * @param propertyOptions The definition of the property.
     */
    entityArrayProperty(propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
    /**
     * Helper method used to define an Object property from a custom entity.
     *
     * @param propertyName The name of the property you want to document.
     * @param referenceEntityName The name of the entity used to describe the property contents.
     * @param propertyOptions The definition of the property.
     */
    entityProperty(propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty): CustomEntityHelper;
}
/**
 * Helper functions to document custom entities using interfaces.
 */
declare const EntityHelpers: {
    /**
     * Helper function used to document an entity. Use this helper method only
     * to document interfaces.
     *
     * @param name The name of the entity you are documenting.
     * @param [description] A short description of the entity.
     */
    entity: (name: string, description?: string) => CustomEntityHelper;
    /**
     * Helper function used to define the class that the custom entity you are documenting
     * is extending.
     *
     * @param entityName The name of the entity you are documenting.
     * @param baseEntity The name of the class you want to extend.
     */
    extends: (entityName: string, baseEntity: string) => CustomEntityHelper;
    /**
     * Helper function used to define a property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    property: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define a required property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    requiredProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define a Date property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    dateProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define a DateTime property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    dateTimeProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define a Number property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    numberProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define a Boolean property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    booleanProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define an Integer property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param propertyOptions The definition of the property.
     */
    integerProperty: (entityName: string, propertyName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define an Array property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param dataType The data type of the array items.
     * @param propertyOptions The definition of the property.
     */
    arrayProperty: (entityName: string, propertyName: string, dataType: EntityPropertyDataTypes, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define an Array of Entity property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param referenceEntityName The name of the entity used to describe the items of the property.
     * @param propertyOptions The definition of the property.
     */
    entityArrayProperty: (entityName: string, propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
    /**
     * Helper function used to define an Object property from a custom entity.
     *
     * @param entityName The name of the entity you are documenting.
     * @param propertyName The name of the property you want to document.
     * @param referenceEntityName The name of the entity used to describe the property contents.
     * @param propertyOptions The definition of the property.
     */
    entityProperty: (entityName: string, propertyName: string, referenceEntityName: string, propertyOptions: IEntityProperty) => CustomEntityHelper;
};
export default EntityHelpers;
