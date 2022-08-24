import { Request } from "express";
import { extractToken } from "../Authentication/JWT";
import { getDefaultLogger } from "../System/Logger";

/**
 * A class used to expose the Authentication Context information from a request.
 *
 * This context will handle everything related to the authentication and
 * authorisation part of your application.
 */
export default class AuthContextAPI {
  /**
   * The request object for which the Authentication Context is served.
   */
  private readonly _request: Request;
  /**
   * A store with custom data received from the request object.
   */
  private _authStore: Record<string, unknown> = {};

  /**
   * Authentication Context constructor.
   *
   * @param request The Request for which we serve the Authentication Context.
   * @param [baseStore] The store with Authentication Data.
   */
  public constructor(request: Request, baseStore?: Record<string, unknown>) {
    this._request = request;
    this._authStore = baseStore || {};
  }

  /**
   * Getter for the User object from the request.
   */
  public get user(): Express.User | undefined {
    return this._request.user;
  }

  /**
   * Getter for the Bearer token.
   */
  public get token(): string {
    return extractToken(this._request);
  }

  /**
   * Getter for the isAuthenticated flag.
   */
  public get isAuthenticated(): boolean {
    return this._request.isAuthenticated();
  }

  /**
   * Method used to log the user out from the application.
   */
  public logout(): void {
    if (this._request.logout) {
      this._request.logout(() => {
        getDefaultLogger().debug(`User [${ this._request.user.id }] has logged out.`);
      });
    }
  }

  /**
   * Getter function for elements from the authentication store.
   *
   * @param key The key for which you need information.
   */
  public get<T = any>(key: string): T {
    return this._authStore[key] as T;
  }

  /**
   * Setter function for elements into the authentication store.
   *
   * @param key The key on which you set information.
   * @param value The value which you want to store.
   */
  public set<T = any>(key: string, value: T): void {
    this._authStore[key] = value;
  }
}
