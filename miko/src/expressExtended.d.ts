export {};

declare global {
  namespace Express {
    interface User {
      userID: string;
    }
    export interface Request {
      user?: User;
    }
  }
}
