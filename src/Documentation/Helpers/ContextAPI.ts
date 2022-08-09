import { Request, Response } from "express";
import { ParsedQs } from "qs";

export default class ContextAPI<BodyRequest = any> {
  private readonly _exposeRequest: boolean = false;
  private readonly _isGet: boolean = false;
  private readonly _request: Request;
  private readonly _response: Response;

  public constructor(
    request: Request,
    response: Response,
    exposeRequest = false,
    isGet = false
  ) {
    this._request = request;
    this._response = response;
    this._exposeRequest = exposeRequest;
    this._isGet = isGet;
  }

  public get request(): Request | undefined {
    if (this._exposeRequest) {
      return this._request;
    }

    return undefined;
  }

  public get response(): Response | undefined {
    if (this._exposeRequest) {
      return this._response;
    }

    return undefined;
  }

  public get parameters(): Record<string, string> {
    return this._request.params;
  }

  public get queryParameters(): ParsedQs {
    return this._request.query;
  }

  public get headers(): Record<string, string> {
    return this._request.headers as Record<string, string>;
  }

  public get files(): Express.Multer.File[] {
    if (this._request.files) {
      return Object.values(this._request.files);
    }
    return this._request.file ? [ this._request.file ] : [];
  }

  public get body(): BodyRequest {
    return !this._isGet ? this._request.body : undefined;
  }

  public getParameter(name: string): string {
    return this._request.params[name];
  }

  public getParameterNumber(name: string): number {
    return Number(this.getParameter(name));
  }

  public getQuery(name: string, defaultValue = ""): ParsedQs {
    return (this._request.query[name] || defaultValue) as ParsedQs;
  }

  public getQueryString(name: string, defaultValue = ""): string {
    return this._request.query[name].toString() || defaultValue;
  }

  public getQueryNumber(name: string, defaultValue = 0): number {
    return Number(this.getQueryString(name)) || defaultValue;
  }

  public getQueryBoolean(name: string): boolean {
    return (this.getQueryString(name) ?? "false").toLowerCase() !== "false";
  }

  public getQueryArray<T = ParsedQs>(name: string): Array<T> {
    return (this.getQueryString(name) as unknown as Array<T>) || [];
  }

  public getHeader(headerName: string): string | undefined {
    return this._request.header(headerName) || undefined;
  }

  public setHeader(headerName: string, value: string | string[]): void {
    this._response.header(headerName, value);
  }

  public getFiles(
    fileName?: string
  ): Express.Multer.File | Express.Multer.File[] {
    if (fileName && this._request.files && this._request.files[fileName]) {
      return this._request.files[fileName];
    }

    return this._request.file;
  }

  public getBody(): BodyRequest {
    return this._request.body as BodyRequest;
  }

  public getBodyProperty<T = any>(property: string): T {
    return this._request.body[property] as T;
  }

  public get appURL(): string {
    return this._request.appURL;
  }

  public get pageURL(): string {
    return this._request.pageURL;
  }

  public get sessionID(): string {
    return this._request.sessionID;
  }
}
