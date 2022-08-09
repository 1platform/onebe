import { IEntityMetadata } from "./Definition/EntityMetadata";
import EntityDefinition from "./EntityDefinition";
import { IRouteMetadata } from "./Definition/RouteMetadata";
import RouteDefinition from "./RouteDefinition";
export default class MetadataStore {
    private readonly _entity;
    private readonly _route;
    /**
     * The constructor of the Metadata store
     */
    private constructor();
    /**
     * The Docs store instance
     */
    protected static _instance: MetadataStore;
    /**
     * Get method to retrieve the Docs store instance
     */
    static get instance(): MetadataStore;
    get entities(): Array<IEntityMetadata>;
    get entity(): EntityDefinition;
    get routes(): Array<IRouteMetadata>;
    get route(): RouteDefinition;
}
