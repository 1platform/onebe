import App from "@/App/App";
import { IInitStrategyOptions } from "@/Authentication";
import { RouterBase } from "@/Router";
import { Configuration } from "@/System/Config";
import { Environment } from "@/System/Env";

declare global {
  /**
   * Extension to the Express namespace.
   */
  namespace Express {
    /**
     * Extension to the User interface exposed by Express
     */
    export interface User {
      /**
       * The id of the user.
       */
      id: any;

      /**
       * Iterator for all other properties that can be added to the User interface.
       */
      [key: string]: any;
    }

    /**
     * Extension to the Request interface exposed by Express.
     */
    export interface Request {
      /**
       * The authenticated user object.
       */
      user?: User;
      /**
       * The full URL to the current page.
       */
      pageURL?: string;
      /**
       * The app URL of the application.
       */
      appURL?: string;

      /**
       * Extra authentication context elements.
       */
      authContext?: Record<string, unknown>;

      /**
       * The raw body of the request.
       */
      rawBody: Buffer;
    }
  }

  /* eslint-disable no-var */
  var env: Environment;
  var app: App;
  var onebe: App;
  var router: RouterBase;
  var config: Configuration;
  /* eslint-enable no-var */
}

/**
 * Framework initialisation options.
 *
 * When starting the application, you need to pass some information
 * for configuring the startup procedures of the framework.
 */
export interface IInitOptions extends IInitStrategyOptions {
  /**
   * The folder in which the application runs. Based on this folder,
   * some configuration for various other files and subsystems is generated
   * and used. For example, the Configuration loader and Internationalisation
   * file loader are started and made to look for various files starting from
   * the current folder.
   */
  currentFolder?: string;
  /**
   * The location of the configuration files. The framework needs only a
   * relative path to be provided, relative to the `currentFolder` parameter
   * specified above.
   */
  configFolder?: string;
  /**
   * The location of the controllers used in the application. The framework
   * needs only a relative path to be provided, relative to the `currentFolder`
   * parameter specified above.
   */
  routesFolder?: string;
  /**
   * Flag to mark if you need a database connection to be initialised
   * on startup or not. This flag is used when launching the TypeORM
   * migration system.
   */
  noDBConnection?: boolean;
}
