export {};

declare global {
  namespace Express {
    interface User {
      _id: string;
    }
    export interface Request {
      user?: User;
    }
  }
}
