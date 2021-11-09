declare global {
  namespace Express {
    export interface User {
      id: any;
    }

    export interface Request {
      user?: User;
      pageURL?: string;
      appURL?: string;
      sysConfig?: Record<string, string | number | boolean | null>;
      version?: string;
    }
  }
}

export const custom = "";
