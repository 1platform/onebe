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
   *
   * @param [options] A map of properties with values that can be filled in the current entity.
   */
  public constructor(options?: Record<string, unknown>) {
    this.init(options);
  }

  /**
   * Method used to init the entity with data.
   *
   * @param [options] A map of properties with values that can be filled in the current entity.
   */
  public init(options?: Record<string, unknown>) {
    if (options) {
      Object.keys(options).forEach((key) => {
        this[key] = options[key];
      });
    }
  }

  /**
   * Return the data from the entity as an object.
   *
   * Use this method when you want to extract the data from the entity.
   */
  public toJSON<T = Record<string, unknown>>(): T {
    return JSON.parse(JSON.stringify(this));
  }

  /**
   * Return the data from the entity as an object.
   *
   * Use this method when you want to extract the data from the entity.
   * This is an alias for the `toJSON` method.
   */
  public toObject<T = Record<string, unknown>>(): T {
    return this.toJSON<T>();
  }
}
