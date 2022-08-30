import { EntityTarget } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Constructor } from "../../Documentation/MetadataTypes";
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
export default function DatabaseSeeder<Entity extends Constructor>(entity: EntityTarget<Entity>, data: Array<QueryDeepPartialEntity<Entity>> | QueryDeepPartialEntity<Entity>, clearData?: boolean): Promise<IDBSeederResults>;
