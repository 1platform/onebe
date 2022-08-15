import { IEntityMetadata } from "../../Definition/EntityMetadata";
import { EntityPropertyDataTypes } from "../../Definition/DataTypes";

interface ISwaggerComponentDefinition {
  name: string;
  definition: ISwaggerComponent;
}

interface ISwaggerComponent {
  type: string;
  description?: string;
  properties: Record<string, unknown>;
  required?: Array<string>;
}

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

export default class SwaggerComponents {
  public getSecuritySchemes(): Record<string, unknown> {
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

  public getErrorEntity(): Record<string, unknown> {
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

  public buildComponents(entities: Array<IEntityMetadata>): Record<string, unknown> {
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

  public getComponent(entity: IEntityMetadata): ISwaggerComponentDefinition {
    const componentDefinition: ISwaggerComponentDefinition = {
      name: entity.name,
      definition: {
        type: "object",
        description: entity.description,
        properties: {},
      },
    };

    componentDefinition.definition.properties = entity.properties.reduce((accum, property) => {
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
    }, {} as Record<string, unknown>);
    componentDefinition.definition.required = entity.properties
      .filter((property) => property.options.required && AUDIT.indexOf(property.name) < 0)
      .map((property) => property.name);

    if (componentDefinition.definition.required.length === 0) {
      delete componentDefinition.definition.required;
    }

    return componentDefinition;
  }
}
