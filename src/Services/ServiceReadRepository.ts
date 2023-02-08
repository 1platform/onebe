import { FindManyOptions, FindOneOptions, FindOptionsWhere, ObjectLiteral } from "typeorm";
import ServiceWithRepository from "@/Services/ServiceWithRepository";
import HTTPError from "@/Exceptions/HTTPError";
import HTTPStatus from "@/HTTP/HTTPStatus";
import { IPaginatedOptions, PaginatedEntity, PaginatedOptions } from "@/Services/PaginationDefinition";
import { createEntity } from "@/Documentation/BaseEntity";

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
  protected primaryKey = "id";

  /**
   * Method used to get all the data from the repository, based on the
   * filters sent as parameters.
   *
   * @param [options] A list with options to be used when getting the data.
   */
  public getAll(options?: FindManyOptions<Entity>): Promise<Array<Entity>> {
    return this.repository.find(options);
  }

  /**
   * Method used to get all the data from the repository, including deleted items,
   * based on the filters sent as parameters.
   *
   * @param [options] A list with options to be used when getting the data.
   */
  public getAllWithDeleted(options?: FindManyOptions<Entity>): Promise<Array<Entity>> {
    return this.repository.find({ ...(options || {}), withDeleted: true });
  }

  /**
   * Method used to get the paginated data from the repository, based on the
   * filters sent as parameters.
   *
   * @param paginatedOptions A list with parameters needed for pagination.
   */
  public async getAllPaginated(paginatedOptions: IPaginatedOptions<Entity>): Promise<PaginatedEntity<Entity>> {
    const { page, size, options } = this._getPaginatedOptions(paginatedOptions);
    const count = await this.repository.count(options);
    const data = await this.getAll({
      skip: size > 0 ? size * (page - 1) : 0,
      take: size > 0 ? size : count,
      ...options,
    });

    return createEntity<PaginatedEntity<Entity>>(PaginatedEntity, {
      page,
      size: size > 0 ? size : count,
      count,
      data,
      hasNext: size > 0 ? page * size <= count : false,
      hasPrevious: size > 0 ? page > 1 : false,
    });
  }

  /**
   * Method used to get the paginated data from the repository, with the deleted records,
   * based on the filters sent as parameters.
   *
   * @param paginatedOptions A list with parameters needed for pagination.
   */
  public async getAllPaginatedWithDeleted(paginatedOptions: IPaginatedOptions<Entity>): Promise<PaginatedEntity<Entity>> {
    const { page, size, options } = this._getPaginatedOptions(paginatedOptions);
    const count = await this.repository.count(options);
    const data = await this.getAll({
      skip: size > 0 ? size * (page - 1) : 0,
      take: size > 0 ? size : count,
      ...options,
      withDeleted: true,
    });

    return createEntity<PaginatedEntity<Entity>>(PaginatedEntity, {
      page,
      size: size > 0 ? size : count,
      count,
      data,
      hasNext: size > 0 ? page * size <= count : false,
      hasPrevious: size > 0 ? page > 1 : false,
    });
  }

  /**
   * Method used to get a single element, based on the filters sent
   * as parameters.
   *
   * @param where The where clause to be used to fetch the data.
   * @param [options] Extra options to be used for finding the data.
   */
  public async get(where: FindOptionsWhere<Entity>, options?: FindOneOptions<Entity>): Promise<Entity> {
    const entity = await this.repository.findOne({
      ...(options || {}),
      where: {
        ...(options?.where || {}),
        ...where,
      },
    });
    if (!entity) {
      throw new HTTPError("onebe.errors.entity.not-found", HTTPStatus.NOT_FOUND, { name: this.repository.metadata.name });
    }
    return entity;
  }

  /**
   * Method used to get a single element, based on the primary key of the entity.
   *
   * @param entityKey The primary key value after which we search.
   * @param [options] Extra options to be used for finding the data.
   */
  public async getByKey(entityKey: KeyType, options?: FindOneOptions<Entity>): Promise<Entity> {
    const entity = await this.repository.findOne({
      ...(options || {}),
      where: {
        ...(options?.where || {}),
        [this.primaryKey]: entityKey,
      } as FindOptionsWhere<Entity>,
    });
    if (!entity) {
      throw new HTTPError("onebe.errors.entity.not-found", HTTPStatus.NOT_FOUND, { key: entityKey, name: this.repository.metadata.name });
    }
    return entity;
  }

  /**
   * Method used to get the pagination information from the pagination options
   * sent by the user.
   *
   * @param paginatedOptions The pagination options.
   */
  protected _getPaginatedOptions(paginatedOptions: IPaginatedOptions<Entity>): PaginatedOptions<Entity> {
    const parsedOptions: PaginatedOptions<Entity> = createEntity<PaginatedOptions<Entity>>(PaginatedOptions, {
      page: 1,
      size: 10,
      options: {},
      ...paginatedOptions,
    });

    if (parsedOptions.page < 1) {
      parsedOptions.page = 1;
    }
    if (parsedOptions.size < 0) {
      parsedOptions.size = 0;
    }

    return parsedOptions;
  }
}
