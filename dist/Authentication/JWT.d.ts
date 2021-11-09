import { Request } from "express";
import IPayload from "./IPayload";
/**
 * Signs in a user with the given payload.
 *
 * @param payload The payload to authenticate.
 * @param rememberMe Should the token be remembered for a longer period.
 */
export declare function sign(payload: IPayload | string, rememberMe?: boolean): string;
/**
 * Signs in an application with the given payload.
 *
 * @param payload The payload to authenticate.
 */
export declare function shortLiveToken(payload: IPayload | string): string;
/**
 * Verifies if the given token is valid or not.
 *
 * @param token The token to be verified.
 */
export declare function verify(token: string): boolean;
/**
 * Decodes the given token.
 *
 * @param token The token to be token.
 */
export declare function decode(token: string): IPayload | string;
export declare function extractToken(req: Request): string;
