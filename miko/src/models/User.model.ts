import { model, Schema } from "mongoose";
import { IUser } from "../@types/User";

import { hash, verify } from "argon2";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await verify(enteredPassword, this.password);
};

userSchema.pre("save", async function (this: IUser, next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password);
});

export const User = model<IUser>("User", userSchema);
