import { IEntityMetadata, IEntityProperty, IEntityPropertyMetadata, IRelationMetadata } from "./Definition/EntityMetadata";
import { ObjectType } from "typeorm";
import { Constructor } from "./MetadataTypes";
export default class EntityDefinition {
    /**
     * A map with all the entities you defined in the application.
     */
    private _entities;
    /**
     * A map with all the relations between entities defined in the application.
     */
    private _relations;
    /**
     * A map with the mapping fields between relations and entities.
     */
    private _mapping;
    /**
     * Getter used to list all the entities defined in the application.
     */
    get list(): Array<IEntityMetadata>;
    /**
     * Builds the list of entities, based on the relation between them and
     * the parents defined for each of them.
     */
    buildEntityList(): Array<IEntityMetadata>;
    /**
     *  Method used to add a new entity in the entity metadata store.
     *
     * @param entity The entity on which we add information.
     * @param [description] A short description of the entity.
     */
    add(entity: string, description?: string): EntityDefinition;
    /**
     * Method used to get an entity from the entity metadata store. If the entity does
     * not exist yet, it will create it.
     *
     * @param entity The entity on which we add information.
     */
    entity(entity: string): IEntityMetadata;
    /**
     * Method used to update the information about an entity. If the entity does not exist
     * it will be created.
     *
     * @param entity The entity on which we add information.
     * @param [description] A short description of the entity.
     */
    update(entity: string, description?: string): IEntityMetadata;
    /**
     * Method used to attach a table name to an entity.
     *
     * @param entity The entity on which we add information.
     * @param tableName The name of the table attached to the entity.
     */
    tableName(entity: string, tableName: string): EntityDefinition;
    /**
     * Method used to define the parent entity of the current entity.
     *
     * @param entity The entity on which we add information.
     * @param extendedEntity The entity from which we get additional information.
     */
    extends(entity: string, extendedEntity: string): EntityDefinition;
    /**
     * Method used to document properties of the entity.
     *
     * @param entity The entity on which we add information.
     * @param propertyName The name of the property on which we add information.
     * @param propertyOptions The list of options related to the property.
     * @param [afterProperty] The name of the property after which we add the property.
     */
    property(entity: string, propertyName: string, propertyOptions: IEntityProperty, afterProperty?: string): EntityDefinition;
    /**
     * Check if an entity has the given property.
     *
     * @param entity The entity on which we perform the check.
     * @param propertyName The name of the property which we want to check after.
     */
    hasProperty(entity: string, propertyName: string): boolean;
    /**
     * Method used to mark a property as a primary key.
     *
     * @param entity The entity on which we add information.
     * @param propertyName The name of the property on which we add information.
     */
    markPrimaryKey(entity: string, propertyName: string): void;
    /**
     * Method used to mark a property as required.
     *
     * @param entity The entity on which we add information.
     * @param propertyName The name of the property on which we add information.
     */
    markRequired(entity: string, propertyName: string): void;
    /**
     * Returns an array of items marked as primary keys.
     *
     * @param entity The entity on which we add information.
     */
    getPrimaryKey(entity: string): Array<IEntityPropertyMetadata>;
    /**
     * Method used to add a relation between entities.
     *
     * @param entity The entity on which we add information.
     * @param propertyName The name of the property on which we add information.
     * @param typeFunctionOrTarget The target of the relation.
     * @param [isArray] Flag to mark the relation as one-to-many or many-to-many.
     */
    addRelation<T = Constructor>(entity: string, propertyName: string, typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), isArray?: boolean): void;
    /**
     * Method used to define the relation between the property and the destination
     * entity.
     *
     * @param entity The entity on which we add information.
     * @param propertyName The name of the property on which we add information.
     * @param relationField The field used for the relation.
     */
    relationField(entity: string, propertyName: string, relationField: string): void;
    /**
     * Method used to register all the relations between entities.
     */
    registerRelations(): void;
    /**
     * Method used internally to add all the relations for an entity.
     *
     * @param entity The entity on which we add information.
     * @param relation Relation metadata for an entity.
     */
    protected registerRelation(entity: string, relation: IRelationMetadata): void;
    /**
     * Method used internally to get properties of the parent entities of an entity.
     *
     * @param parentEntityName The name of the parent entity.
     */
    protected getParentEntityProperties(parentEntityName: string): Array<IEntityPropertyMetadata>;
}
