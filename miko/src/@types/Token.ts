import { Document } from "mongoose";

export interface IToken extends Document {
    userId: string;
    token: string;
}
