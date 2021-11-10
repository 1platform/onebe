import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default values for DB config in Env
 */

const defaultDBConfig: IConfig = {
  engine: Env.string("DATABASE_ENGINE", "mongodb"),
  mongo: {
    url: Env.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe"),
  },
};

export default defaultDBConfig;
