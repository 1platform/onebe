import passport from "passport";
import IPayload from "./IPayload";
import IUser from "./IUser";
/**
 * Definition of the Passport strategy initialization options.
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
 * Function used to initialise the passport strategies that are used in the application.
 *
 * This function will perform some initialisation calls for the serialization and
 * deserialization of the User object based on the Payload object. Also, it initialises
 * all the authentication methods exposed by the framework: bearer and basic.
 *
 * @param props The properties used to initialise the passport strategies.
 */
export default function initPassportStrategy(props: IInitStrategyOptions): void;
/**
 * Since we want to use only one passport instance throughout the application,
 * we export the passport instance used in the framework. To learn more about
 * this, go to: https://www.passportjs.org/. If you need additional authentication
 * methods, please create a new issue in GitHub.
 *
 * @link https://www.passportjs.org/
 */
export { passport };
