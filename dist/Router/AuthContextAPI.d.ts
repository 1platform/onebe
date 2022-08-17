import { Request } from "express";
export default class AuthContextAPI {
    private readonly _request;
    private _authStore;
    constructor(request: Request, baseStore?: Record<string, unknown>);
    get user(): Express.User | undefined;
    get token(): string;
    get isAuthenticated(): boolean;
    logout(): void;
    get<T = any>(key: string): T;
    set<T = any>(key: string, value: T): void;
}
