/// <reference types="node" />
import { Application } from "express";
import { Server } from "http";
import IMiddleware from "../Middlewares/IMiddleware";
export default class HTTP {
    private _middlewares;
    constructor();
    private _app;
    get app(): Application;
    private _http;
    get http(): Server;
    get port(): number;
    get host(): string;
    setLocal(variable: string, value: any): void;
    start(): void;
    use(middleware: IMiddleware | IMiddleware[]): void;
}
