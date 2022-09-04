/**
 * Backend Bootstrap
 */
import "onebe/custom";

import onebe from "onebe";
import type {
  IInitStrategyOptions,
  IPayload,
  IUser,
} from "onebe/Authentication";
import { getDefaultLogger } from "onebe/System/Logger";

import jobs from "./jobs";
import observers from "./observers";
import services from "./services";

/**
 * Uncomment the following code and adjust it to your needs if you want to use a
 * specific interface for the `user` object used in the express Request object.
 * Otherwise, leave it as it is.
 */
//declare global {
//   /**
//    * Extension to the Express namespace.
//    */
//   namespace Express {
//     /**
//      * Extension to the User interface exposed by Express
//      */
//     export interface User extends <YourUserDefinitionInterface> {}
//
//     /**
//      * Extension to the Request interface exposed by Express.
//      */
//     export interface Request {
//       /**
//        * The authenticated user object.
//        */
//       user?: User;
//     }
//   }
// }

/**
 * Application startup call. Through this call you initialise the framework and its
 * subsystems in preparation for the application startup.
 */
onebe({
  currentFolder: __dirname,
  configFolder: "./config",
  routesFolder: "./routes",
  noDBConnection: false,
})
  .then((start: (strategyProps?: IInitStrategyOptions) => Promise<void>) => {
    /**
     * You can add code here to be executed before adding the services, observers or the jobs.
     */
    services();
    observers();
    jobs();

    /**
     * You can add code here to be executed after the services, observers and the jobs are
     * registered.
     */

    /**
     * Adjust the following two functions to be able to use the authentication and
     * authorization system.
     */
    return start({
      serializeUser: (user: IUser) => ({ userId: user.id }),
      deserializeUser: (
        payload: IPayload,
        done: (err: any, user?: IUser) => void
      ) => ({ id: payload.id }),
    });
  })
  .catch((err) => {
    getDefaultLogger().error(err.message);
    getDefaultLogger().debug(err.stack);
  });

process.on("uncaughtException", (err) => {
  getDefaultLogger().error(err.message);
  getDefaultLogger().debug(err.stack);
  process.exit(1); //mandatory (as per the Node.js docs)
});
