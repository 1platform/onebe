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
    private readonly _entity;
    /**
     * Route metadata definition utility.
     */
    private readonly _route;
    /**
     * The constructor of the Metadata store
     */
    private constructor();
    /**
     * The Metadata Store instance
     */
    protected static _instance: MetadataStore;
    /**
     * Getter for the MetadataStore instance.
     */
    static get instance(): MetadataStore;
    /**
     * Getter for the list of entities defined in the application.
     */
    get entities(): Array<IEntityMetadata>;
    /**
     * Getter for the entity metadata definition utility.
     */
    get entity(): EntityDefinition;
    /**
     * Getter for the list of routes defined in the application.
     */
    get routes(): Array<IRouteMetadata>;
    /**
     * Getter for the route metadata definition utility.
     */
    get route(): RouteDefinition;
}
