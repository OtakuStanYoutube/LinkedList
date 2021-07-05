import { model, Schema } from "mongoose";
import { IToken } from "../@types/Token";

const TokenSchema = new Schema<IToken>({
  userId: {
    type: String,
    required: true,
    default: "",
  },
  token: {
    type: String,
    required: true,
    default: "",
  },
});

export const Token = model<IToken>("Token", TokenSchema);
