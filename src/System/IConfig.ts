/**
 * The definition of the configuration object.
 */
export default interface IConfig {
  /**
   * Iterator used to get the configuration values from the configuration object.
   */
  [key: string]: string | number | boolean | IConfig | null | Array<string> | Array<IConfig>;
}
