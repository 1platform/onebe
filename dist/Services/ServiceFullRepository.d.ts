import { ObjectLiteral } from "typeorm";
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
    create(data: Entity): Promise<Entity>;
    /**
     * Method used to update an existing entity.
     *
     * @param itemId The ID of the element to be updated.
     * @param data The data to be stored.
     */
    update(itemId: KeyType, data: Entity): Promise<Entity>;
    /**
     * Method used to delete an entity.
     *
     * @param itemId The ID of the element to be updated.
     */
    delete(itemId: KeyType): Promise<Entity>;
}
