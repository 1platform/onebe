import { Application } from "express";
import session, { MemoryStore } from "express-session";
import Config from "../System/Config";
import IMiddleware from "./IMiddleware";

/**
 * Session middleware.
 */
export default class SessionMiddleware implements IMiddleware {
  private static _store: session.Store = new MemoryStore();

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
      })
    );
  }
}
