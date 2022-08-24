import { IInitStrategyOptions } from "./Authentication/Passport";
import { Environment } from "./System/Env";
import App from "./App/App";
import { RouterBase } from "./Router";
import { Configuration } from "./System/Config";
declare global {
    /**
     * Extension to the Express namespace.
     */
    namespace Express {
        /**
         * Extension to the User interface exposed by Express
         */
        interface User {
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
        interface Request {
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
        }
    }
    var env: Environment;
    var app: App;
    var onebe: App;
    var router: RouterBase;
    var config: Configuration;
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
    currentDir?: string;
    /**
     * The location of the configuration files. The framework needs only a
     * relative path to be provided, relative to the `currentDir` parameter
     * specified above.
     */
    configDir?: string;
    /**
     * The location of the controllers used in the application. The framework
     * needs only a relative path to be provided, relative to the `currentDir`
     * parameter specified above.
     */
    controllersDir?: string;
    /**
     * Flag to mark if you need a database connection to be initialised
     * on startup or not. This flag is used when launching the TypeORM
     * migration system.
     */
    noDBConnection?: boolean;
}
