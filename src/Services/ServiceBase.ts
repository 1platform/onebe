import { AnySchema } from "joi";

/**
 * The Service base class. Using this class we can perform
 * various actions in the application.
 */
export default abstract class ServiceBase {
  /**
   * A default data validator schema that can be used to validate
   * some data used in the service.
   */
  private _validator?: AnySchema;

  /**
   * Returns the default data validator of the service.
   */
  public get validator(): AnySchema {
    return this._validator;
  }

  /**
   * Sets the validator value.
   *
   * @param newValidator The new validator to be set.
   */
  protected set validator(newValidator: AnySchema) {
    this._validator = newValidator;
  }

  /**
   * Validates the given data against the default validator and returns
   * the data after applying the validator on it.
   *
   * @param data The data to be validated.
   */
  public validate<T>(data: T): T {
    return this.customValidate<T>(data, this._validator);
  }

  /**
   * Validates the given data against a given validator and returns
   * the data after applying the validator on it.
   *
   * @param data The data to be validated.
   * @param validator The validator to be used.
   */
  protected customValidate<T>(data: T, validator: AnySchema): T {
    if (!validator) {
      return data;
    }

    const results = validator.validate(data, {
      abortEarly: false,
      dateFormat: "utc",
      stripUnknown: true,
      context: data,
    });

    if (results.error) {
      throw results.error;
    }

    return results.value;
  }
}
