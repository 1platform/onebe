import { Request } from "express";
import IPayload from "./IPayload";
/**
 * Creates a signed JWT Token that can be sent to the user and used
 * for the Bearer authentication method.
 *
 * @param payload The payload we want to sign.
 * @param rememberMe Should the token be valid for a longer period.
 */
export declare function sign(payload: IPayload | string, rememberMe?: boolean): string;
/**
 * Creates a short timed signed JWT Token that can be sent to the user and used
 * for the Bearer authentication method.
 *
 * @param payload The payload we want to sign.
 */
export declare function shortLiveToken(payload: IPayload | string): string;
/**
 * Checks if the given token is valid or not.
 *
 * @param token The token to be verified.
 */
export declare function verify(token: string): boolean;
/**
 * Decodes the given token.
 *
 * @param token The token to be decoded.
 */
export declare function decode(token: string): IPayload | string;
/**
 * Extracts the token from the request object.
 *
 * @param request The request object.
 */
export declare function extractToken(request: Request): string;
