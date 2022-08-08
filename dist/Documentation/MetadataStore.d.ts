import { IEntityMetadata } from "./Definition/EntityMetadata";
import EntityDefinition from "./EntityDefinition";
export default class MetadataStore {
    private readonly _entity;
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
}
