import ServiceBase from "./ServiceBase";
import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { defaultConnection } from "../DB";

/**
 * The base class for your services that are using a database table.
 *
 * We recommend using a service with repository attached to perform all the actions in your application
 * that need working with a database.
 */
export default abstract class ServiceWithRepository<Entity extends ObjectLiteral> extends ServiceBase {
  /**
   * The repository created by TypeORM for the entity used in the repository.
   */
  protected readonly _repository: Repository<Entity>;
  /**
   * The datasource used for the repository.
   */
  protected readonly _dataSource: DataSource;

  /**
   * Service constructor.
   *
   * @param entity The entity for which we want to create the repository.
   * @param [dataSource] The datasource on which to create the repository.
   */
  protected constructor(entity: EntityTarget<Entity>, dataSource?: DataSource) {
    super();
    this._dataSource = dataSource ?? defaultConnection();
    this._repository = this.dataSource.getRepository(entity);
  }

  /**
   * Getter for the repository attached to the service.
   */
  public get repository(): Repository<Entity> {
    return this._repository;
  }

  /**
   * Getter for the datasource attached to the service.
   */
  public get dataSource(): DataSource {
    return this._dataSource;
  }
}
