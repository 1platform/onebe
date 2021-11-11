import passport from "passport";
import IPayload from "./IPayload";
import IUser from "./IUser";
/**
 * Passport strategy initialisation method options.
 */
export interface IInitStrategyOptions {
    /**
     * The function used for User serialization.
     */
    serializeUser?: (user: IUser) => IPayload;
    /**
     * The function used for Payload deserialization.
     */
    deserializeUser?: (payload: IPayload, done: (err: any, user?: IUser) => void) => void;
    /**
     * The function used for basic authentication.
     */
    basicAuth?: (username: string, password: string, done: (err: any, user?: IUser) => void) => void;
}
/**
 * Passport strategies and serialization/deserialization initialisation function.
 *
 * @param props The properties passed to the init function.
 */
export default function initPassportStrategy(props: IInitStrategyOptions): void;
/**
 * The passport instance used throughout the framework.
 */
export { passport };
