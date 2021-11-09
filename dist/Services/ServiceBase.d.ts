import { AnySchema } from "joi";
export default abstract class ServiceBase {
    protected _validator?: AnySchema;
    get validator(): AnySchema;
    validate<T>(data: T): T;
    protected customValidate<T>(data: T, validator: AnySchema): T;
}
