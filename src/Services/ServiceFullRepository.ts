import { DeepPartial, ObjectLiteral } from "typeorm";
import HTTPError from "../Exceptions/HTTPError";
import HTTPStatus from "../HTTP/HTTPStatus";
import ServiceReadRepository from "./ServiceReadRepository";

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
  public async create(data: Entity): Promise<Entity> {
    const validatedData: Entity = this.validator
      ? this.validate<Entity>({
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
  public async update(itemId: KeyType, data: Entity): Promise<Entity> {
    const entity: Entity = await this.get(itemId);

    const validatedData: Entity = this.validator
      ? this.validate<Entity>({
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
   * @param itemId The ID of the element to be updated.
   */
  public async delete(itemId: KeyType): Promise<Entity> {
    const entity = await this.repository.findOne(itemId);
    if (!entity) {
      throw new HTTPError("onebe.errors.entity.not-found", HTTPStatus.NOT_FOUND, { key: itemId, name: this.repository.metadata.name });
    }
    await this.repository.remove(entity);
    return entity;
  }
}
