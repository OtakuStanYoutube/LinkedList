import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  bio?: string;
  imgUrl: string;
  isAdmin?: boolean;
  matchPassword: (password: string) => string;
}
