import { Request, Response } from "express";
import { ParsedQs } from "qs";
import { UploadedFile } from "../Middlewares/MulterMiddleware";
import type { TOptions } from "i18next";
import Config from "../System/Config";

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
  private readonly _exposeRequest: boolean = false;
  /**
   * Flag to let the Context API know that the request is a GET request.
   */
  private readonly _isGet: boolean = false;
  /**
   * The request object for which you need context.
   */
  private readonly _request: Request;
  /**
   * The response object for which you need context.
   */
  private readonly _response: Response;

  /**
   * Context API constructor.
   *
   * @param request The request object for which you need context.
   * @param response The response object for which you need context.
   * @param [exposeRequest] Flag to let the Context API know if you need the request object exposed in the endpoint method or not.
   * @param [isGet] Flag to let the Context API know that the request is a GET request.
   */
  public constructor(request: Request, response: Response, exposeRequest = false, isGet = false) {
    this._request = request;
    this._response = response;
    this._exposeRequest = exposeRequest;
    this._isGet = isGet;
  }

  /**
   * Getter for the request object. If the flag `exposeRequest` is set to false, the getter will
   * return undefined.
   */
  public get request(): Request | undefined {
    return this._exposeRequest ? this._request : undefined;
  }

  /**
   * Getter for the response object. If the flag `exposeRequest` is set to false, the getter will
   * return undefined.
   */
  public get response(): Response | undefined {
    return this._exposeRequest ? this._response : undefined;
  }

  /**
   * Getter for the list of URL Parameters exposed by the endpoint.
   */
  public get parameters(): Record<string, string> {
    return this._request.params;
  }

  /**
   * Getter for the list of Query Parameters exposed by the endpoint.
   */
  public get queryParameters(): ParsedQs {
    return this._request.query;
  }

  /**
   * Getter for the list of Headers exposed by the endpoint.
   */
  public get headers(): Record<string, string> {
    return this._request.headers as Record<string, string>;
  }

  /**
   * Getter for the list of files uploaded through the Endpoint.
   */
  public get files(): Array<UploadedFile> {
    if (this._request.files) {
      return Array.isArray(this._request.files as UploadedFile[]) ? (this._request.files as UploadedFile[]) : Object.values(this._request.files);
    }
    return this._request.file ? [ this._request.file ] : [];
  }

  /**
   * Getter for the Body of the request. If the request is a GET one, then it will return undefined.
   */
  public get body(): BodyRequest {
    return !this._isGet ? this._request.body : undefined;
  }

  /**
   * Getter for the Application URL from the request.
   */
  public get appURL(): string {
    return this._request.appURL;
  }

  /**
   * Getter for the Page URL from the request.
   */
  public get pageURL(): string {
    return this._request.pageURL;
  }

  /**
   * Getter for the session ID of the request.
   */
  public get sessionID(): string {
    return this._request.sessionID;
  }

  /**
   * Getter for the language used in the request.
   */
  public get language(): string {
    return this._request.t ? this._request.language : Config.string("i18n.defaultLang", "en");
  }

  /**
   * Method used to get the value of a URL Parameter by its name.
   *
   * @param name The name of the parameter.
   */
  public getParameter(name: string): string {
    return this._request.params[name];
  }

  /**
   * Method used to get a numeric URL Parameter by its name.
   *
   * @param name The name of the parameter.
   */
  public getParameterNumber(name: string): number {
    return Number(this.getParameter(name));
  }

  /**
   * Method used to get the value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   * @param defaultValue The default value of the parameter.
   */
  public getQuery(name: string, defaultValue = ""): ParsedQs {
    return (this._request.query[name] || defaultValue) as ParsedQs;
  }

  /**
   * Method used to get the string value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   * @param defaultValue The default value of the parameter.
   */
  public getQueryString(name: string, defaultValue = ""): string {
    return this._request.query[name].toString() || defaultValue;
  }

  /**
   * Method used to get the numeric value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   * @param defaultValue The default value of the parameter.
   */
  public getQueryNumber(name: string, defaultValue = 0): number {
    return Number(this.getQueryString(name)) || defaultValue;
  }

  /**
   * Method used to get the boolean value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   */
  public getQueryBoolean(name: string): boolean {
    let value = this.getQueryString(name) ?? "false";

    if (value === "0" || value === "1") {
      value = (value === "1").toString();
    }
    return value.toLowerCase() !== "false";
  }

  /**
   * Method used to get the array value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   */
  public getQueryArray<T = ParsedQs>(name: string): Array<T> {
    return (this.getQueryString(name) as unknown as Array<T>) || [];
  }

  /**
   * Method used to get the header value from the request.
   *
   * @param headerName The name of the header value needed.
   */
  public getHeader(headerName: string): string | undefined {
    return this._request.header(headerName) || undefined;
  }

  /**
   * Method used to set a header value for the response.
   *
   * @param headerName The name of the header for which you set the value.
   * @param value The value you want to set.
   */
  public setHeader(headerName: string, value: string | string[]): void {
    this._response.header(headerName, value);
  }

  /**
   * Method used to get a file by its name from the request. When using the single upload
   * middleware, you can skip the fileName parameter.
   *
   * @param [fileName] The name of the file. When using the single file upload middleware, you can skip the parameter.
   */
  public getFiles(fileName?: string): UploadedFile | UploadedFile[] {
    if (fileName && this._request.files && this._request.files[fileName]) {
      return this._request.files[fileName];
    }

    return this._request.file;
  }

  /**
   * Method used to get the contents of the body as the given type passed when defining the endpoint.
   */
  public getBody(): BodyRequest {
    return this._request.body as BodyRequest;
  }

  /**
   * Method used to get a property from the body using a name and a specific type.
   *
   * @param property The property we want from the body.
   */
  public getBodyProperty<T = any>(property: string): T {
    return this._request.body[property] as T;
  }

  /**
   * Method used to translate a message with parameter.
   *
   * @param key The message to be returned to the user.
   * @param [options] A map with parameters that is going to be applied to the message.
   */
  public t(key: string, options?: TOptions): string {
    return this._request.t ? this._request.t(key, options) : key;
  }

  /**
   * Method used to translate a message with parameter.
   *
   * @param key The message to be returned to the user.
   * @param [options] A map with parameters that is going to be applied to the message.
   */
  public translate(key: string, options?: TOptions): string {
    return this.t(key, options);
  }
}
