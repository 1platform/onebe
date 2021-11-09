import passport from "passport";
import IPayload from "./IPayload";
import { IUser } from "./IUser";
export interface IInitStrategyOptions {
    serializeUser?: (user: IUser) => IPayload;
    deserializeUser?: (payload: IPayload, done: (err: any, user?: IUser) => void) => void;
    basicAuth?: (username: string, password: string, done: (err: any, user?: IUser) => void) => void;
}
export default function initPassportStrategy(props: IInitStrategyOptions): void;
export { passport };
