export declare enum DocsType {
    SWAGGER_YAML = "swagger:yaml",
    SWAGGER_JSON = "swagger:json"
}
export default function GetDocs(type?: DocsType): string | Record<string, any>;
