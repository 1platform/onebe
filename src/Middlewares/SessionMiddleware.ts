import { Application } from "express";
import session, { MemoryStore } from "express-session";

import IMiddleware from "@/Middlewares/IMiddleware";
import Config from "@/System/Config";

/**
 * Middleware used to create a session store for the application, together
 * with adding that session to the Express application.
 */
export default class SessionMiddleware implements IMiddleware {
  /**
   * Session store object used by application to store session data.
   */
  private static _store: session.Store = new MemoryStore();

  /**
   * Setter method for the session store.
   *
   * @param newStore The new session store to be used in the application.
   */
  public static set store(newStore: session.Store) {
    SessionMiddleware._store = newStore;
  }

  /**
   * The middleware initialization method.
   *
   * @param app The express application on which we apply the middleware.
   */
  public use(app: Application): void {
    app.use(
      session({
        secret: Config.string("auth.session.secret"),
        resave: false,
        saveUninitialized: false,
        store: SessionMiddleware._store,
      }),
    );
  }
}
