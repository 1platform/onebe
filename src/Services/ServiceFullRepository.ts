import { DeepPartial, EntityTarget, ObjectLiteral } from "typeorm";
import ServiceReadRepository from "@/Services/ServiceReadRepository";
import { BuildRelationDefinition, InvertFields, InvertTable, IRelationDefinition } from "@/Services/RelationDefintion";

/**
 * The base class for your services that are using a database table.
 *
 * We recommend using a service with repository attached to perform all the actions in your application
 * that need working with a database.
 */
export default abstract class ServiceFullRepository<Entity extends ObjectLiteral, KeyType = number> extends ServiceReadRepository<Entity, KeyType> {
  /**
   * Method used to create a new entity.
   *
   * @param data The data to be stored.
   */
  public async create(data: DeepPartial<Entity>): Promise<Entity> {
    const validatedData: DeepPartial<Entity> = this.validator
      ? this.validate<DeepPartial<Entity>>({
        ...data,
        id: undefined,
      })
      : { ...data, id: undefined };

    const result = this.repository.create(validatedData as DeepPartial<Entity>);
    return this.repository.save(result as DeepPartial<Entity>);
  }

  /**
   * Method used to update an existing entity.
   *
   * @param itemId The ID of the element to be updated.
   * @param data The data to be stored.
   */
  public async update(itemId: KeyType, data: DeepPartial<Entity>): Promise<Entity> {
    const entity: Entity = await this.getByKey(itemId);

    const validatedData: DeepPartial<Entity> = this.validator
      ? this.validate<DeepPartial<Entity>>({
        ...entity,
        ...data,
        id: undefined,
      })
      : { ...data, id: undefined };
    Object.keys(validatedData).forEach((key: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      entity[key] = validatedData[key];
    });

    return this.repository.save(entity as DeepPartial<Entity>);
  }

  /**
   * Method used to delete an entity.
   *
   * @param itemId The ID of the element to be deleted.
   */
  public async delete(itemId: KeyType): Promise<Entity> {
    const entity = await this.getByKey(itemId);
    if ("deletedAt" in entity && entity.deletedAt === null) {
      await this.repository.softDelete(entity[this.primaryKey]);
    } else {
      await this.repository.remove(entity);
    }
    return entity;
  }

  /**
   * Method used to force delete an entity.
   *
   * @param itemId The ID of the element to be deleted.
   */
  public async forceDelete(itemId: KeyType): Promise<Entity> {
    const entity = await this.getByKey(itemId, { withDeleted: true });
    await this.repository.remove(entity);
    return entity;
  }

  /**
   * Method used to restore a deleted entity.
   *
   * @param itemId The ID of the element to be restored.
   */
  public async restore(itemId: KeyType): Promise<Entity> {
    const entity = await this.getByKey(itemId, { withDeleted: true });
    await this.repository.restore(entity[this.primaryKey]);
    return await this.getByKey(itemId);
  }

  /**
   * Based on the given definition parameters, performs a database insert into the relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   */
  public async insertRelationDirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>
  ): Promise<void> {
    await this.insertRelationAction(item, child, data, false, false);
  }

  /**
   * Based on the given definition parameters, performs a database insert into the inverted relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   */
  public async insertRelationIndirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>
  ): Promise<void> {
    await this.insertRelationAction(item, child, data, true, true);
  }

  /**
   * Based on the given definition parameters, deletes data from the relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   */
  public async removeRelationDirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>
  ): Promise<void> {
    await this.removeRelationAction(item, child, data, false, false);
  }

  /**
   * Based on the given definition parameters, deletes data from the inverted relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   */
  public async removeRelationIndirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>
  ): Promise<void> {
    await this.removeRelationAction(item, child, data, true, true);
  }

  /**
   * Based on the given definition parameters, generates a relation definition that can be used for data
   * insertion and deletion.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   * @param isInvertedTable Flag to let the engine know about the table naming changes.
   * @param isInvertedFields Flag to let the engine know about the fields naming changes.
   */
  protected async fetchRelationDefinition<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>,
    isInvertedTable = false,
    isInvertedFields = false
  ): Promise<IRelationDefinition<KeyType, ChildRelationType>> {
    if (typeof child !== "string") {
      child = this._dataSource.getRepository(child).metadata.tableName;
    }

    if (typeof item !== "object") {
      item = await this.getByKey(item);
    }

    let relation = BuildRelationDefinition<KeyType, ChildRelationType>(this.tableName, child, (item as Entity).id, data);

    if (isInvertedTable) {
      relation = InvertTable(relation);
    }

    if (isInvertedFields) {
      relation = InvertFields(relation);
    }

    return relation;
  }

  /**
   * Based on the given definition parameters, performs a database insert into the relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   * @param isInvertedTable Flag to let the engine know about the table naming changes.
   * @param isInvertedFields Flag to let the engine know about the fields naming changes.
   */
  protected async insertRelationAction<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>,
    isInvertedTable = false,
    isInvertedFields = false
  ): Promise<void> {
    const relation = await this.fetchRelationDefinition(item, child, data, isInvertedTable, isInvertedFields);

    await this._dataSource
      .createQueryBuilder()
      .insert()
      .into(relation.relationName, [ relation.parentField, relation.childField ])
      .values(
        data.map((childValue) => ({
          [relation.parentField]: relation.parentValue,
          [relation.childField]: childValue,
        }))
      )
      .execute();
  }

  /**
   * Based on the given definition parameters, deletes records from the relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   * @param isInvertedTable Flag to let the engine know about the table naming changes.
   * @param isInvertedFields Flag to let the engine know about the fields naming changes.
   */
  protected async removeRelationAction<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>,
    isInvertedTable = false,
    isInvertedFields = false
  ): Promise<void> {
    const relation = await this.fetchRelationDefinition(item, child, data, isInvertedTable, isInvertedFields);

    await this._dataSource
      .createQueryBuilder()
      .delete()
      .from(relation.relationName)
      .where(`${ relation.parentField } = :parentField AND ${ relation.childField } IN :childField`, {
        parentField: relation.parentValue,
        childField: data,
      })
      .execute();
  }
}
