import { IEntityMetadata, IEntityProperty, IEntityPropertyMetadata, IRelationMetadata } from "./Definition/EntityMetadata";
import { ObjectType } from "typeorm";
import { Constructor } from "./MetadataTypes";
export default class EntityDefinition {
    private _entities;
    private _relations;
    private _mapping;
    get list(): Array<IEntityMetadata>;
    add(name: string, description?: string): EntityDefinition;
    entity(name: string): IEntityMetadata;
    update(name: string, description?: string): IEntityMetadata;
    tableName(entity: string, tableName: string): EntityDefinition;
    extends(entity: string, extendedEntity: string): EntityDefinition;
    property(entity: string, propertyName: string, propertyOptions: IEntityProperty, afterProperty?: string): EntityDefinition;
    hasProperty(entity: string, propertyName: string): boolean;
    markPrimaryKey(entity: string, propertyName: string): void;
    markRequired(entity: string, propertyName: string): void;
    getPrimaryKey(entity: string): Array<IEntityPropertyMetadata>;
    buildEntityList(): Array<IEntityMetadata>;
    addRelation<T = Constructor>(entity: string, propertyName: string, typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), isArray?: boolean): void;
    relationField(entity: string, propertyName: string, relationField: string): void;
    registerRelations(): void;
    protected registerRelation(entityName: string, relation: IRelationMetadata): void;
    protected getParentEntityProperties(parentEntityName: string): Array<IEntityPropertyMetadata>;
}
