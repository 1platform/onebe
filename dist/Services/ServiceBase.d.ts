import { AnySchema } from "joi";
/**
 * The base class for your services.
 *
 * We recommend using a service to perform all the actions in your application. Database handling should
 * happen through a service using a repository.
 */
export default abstract class ServiceBase {
    /**
     * A default data validator schema that can be used to validate
     * some data used in the service.
     */
    private _validator?;
    /**
     * Returns the default data validator of the service.
     */
    get validator(): AnySchema;
    /**
     * Sets the validator value.
     *
     * @param newValidator The new validator to be set.
     */
    protected set validator(newValidator: AnySchema);
    /**
     * Validates the given data against the default validator and returns
     * the data after applying the validator on it.
     *
     * @param data The data to be validated.
     */
    validate<T>(data: T): T;
    /**
     * Validates the given data against a given validator and returns
     * the data after applying the validator on it.
     *
     * @param data The data to be validated.
     * @param validator The validator to be used.
     */
    protected customValidate<T>(data: T, validator: AnySchema): T;
}
