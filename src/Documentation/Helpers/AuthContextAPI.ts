import { Request } from "express";
import { extractToken } from "../../Authentication/JWT";

export default class AuthContextAPI {
  private readonly _request: Request;
  private _authStore: Record<string, unknown> = {};

  public constructor(request: Request, baseStore?: Record<string, unknown>) {
    this._request = request;
    this._authStore = baseStore || {};
  }

  public get user(): Express.User | undefined {
    return this._request.user;
  }

  public get token(): string {
    return extractToken(this._request);
  }

  public get isAuthenticated(): boolean {
    return this._request.isAuthenticated();
  }

  public logout(): void {
    if (this._request.logout) {
      this._request.logout();
    }
  }

  public get<T = any>(key: string): T {
    return this._authStore[key] as T;
  }

  public set<T = any>(key: string, value: T): void {
    this._authStore[key] = value;
  }
}
