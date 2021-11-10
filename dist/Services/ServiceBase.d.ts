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
    protected _validator?: AnySchema;
    /**
     * Returns the default data validator of the service.
     */
    get validator(): AnySchema;
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
