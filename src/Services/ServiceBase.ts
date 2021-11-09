import { AnySchema } from "joi";

export default abstract class ServiceBase {
  protected _validator?: AnySchema;

  public get validator(): AnySchema {
    return this._validator;
  }

  public validate<T>(data: T): T {
    return this.customValidate<T>(data, this._validator);
  }

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
