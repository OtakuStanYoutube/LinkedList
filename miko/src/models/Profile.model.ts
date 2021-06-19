import { model, Schema } from "mongoose";
import { IProfile } from "../@types/Profile";

const profileSchema = new Schema<IProfile>({
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    required: false,
    default: "",
  },
  imgUrl: {
    type: String,
    required: true,
    default: "https://via.placeholder.com/200/000000/FFFFFF/?text=LL",
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  social: [
    {
      icon: String,
      link: String,
      alt: String,
    },
  ],
  visibility: {
    type: String,
    default: "unpublished",
    required: true,
    enum: ["unpublished", "published", "published-18+"],
  },
  custom_css: String,
  custom_html: String,
  theme: {
    type: Schema.Types.ObjectId,
    ref: "Theme",
    required: false,
  },
  views: {
    type: Number,
    required: false,
    default: 0,
  },
});

export const Profile = model<IProfile>("Profile", profileSchema);
