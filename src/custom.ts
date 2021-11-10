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
    }
  }
}

/**
 * Some random value, just to be include in the app... no use
 */
export default 1;
