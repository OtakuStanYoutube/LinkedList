import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  imgUrl: string;
  oauthId?: string;
  isAdmin?: boolean;
  tokenNumber: number;
  activeProfile: string;
  matchPassword: (password: string) => string;
}
