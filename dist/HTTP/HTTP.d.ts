/// <reference types="node" />
import { Application } from "express";
import { Server } from "http";
import IMiddleware from "../Middlewares/IMiddleware";
/**
 * The HTTP service used to create the HTTP server.
 *
 * Through this service you can start an HTTP server using Express, secured with
 * Helmet and having some default Middlewares/Plugins loaded in the application.
 */
export default class HTTP {
    /**
     * A list of middlewares that are loaded in your application.
     */
    private _middlewares;
    /**
     * Express instance that is used for the HTTP server.
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
     * Getter for the Express instance.
     */
    get app(): Application;
    /**
     * Getter for the HTTP server.
     */
    get http(): Server;
    /**
     * Getter for the port used to serve the HTTP server.
     */
    get port(): number;
    /**
     * Getter for the Host IP used to serve the HTTP server.
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
     * Method used to start the HTTP server created by the service.
     */
    start(): Promise<void>;
    /**
     * Attach a middleware or a list of middlewares to the express application.
     *
     * @param middleware A middleware or a list of middlewares you want to attach.
     */
    use(middleware: IMiddleware | IMiddleware[]): void;
}
