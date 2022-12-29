import { Constructor } from "@/Documentation/MetadataTypes";

/**
 * The base class for entities defined in your application.
 *
 * Use this class as a base when defining an entity that can be reused
 * in your application. This class allows you to easily fill an entity
 * with data very fast and get the contents as an object.
 */
export default class BaseEntity {
  /**
   * Constructor used to create a new Entity and fill it with data.
   */
  public constructor() {
    //NOP
  }

  /**
   * Method used to init the entity with data.
   *
   * @param [options] A map of properties with values that can be filled in the current entity.
   */
  public init(options?: Record<string | number | symbol, any>) {
    if (options) {
      Object.assign(this, options);
    }

    return this;
  }

  /**
   * Creates a clone of the current entity.
   *
   * @param [properties] A list of properties that you want to pass to the new instance.
   */
  public clone<T = BaseEntity>(properties?: Record<string, any>): T {
    const copy = new (this.constructor as { new (): T })();
    Object.assign(copy, this);

    if (properties && Object.keys(properties).length > 0) {
      Object.assign(copy, properties);
    }
    return copy;
  }

  /**
   * Return the data from the entity as an object.
   *
   * Use this method when you want to extract the data from the entity.
   */
  public toJSON<T = Record<string | number | symbol, any>>(): T {
    return Object.assign({}, this) as T;
  }

  /**
   * Return the data from the entity as an object.
   *
   * Use this method when you want to extract the data from the entity.
   * This is an alias for the `toJSON` method.
   */
  public toObject<T = Record<string | number | symbol, any>>(): T {
    return this.toJSON<T>();
  }
}

/**
 * Function used to create a new entity with data.
 *
 * @param EntityClass The Entity we want to initialize.
 * @param options A map of properties with values that can be filled in the current entity.
 */
export function createEntity<Entity extends BaseEntity>(EntityClass: Constructor<Entity>, options?: Record<string | symbol | number, any>): Entity {
  const instance = new EntityClass();
  instance.init(options);

  return instance;
}
