import { EntityPropertyDataTypes } from "@/Documentation/Definition/DataTypes";
import { IEntityMetadata } from "@/Documentation/Definition/EntityMetadata";

/**
 * Interface used to link a component name with its definition.
 */
export interface ISwaggerComponentDefinition {
  /**
   * The name of the component.
   */
  name: string;
  /**
   * The definition of the component.
   */
  definition: ISwaggerComponent;
}

/**
 * Interface used to define how a Swagger Component should look like.
 */
export interface ISwaggerComponent {
  /**
   * The datatype of the component.
   */
  type: string;
  /**
   * A short description of the component.
   */
  description?: string;
  /**
   * A list of properties that can be found in the component.
   */
  properties: Record<string, unknown>;
  /**
   * A list of required properties that should appear when sending data to the request.
   */
  required?: Array<string>;
}

/**
 * A list of audit fields that will be skipped from the component definition.
 */
const AUDIT = [
  "createdAt",
  "updatedAt",
  "deletedAt",
  "created_at",
  "updated_at",
  "deleted_at",
  "createdBy",
  "updatedBy",
  "deletedBy",
  "created_by",
  "updated_by",
  "deleted_by",
];

/**
 * Swagger Components Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 components specification.
 */
export default class SwaggerComponents {
  /**
   * Method that extracts the components from the entities definition metadata.
   *
   * @param entities The list of documented entities from the metadata store.
   */
  public getComponents(entities: Array<IEntityMetadata>): Record<string, unknown> {
    const components: Record<string, unknown> = {
      ...this.getSecuritySchemes(),
      schemas: {
        ...this.getErrorEntity(),
      },
    };

    for (const entity of entities) {
      const definition = this.getComponent(entity);
      components.schemas[definition.name] = definition.definition;
    }

    return components;
  }

  /**
   * Method used to generate the security schemas based on the authentication
   * methods supported by the framework.
   */
  protected getSecuritySchemes(): Record<string, unknown> {
    return {
      securitySchemes: {
        BasicAuth: {
          type: "http",
          scheme: "basic",
        },
        BearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    };
  }

  /**
   * Method used to generate the error entity definition. Since all the errors
   * returned by the application follow the same pattern we can easily define a
   * generic error entity and reuse it everywhere we need to return an error.
   */
  protected getErrorEntity(): Record<string, unknown> {
    return {
      ErrorMessage: {
        type: "object",
        description: "Error message object",
        properties: {
          status: {
            type: "integer",
            default: 500,
          },
          message: {
            type: "string",
          },
          details: {
            type: "string",
            default: "",
          },
        },
      },
    };
  }

  /**
   * Method used to generate the definition of a component. It takes as parameter
   * the entity metadata information.
   *
   * @param entity The entity we want to generate a component from.
   */
  protected getComponent(entity: IEntityMetadata): ISwaggerComponentDefinition {
    const componentDefinition: ISwaggerComponentDefinition = {
      name: entity.name,
      definition: {
        type: "object",
        description: entity.description,
        properties: {},
      },
    };

    componentDefinition.definition.properties = entity.properties.reduce(
      (accum, property) => {
        if (property.dataType === EntityPropertyDataTypes.OBJECT) {
          return {
            ...accum,
            [property.name]: {
              type: EntityPropertyDataTypes.OBJECT,
              $ref: `#/components/schemas/${ property.options.reference }`,
            },
          };
        }
        if (property.dataType === EntityPropertyDataTypes.ARRAY) {
          return {
            ...accum,
            [property.name]: {
              type: EntityPropertyDataTypes.ARRAY,
              items: property.options.reference
                ? {
                  $ref: `#/components/schemas/${ property.options.reference }`,
                }
                : {
                  type: property.options.childType || EntityPropertyDataTypes.STRING,
                },
            },
          };
        }

        const definition: Record<string, unknown> = {
          description: property.description,
          type: property.dataType,
        };

        if (property.options.enum) {
          definition.enum = property.options.enum;
        }

        if (property.options.default) {
          definition.default = property.options.default;
        }

        if (property.options.isDate) {
          definition.format = "date";
        }
        if (property.options.isDateTime) {
          definition.format = "date-time";
        }
        if (property.options.isPassword) {
          definition.format = "password";
        }

        if (property.dataType === EntityPropertyDataTypes.NUMBER) {
          definition.format = "double";
        }
        if (property.dataType === EntityPropertyDataTypes.INTEGER) {
          definition.format = "int64";
        }

        return {
          ...accum,
          [property.name]: definition,
        };
      },
      {} as Record<string, unknown>,
    );
    componentDefinition.definition.required = entity.properties
      .filter((property) => property.options.required && AUDIT.indexOf(property.name) < 0)
      .map((property) => property.name);

    if (componentDefinition.definition.required.length === 0) {
      delete componentDefinition.definition.required;
    }

    return componentDefinition;
  }
}
