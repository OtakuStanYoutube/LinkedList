import { IUser } from "./@types/User";

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
  }
}
