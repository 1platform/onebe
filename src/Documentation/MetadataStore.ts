import { IEntityMetadata } from "./Definition/EntityMetadata";
import EntityDefinition from "./EntityDefinition";
import { IRouteMetadata } from "./Definition/RouteMetadata";
import RouteDefinition from "./RouteDefinition";

/**
 * A store where you can document the entities and routes of your application.
 *
 * Inside this store the framework keeps information about what should be passed
 * by whom and where. When needed, the documentation system will extract all the
 * information needed and generate the required documentation.
 */
export default class MetadataStore {
  /**
   * Entity metadata definition utility.
   */
  private readonly _entity: EntityDefinition = new EntityDefinition();
  /**
   * Route metadata definition utility.
   */
  private readonly _route: RouteDefinition = new RouteDefinition();

  /**
   * The constructor of the Metadata store
   */
  private constructor() {
    // Do Nothing
  }

  /**
   * The Metadata Store instance
   */
  protected static _instance: MetadataStore;

  /**
   * Getter for the MetadataStore instance.
   */
  public static get instance(): MetadataStore {
    if (!MetadataStore._instance) {
      MetadataStore._instance = new MetadataStore();
    }

    return MetadataStore._instance;
  }

  /**
   * Getter for the list of entities defined in the application.
   */
  public get entities(): Array<IEntityMetadata> {
    return this._entity.list;
  }

  /**
   * Getter for the entity metadata definition utility.
   */
  public get entity(): EntityDefinition {
    return this._entity;
  }

  /**
   * Getter for the list of routes defined in the application.
   */
  public get routes(): Array<IRouteMetadata> {
    return this._route.list;
  }

  /**
   * Getter for the route metadata definition utility.
   */
  public get route(): RouteDefinition {
    return this._route;
  }
}
