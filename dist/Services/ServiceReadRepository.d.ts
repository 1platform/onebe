import { FindManyOptions, FindOneOptions, FindOptionsWhere, ObjectLiteral } from "typeorm";
import ServiceWithRepository from "./ServiceWithRepository";
import { PaginatedEntity, PaginatedOptions } from "./PaginationDefinition";
/**
 * The base class for your services that are using a database table.
 *
 * We recommend using a service with repository attached to perform all the actions in your application
 * that need working with a database.
 */
export default abstract class ServiceReadRepository<Entity extends ObjectLiteral, KeyType = number> extends ServiceWithRepository<Entity> {
    /**
     * The name of the primary key field used to get data by id.
     */
    protected primaryKey: string;
    /**
     * Method used to get all the data from the repository, based on the
     * filters sent as parameters.
     *
     * @param [options] A list with options to be used when getting the data.
     */
    getAll(options?: FindManyOptions<Entity>): Promise<Array<Entity>>;
    /**
     * Method used to get the paginated data from the repository, based on the
     * filters sent as parameters.
     *
     * @param paginatedOptions A list with parameters needed for pagination.
     */
    getAllPaginated(paginatedOptions: PaginatedOptions<Entity>): Promise<PaginatedEntity<Entity>>;
    /**
     * Method used to get a single element, based on the filters sent
     * as parameters.
     *
     * @param where The where clause to be used to fetch the data.
     * @param [options] Extra options to be used for finding the data.
     */
    get(where: FindOptionsWhere<Entity>, options?: FindOneOptions<Entity>): Promise<Entity>;
    /**
     * Method used to get a single element, based on the primary key of the entity.
     *
     * @param entityKey The primary key value after which we search.
     * @param [options] Extra options to be used for finding the data.
     */
    getByKey(entityKey: KeyType, options?: FindOneOptions<Entity>): Promise<Entity>;
    /**
     * Method used to get the pagination information from the pagination options
     * sent by the user.
     *
     * @param paginatedOptions The pagination options.
     */
    protected _getPaginatedOptions(paginatedOptions: PaginatedOptions<Entity>): PaginatedOptions<Entity>;
}
