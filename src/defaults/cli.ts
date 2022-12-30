import type IConfig from "@/System/IConfig";

/**
 * Configuration parameters for the CLI commands.
 */
const defaultCLIConfig: IConfig = {
  /**
   * Additional services that can be used when generating service files.
   */
  services: {},
};

export default defaultCLIConfig;
