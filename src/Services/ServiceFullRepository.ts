import { DeepPartial, EntityTarget, FindOptionsWhere, ObjectLiteral } from "typeorm";

import { HTTPError } from "@/Exceptions";
import { HTTPStatus } from "@/Server";
import { BuildRelationDefinition, InvertFields, InvertTable, IRelationDefinition, SetCustomRelationDefinition } from "@/Services/RelationDefintion";
import ServiceReadRepository from "@/Services/ServiceReadRepository";

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

    try {
      const result = this.repository.create(validatedData as DeepPartial<Entity>);
      const insertResult = await this.repository.insert([ result as DeepPartial<Entity> ]);
      return this.getByKey(insertResult.generatedMaps[0][this.primaryKey]);
    } catch (err) {
      throw new HTTPError("onebe.errors.database.create", HTTPStatus.BAD_REQUEST, { err, data });
    }
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

    // TODO: Bugfix the issues with relation saving.
    Object.keys(validatedData).forEach((key: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      entity[key] = validatedData[key];
    });

    try {
      const result = await this.repository.update({ [this.primaryKey]: itemId } as FindOptionsWhere<Entity>, entity as DeepPartial<Entity>);
      return this.getByKey(itemId);
    } catch (err) {
      throw new HTTPError("onebe.errors.database.update", HTTPStatus.BAD_REQUEST, { err, data, itemId });
    }
  }

  /**
   * Method used to delete an entity.
   *
   * @param itemId The ID of the element to be deleted.
   */
  public async delete(itemId: KeyType): Promise<Entity> {
    const entity = await this.getByKey(itemId);
    try {
      if ("deletedAt" in entity && entity.deletedAt === null) {
        await this.repository.softDelete(entity[this.primaryKey]);
      } else {
        await this.repository.remove(entity);
      }
      return entity;
    } catch (err) {
      throw new HTTPError("onebe.errors.database.delete", HTTPStatus.BAD_REQUEST, { err, itemId });
    }
  }

  /**
   * Method used to force delete an entity.
   *
   * @param itemId The ID of the element to be deleted.
   */
  public async forceDelete(itemId: KeyType): Promise<Entity> {
    try {
      const entity = await this.getByKey(itemId, { withDeleted: true });
      await this.repository.remove(entity);
      return entity;
    } catch (err) {
      throw new HTTPError("onebe.errors.database.delete", HTTPStatus.BAD_REQUEST, { err, itemId });
    }
  }

  /**
   * Method used to restore a deleted entity.
   *
   * @param itemId The ID of the element to be restored.
   */
  public async restore(itemId: KeyType): Promise<Entity> {
    try {
      const entity = await this.getByKey(itemId, { withDeleted: true });
      await this.repository.restore(entity[this.primaryKey]);
      return await this.getByKey(itemId);
    } catch (err) {
      throw new HTTPError("onebe.errors.database.restore", HTTPStatus.BAD_REQUEST, { err, itemId });
    }
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
    data: Array<ChildRelationType>,
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
    data: Array<ChildRelationType>,
  ): Promise<void> {
    await this.insertRelationAction(item, child, data, true, false);
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
    data: Array<ChildRelationType>,
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
    data: Array<ChildRelationType>,
  ): Promise<void> {
    await this.removeRelationAction(item, child, data, true, false);
  }

  /**
   * Based on the given definition parameters, performs a database insert into the relation table, using a custom relation name.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param customRelationName The name of the custom relation between the 2 tables.
   * @param data The child data to be used for database changes.
   */
  public async insertCustomRelationDirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    customRelationName: string,
    data: Array<ChildRelationType>,
  ): Promise<void> {
    await this.insertCustomRelationAction(item, child, customRelationName, data, false, false);
  }

  /**
   * Based on the given definition parameters, performs a database insert into the inverted relation table, using a custom relation name.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param customRelationName The name of the custom relation between the 2 tables.
   * @param data The child data to be used for database changes.
   */
  public async insertCustomRelationIndirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    customRelationName: string,
    data: Array<ChildRelationType>,
  ): Promise<void> {
    await this.insertCustomRelationAction(item, child, customRelationName, data, true, false);
  }

  /**
   * Based on the given definition parameters, deletes data from the relation table, using a custom relation name.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param customRelationName The name of the custom relation between the 2 tables.
   * @param data The child data to be used for database changes.
   */
  public async removeCustomRelationDirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    customRelationName: string,
    data: Array<ChildRelationType>,
  ): Promise<void> {
    await this.removeCustomRelationAction(item, child, customRelationName, data, false, false);
  }

  /**
   * Based on the given definition parameters, deletes data from the inverted relation table, using a custom relation name.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param customRelationName The name of the custom relation between the 2 tables.
   * @param data The child data to be used for database changes.
   */
  public async removeCustomRelationIndirect<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    customRelationName: string,
    data: Array<ChildRelationType>,
  ): Promise<void> {
    await this.removeCustomRelationAction(item, child, customRelationName, data, true, false);
  }

  /**
   * Based on the given definition parameters, generates a relation definition that can be used for data
   * insertion and deletion.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param data The child data to be used for database changes.
   * @param [isInvertedTable] Flag to let the engine know about the table naming changes.
   * @param [isInvertedFields] Flag to let the engine know about the fields naming changes.
   * @param [customRelationName] The custom relation name.
   */
  protected async fetchRelationDefinition<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    data: Array<ChildRelationType>,
    isInvertedTable = false,
    isInvertedFields = false,
    customRelationName?: string,
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

    if (customRelationName) {
      relation = SetCustomRelationDefinition(customRelationName, relation);
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
    isInvertedFields = false,
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
        })),
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
    isInvertedFields = false,
  ): Promise<void> {
    const relation = await this.fetchRelationDefinition(item, child, data, isInvertedTable, isInvertedFields);

    await this._dataSource
      .createQueryBuilder()
      .delete()
      .from(relation.relationName)
      .where(`${ relation.parentField } = :parentField AND ${ relation.childField } IN (:...childField)`, {
        parentField: relation.parentValue,
        childField: data,
      })
      .execute();
  }

  /**
   * Based on the given definition parameters, performs a database insert into the relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param customRelationName The name of the relation.
   * @param data The child data to be used for database changes.
   * @param isInvertedTable Flag to let the engine know about the table naming changes.
   * @param isInvertedFields Flag to let the engine know about the fields naming changes.
   */
  protected async insertCustomRelationAction<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    customRelationName: string,
    data: Array<ChildRelationType>,
    isInvertedTable = false,
    isInvertedFields = false,
  ): Promise<void> {
    const relation = await this.fetchRelationDefinition(item, child, data, isInvertedTable, isInvertedFields, customRelationName);

    await this._dataSource
      .createQueryBuilder()
      .insert()
      .into(relation.relationName, [ relation.parentField, relation.childField ])
      .values(
        data.map((childValue) => ({
          [relation.parentField]: relation.parentValue,
          [relation.childField]: childValue,
        })),
      )
      .execute();
  }

  /**
   * Based on the given definition parameters, deletes records from the relation table.
   *
   * @param item The item used by the parent table.
   * @param child The child entity we want to use for handling data.
   * @param customRelationName The name of the relation.
   * @param data The child data to be used for database changes.
   * @param isInvertedTable Flag to let the engine know about the table naming changes.
   * @param isInvertedFields Flag to let the engine know about the fields naming changes.
   */
  protected async removeCustomRelationAction<ChildRelationType = number>(
    item: KeyType | Entity,
    child: string | EntityTarget<any>,
    customRelationName: string,
    data: Array<ChildRelationType>,
    isInvertedTable = false,
    isInvertedFields = false,
  ): Promise<void> {
    const relation = await this.fetchRelationDefinition(item, child, data, isInvertedTable, isInvertedFields, customRelationName);

    await this._dataSource
      .createQueryBuilder()
      .delete()
      .from(relation.relationName)
      .where(`${ relation.parentField } = :parentField AND ${ relation.childField } IN (:...childField)`, {
        parentField: relation.parentValue,
        childField: data,
      })
      .execute();
  }
}
