import { IEntityMetadata } from "./Definition/EntityMetadata";
import EntityDefinition from "./EntityDefinition";

export default class MetadataStore {
  private readonly _entity: EntityDefinition = new EntityDefinition();

  /**
   * The constructor of the Metadata store
   */
  private constructor() {
    // Do Nothing
  }

  /**
   * The Docs store instance
   */
  protected static _instance: MetadataStore;

  /**
   * Get method to retrieve the Docs store instance
   */
  public static get instance(): MetadataStore {
    if (!MetadataStore._instance) {
      MetadataStore._instance = new MetadataStore();
    }

    return MetadataStore._instance;
  }

  public get entities(): Array<IEntityMetadata> {
    return this._entity.list;
  }

  public get entity(): EntityDefinition {
    return this._entity;
  }
}
