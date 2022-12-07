import App from "@/App/App";

const app: App = new App();

/**
 * The Application instance that can be used throughout the application to get various pieces
 * of information or to enable the reuse of code.
 */
export default app;

/**
 * The global reference to the Application object.
 */
global.app = app;

/**
 * An alias for the global reference of the Application object.
 */
global.onebe = app;
