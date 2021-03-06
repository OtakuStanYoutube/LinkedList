import { model, Schema } from "mongoose";
import { IUser } from "../@types/User";

import { hash, verify } from "argon2";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    oauthId: {
      type: String,
      required: false,
      default: "",
    },
    imgUrl: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/200/000000/FFFFFF/?text=LL",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    tokenId: {
      type: String,
      required: false,
      default: "",
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    activeProfile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true },
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await verify(this.password, enteredPassword);
};

userSchema.pre("save", async function (this: IUser, next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password);
});

export const User = model<IUser>("User", userSchema);
