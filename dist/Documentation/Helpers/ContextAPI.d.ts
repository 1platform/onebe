/// <reference types="multer" />
import { Request, Response } from "express";
import { ParsedQs } from "qs";
export default class ContextAPI<BodyRequest = any> {
    private readonly _exposeRequest;
    private readonly _isGet;
    private readonly _request;
    private readonly _response;
    constructor(request: Request, response: Response, exposeRequest?: boolean, isGet?: boolean);
    get request(): Request | undefined;
    get response(): Response | undefined;
    get parameters(): Record<string, string>;
    get queryParameters(): ParsedQs;
    get headers(): Record<string, string>;
    get files(): Express.Multer.File[];
    get body(): BodyRequest;
    getParameter(name: string): string;
    getParameterNumber(name: string): number;
    getQuery(name: string, defaultValue?: string): ParsedQs;
    getQueryString(name: string, defaultValue?: string): string;
    getQueryNumber(name: string, defaultValue?: number): number;
    getQueryBoolean(name: string): boolean;
    getQueryArray<T = ParsedQs>(name: string): Array<T>;
    getHeader(headerName: string): string | undefined;
    setHeader(headerName: string, value: string | string[]): void;
    getFiles(fileName?: string): Express.Multer.File | Express.Multer.File[];
    getBody(): BodyRequest;
    getBodyProperty<T = any>(property: string): T;
    get appURL(): string;
    get pageURL(): string;
    get sessionID(): string;
}
