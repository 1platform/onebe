/**
 * The Application Information interface.
 *
 * This interface describes the object with all the information about
 * the application.
 */
export default interface IAppInfo {
    /**
     * The name of the application.
     */
    appName: string;
    /**
     * The version of the application.
     */
    appVersion: string;
    /**
     * The description of the application.
     */
    appDescription?: string;
    /**
     * The URL of the application.
     */
    appURL?: string;
    /**
     * The name of the backend framework used.
     */
    name?: string;
    /**
     * The version of the backend framework used.
     */
    version?: string;
}
