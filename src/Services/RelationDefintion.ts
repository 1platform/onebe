import { camelCase } from "@/Utils";

/**
 * Interface used to define a relation between two tables.
 */
export interface IRelationDefinition<ParentKey = number, ChildKey = number> {
  /**
   * The name of the relation to be used for data handling.
   */
  relationName: string;
  /**
   * The name of the parent field that will be used for handling data changes.
   */
  parentField: string;
  /**
   * The value of the parent field that will be used for handling data.
   */
  parentValue: ParentKey;
  /**
   * The name of the child field that will be used for handling data changes.
   */
  childField: string;
  /**
   * The values of the child field that will be used for handling data.
   */
  data: Array<ChildKey>;
  /**
   * The name of the parent table.
   */
  parentTable: string;
  /**
   * The name of the child table.
   */
  childTable: string;
}

/**
 * Builds the relation definition object based on the given data.
 *
 * @param parentTable The name of the parent table.
 * @param childTable The name of the child table.
 * @param parentValue The value used for the parent field.
 * @param data The data used for the child field.
 */
export function BuildRelationDefinition<ParentKey = number, ChildKey = number>(
  parentTable: string,
  childTable: string,
  parentValue: ParentKey,
  data: Array<ChildKey>
): IRelationDefinition<ParentKey, ChildKey> {
  return {
    relationName: `${ parentTable }${ childTable }`,
    parentField: camelCase(`${ parentTable }Id`),
    parentValue,
    childField: camelCase(`${ childTable }Id`),
    data,
    parentTable,
    childTable,
  };
}

/**
 * Builds the relation definition object based on the given data with a custom relation name.
 *
 * @param relationName The name of the relation table.
 * @param relation The existing relation definition.
 */
export function SetCustomRelationDefinition<ParentKey = number, ChildKey = number>(
  relationName: string,
  relation: IRelationDefinition<ParentKey, ChildKey>
): IRelationDefinition<ParentKey, ChildKey> {
  return {
    ...relation,
    relationName,
  };
}

/**
 * Inverts the fields used to handle the data changes in the database.
 *
 * @param relation The existing relation definition.
 */
export function InvertFields<ParentKey = number, ChildKey = number>(
  relation: IRelationDefinition<ParentKey, ChildKey>
): IRelationDefinition<ParentKey, ChildKey> {
  return {
    ...relation,
    parentField: relation.childField,
    childField: relation.parentField,
  };
}

/**
 * Inverts the relation name based on the given tables.
 *
 * @param relation The existing relation definition.
 */
export function InvertTable<ParentKey = number, ChildKey = number>(
  relation: IRelationDefinition<ParentKey, ChildKey>
): IRelationDefinition<ParentKey, ChildKey> {
  return {
    ...relation,
    relationName: `${ relation.childTable }${ relation.parentTable }`,
  };
}
