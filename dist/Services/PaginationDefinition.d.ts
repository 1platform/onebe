import { FindManyOptions } from "typeorm";
import BaseEntity from "../Documentation/BaseEntity";
/**
 * The base response for a Paginated Entity.
 */
export declare class PaginatedEntity<TEntity> extends BaseEntity {
    /**
     * Current page served by the paged entity.
     */
    page: number;
    /**
     * How many records contains the page.
     */
    size: number;
    /**
     * How many records are available in the entity table.
     */
    count: number;
    /**
     * The data fetched from the entity based on the given input parameters.
     */
    data: Array<TEntity>;
    /**
     * Flag to show if there is a next page.
     */
    hasNext: boolean;
    /**
     * URL to the next page.
     */
    nextPage?: string | null;
    /**
     * Flag to show if there is a previous page.
     */
    hasPrevious: boolean;
    /**
     * URL to the previous page.
     */
    previousPage?: string | null;
}
/**
 * The base object to be used when requesting a paginated entity.
 */
export declare class PaginatedOptions<TEntity> extends BaseEntity {
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
export declare function generatePaginatedEntityDocs(name: string): string;
