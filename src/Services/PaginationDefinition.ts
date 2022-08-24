import { FindManyOptions } from "typeorm";
import BaseEntity from "../Documentation/BaseEntity";
import { ArrayProperty, BooleanProperty, Entity, IsRequired, NumberProperty, StringProperty } from "../Documentation/Decorators/EntityDecorators";
import { EntityPropertyDataTypes } from "../Documentation/Definition/DataTypes";
import MetadataStore from "../Documentation/MetadataStore";

/**
 * The base response for a Paginated Entity.
 */
@Entity("The base of what Paginated Entity looks like")
export class PaginatedEntity<TEntity> extends BaseEntity {
  /**
   * Current page served by the paged entity.
   */
  @NumberProperty({ description: "Current page served by the paged entity." })
  @IsRequired
    page: number;

  /**
   * How many records contains the page.
   */
  @NumberProperty({ description: "How many records contains the page." })
  @IsRequired
    size: number;

  /**
   * How many records are available in the entity table.
   */
  @NumberProperty({ description: "How many records are available in the entity table." })
  @IsRequired
    count: number;

  /**
   * The data fetched from the entity based on the given input parameters.
   */
  @ArrayProperty(EntityPropertyDataTypes.OBJECT, { description: "The data fetched from the entity based on the given input parameters." })
  @IsRequired
    data: Array<TEntity>;

  /**
   * Flag to show if there is a next page.
   */
  @BooleanProperty({ description: "Flag to show if there is a next page." })
  @IsRequired
    hasNext: boolean;

  /**
   * URL to the next page.
   */
  @StringProperty({ description: "URL to the next page." })
    nextPage?: string | null;

  /**
   * Flag to show if there is a previous page.
   */
  @BooleanProperty({ description: "Flag to show if there is a previous page." })
  @IsRequired
    hasPrevious: boolean;

  /**
   * URL to the previous page.
   */
  @StringProperty({ description: "URL to the previous page." })
    previousPage?: string | null;
}

/**
 * The base object to be used when requesting a paginated entity.
 */
export class PaginatedOptions<TEntity> extends BaseEntity {
  /**
   * The page we need to fetch.
   */
  page?: number;
  /**
   * How many records should be returned.
   */
  size?: number;
  /**
   * A list of options to be used in the data filtering and displaying.
   */
  options?: FindManyOptions<TEntity>;
}

/**
 * Function used to quickly generate documentation for a paginated entity.
 * The result of the function is always: `Paginated<Entity Name>`. For example
 * `PaginatedUser` when you pass `User` as input.
 *
 * @param name The name of the entity you want to document.
 */
export function generatePaginatedEntityDocs(name: string): string {
  const entityMetadata = MetadataStore.instance.entity;
  const paginatedEntity = entityMetadata.entity("PaginatedEntity");
  entityMetadata.add(`Paginated${ name }`, paginatedEntity.description);
  entityMetadata.extends(`Paginated${ name }`, "PaginatedEntity");

  entityMetadata.property(`Paginated${ name }`, "data", {
    dataType: EntityPropertyDataTypes.ARRAY,
    reference: name,
  });

  return `Paginated${ name }`;
}
