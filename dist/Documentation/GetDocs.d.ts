/**
 * A list of supported documentation generators.
 *
 * @enum
 */
export declare enum DocsType {
    SWAGGER_YAML = "swagger:yaml",
    SWAGGER_JSON = "swagger:json"
}
/**
 * Function used to generate the documentation of the application routes
 * and entities based on the given generator passed as input.
 *
 * @param [type] The type of the documentation generator.
 */
export default function GetDocs(type?: DocsType): string | Record<string, any>;
