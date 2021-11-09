declare global {
    namespace Express {
        interface User {
            id: any;
        }
        interface Request {
            user?: User;
            pageURL?: string;
            appURL?: string;
            sysConfig?: Record<string, string | number | boolean | null>;
            version?: string;
        }
    }
}
export declare const custom = "";
