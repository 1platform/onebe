import { IEntityMetadata, IEntityProperty, IEntityPropertyMetadata } from "./Definition/EntityMetadata";
export default class EntityDefinition {
    private _entities;
    get list(): Array<IEntityMetadata>;
    add(name: string, description?: string): EntityDefinition;
    entity(name: string): IEntityMetadata;
    update(name: string, description?: string): IEntityMetadata;
    tableName(entity: string, tableName: string): EntityDefinition;
    extends(entity: string, extendedEntity: string): EntityDefinition;
    property(entity: string, propertyName: string, propertyOptions: IEntityProperty): EntityDefinition;
    hasProperty(entity: string, propertyName: string): boolean;
    markPrimaryKey(entity: string, propertyName: string): void;
    markRequired(entity: string, propertyName: string): void;
    getPrimaryKey(entity: string): Array<IEntityPropertyMetadata>;
    buildEntityList(): Array<IEntityMetadata>;
    protected getParentEntityProperties(parentEntityName: string): Array<IEntityPropertyMetadata>;
}
