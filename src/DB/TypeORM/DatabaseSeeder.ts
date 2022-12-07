import { EntityTarget } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { defaultConnection } from "@/DB";
import { Constructor } from "@/Documentation/MetadataTypes";

/**
 * Interface used to describe the response returned by the Database Seeder.
 */
export interface IDBSeederResults {
  /**
   * How many records were deleted.
   */
  deleted: number;
  /**
   * How many records were created.
   */
  created: number;
}

/**
 * Function used to seed the Database for a given entity.
 *
 * @param entity The entity to be seeded.
 * @param data The data to be seeded.
 * @param clearData Flag used to enable/disable database clearing.
 */
export default async function DatabaseSeeder<Entity extends Constructor>(
  entity: EntityTarget<Entity>,
  data: Array<QueryDeepPartialEntity<Entity>> | QueryDeepPartialEntity<Entity>,
  clearData = false
): Promise<IDBSeederResults> {
  if (!Array.isArray(data)) {
    data = [ data ];
  }

  const EntityClass = entity as unknown as Entity;
  const response: IDBSeederResults = {
    deleted: 0,
    created: 0,
  };
  await defaultConnection().transaction(async (entityManager) => {
    if (clearData) {
      const result = await entityManager.delete(entity, {});
      response.deleted = result.affected || 0;
    }

    const result = await entityManager.insert(
      entity,
      (data as Array<QueryDeepPartialEntity<Entity>>).map((item) => {
        const entityItem = new EntityClass();
        for (const key of Object.keys(item)) {
          entityItem[key] = item[key];
        }

        return entityItem;
      })
    );
    response.created = result.identifiers.length;
  });

  return response;
}
