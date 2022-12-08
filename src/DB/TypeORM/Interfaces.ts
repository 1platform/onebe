/**
 * Interface used to describe the response returned by the Database Seeder.
 */
export interface IDBSeederResults {
  /**
   * How many records were deleted.
   */
  deleted: number;
  /**
   * How many records were created.
   */
  created: number;
}

/**
 * Interface used to describe the information held in a Seed file.
 */
export interface ISeedInfo<T = any> {
  /**
   * The name of the entity to be seeded.
   */
  entity: string;
  /**
   * The data to be imported into the database.
   */
  data: Array<T>;
  /**
   * A list of entities that are needed in order for this entity to be seeded.
   */
  dependsOn?: Array<string>;
  /**
   * Flag to let the seeding engine know that it should generate a query to fill data.
   */
  isQuery?: boolean;
  /**
   * The fields to be used when seeding an entity using query.
   */
  fields?: Array<string>;
}
