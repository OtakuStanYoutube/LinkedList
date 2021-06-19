import { Document } from "mongoose";

export interface IProfile extends Document {
  handle: string;
  bio?: string;
  imgUrl: string;
  parent: string;
  social: {
    icon: string;
    link: string;
    alt: string;
  }[];
  visibility: string;
  customHTML: string;
  customCSS: string;
  theme: string;
  views: number;
}
