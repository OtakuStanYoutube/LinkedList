import { IUser } from "./@types/User";

declare global {
  namespace Express {
    export interface Request {
      User: IUser;
    }
  }
}
