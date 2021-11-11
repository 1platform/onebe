import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for the Database
 */
const defaultDBConfig: IConfig = {

  /**
   * The default value for the database engine which will be used in the application.
   */
  engine: Env.string("DATABASE_ENGINE", "mongodb"),

  /**
   * The default mongo configuration
   */
  mongo: {

    /**
     * The default value of the url used to connect to the mongo database.
     */
    url: Env.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe"),
  },
};

export default defaultDBConfig;
