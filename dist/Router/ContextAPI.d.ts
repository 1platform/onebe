/// <reference types="multer" />
import { Request, Response } from "express";
import { ParsedQs } from "qs";
/**
 * Endpoint request Context information class.
 *
 * Through this class you can interact with the data received from your users. This Context API allows
 * you to get data from the Parameters, Query Parameters or Body easily, through specific methods
 * and specific data types.
 */
export default class ContextAPI<BodyRequest = any> {
    /**
     * Flag to let the Context API know if you need the request object exposed in the endpoint method or not.
     */
    private readonly _exposeRequest;
    /**
     * Flag to let the Context API know that the request is a GET request.
     */
    private readonly _isGet;
    /**
     * The request object for which you need context.
     */
    private readonly _request;
    /**
     * The response object for which you need context.
     */
    private readonly _response;
    /**
     * Context API constructor.
     *
     * @param request The request object for which you need context.
     * @param response The response object for which you need context.
     * @param [exposeRequest] Flag to let the Context API know if you need the request object exposed in the endpoint method or not.
     * @param [isGet] Flag to let the Context API know that the request is a GET request.
     */
    constructor(request: Request, response: Response, exposeRequest?: boolean, isGet?: boolean);
    /**
     * Getter for the request object. If the flag `exposeRequest` is set to false, the getter will
     * return undefined.
     */
    get request(): Request | undefined;
    /**
     * Getter for the response object. If the flag `exposeRequest` is set to false, the getter will
     * return undefined.
     */
    get response(): Response | undefined;
    /**
     * Getter for the list of URL Parameters exposed by the endpoint.
     */
    get parameters(): Record<string, string>;
    /**
     * Getter for the list of Query Parameters exposed by the endpoint.
     */
    get queryParameters(): ParsedQs;
    /**
     * Getter for the list of Headers exposed by the endpoint.
     */
    get headers(): Record<string, string>;
    /**
     * Getter for the list of files uploaded through the Endpoint.
     */
    get files(): Express.Multer.File[];
    /**
     * Getter for the Body of the request. If the request is a GET one, then it will return undefined.
     */
    get body(): BodyRequest;
    /**
     * Getter for the Application URL from the request.
     */
    get appURL(): string;
    /**
     * Getter for the Page URL from the request.
     */
    get pageURL(): string;
    /**
     * Getter for the session ID of the request.
     */
    get sessionID(): string;
    /**
     * Method used to get the value of a URL Parameter by its name.
     *
     * @param name The name of the parameter.
     */
    getParameter(name: string): string;
    /**
     * Method used to get a numeric URL Parameter by its name.
     *
     * @param name The name of the parameter.
     */
    getParameterNumber(name: string): number;
    /**
     * Method used to get the value of a Query Parameter by its name.
     *
     * @param name The name of the parameter.
     * @param defaultValue The default value of the parameter.
     */
    getQuery(name: string, defaultValue?: string): ParsedQs;
    /**
     * Method used to get the string value of a Query Parameter by its name.
     *
     * @param name The name of the parameter.
     * @param defaultValue The default value of the parameter.
     */
    getQueryString(name: string, defaultValue?: string): string;
    /**
     * Method used to get the numeric value of a Query Parameter by its name.
     *
     * @param name The name of the parameter.
     * @param defaultValue The default value of the parameter.
     */
    getQueryNumber(name: string, defaultValue?: number): number;
    /**
     * Method used to get the boolean value of a Query Parameter by its name.
     *
     * @param name The name of the parameter.
     */
    getQueryBoolean(name: string): boolean;
    /**
     * Method used to get the array value of a Query Parameter by its name.
     *
     * @param name The name of the parameter.
     */
    getQueryArray<T = ParsedQs>(name: string): Array<T>;
    /**
     * Method used to get the header value from the request.
     *
     * @param headerName The name of the header value needed.
     */
    getHeader(headerName: string): string | undefined;
    /**
     * Method used to set a header value for the response.
     *
     * @param headerName The name of the header for which you set the value.
     * @param value The value you want to set.
     */
    setHeader(headerName: string, value: string | string[]): void;
    /**
     * Method used to get a file by its name from the request. When using the single upload
     * middleware, you can skip the fileName parameter.
     *
     * @param [fileName] The name of the file. When using the single file upload middleware, you can skip the parameter.
     */
    getFiles(fileName?: string): Express.Multer.File | Express.Multer.File[];
    /**
     * Method used to get the contents of the body as the given type passed when defining the endpoint.
     */
    getBody(): BodyRequest;
    /**
     * Method used to get a property from the body using a name and a specific type.
     *
     * @param property The property we want from the body.
     */
    getBodyProperty<T = any>(property: string): T;
}
