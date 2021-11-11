/// <reference types="node" />
import { Application } from "express";
import { Server } from "http";
import IMiddleware from "../Middlewares/IMiddleware";
/**
 * The HTTP server handler class.
 */
export default class HTTP {
    /**
     * A list of middlewares that we load in our application.
     */
    private _middlewares;
    /**
     * The Express application instance.
     */
    private readonly _app;
    /**
     * The Node.js HTTP Server instance.
     */
    private readonly _http;
    /**
     * HTTP Class constructor.
     */
    constructor();
    /**
     * Express application getter.
     */
    get app(): Application;
    /**
     * HTTP Server instance getter.
     */
    get http(): Server;
    /**
     * The port on which we listen on for http requests.
     */
    get port(): number;
    /**
     * The ip on which we listen on for http requests.
     */
    get host(): string;
    /**
     * Set a local variable on the express application.
     *
     * @param variable The variable name.
     * @param value The value of the variable.
     */
    setLocal(variable: string, value: any): void;
    /**
     * Start the HTTP server.
     */
    start(): void;
    /**
     * Attach a middleware to the express application.
     *
     * @param middleware The middleware we want to attach.
     */
    use(middleware: IMiddleware | IMiddleware[]): void;
}
