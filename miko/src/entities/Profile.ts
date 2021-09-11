import { Entity, Column, Index, BeforeInsert, ManyToOne, JoinColumn } from "typeorm";
import { Length } from "class-validator";
import { v4 as uuidv4 } from "uuid";

import BaseModel from "./BaseModel";
import { ProfileType } from "../enums/profileType";
import { Shape } from "../enums/Shape";
import { Layout } from "../enums/Layout";
import { BackgroungType } from "../enums/backgroundType";
import User from "./User";

type Social = {
  icon: string;
  link: string;
  alt: string;
};
@Entity("profiles")
export default class Profile extends BaseModel {
  constructor(profile: Partial<Profile>) {
    super();
    Object.assign(this, profile);
  }

  @Column({ type: "uuid", unique: true })
  @Index()
  profileId: string;

  @Index()
  @Length(3, 255, { message: "Must be at least 3 characters long" })
  @Column({ unique: true })
  displayname: string;

  @Length(3, 1000, { message: "Must be at least 3 characters long" })
  @Column({ type: "text" })
  bio: string;

  @Column({
    default: "https://via.placeholder.com/200/000000/FFFFFF/?text=LL",
    type: "text",
  })
  imgUrl: string;

  @Column({ type: "enum", default: ProfileType.UNPUBLISHED, enum: ProfileType })
  visibility: string;

  @Column({ type: "simple-array", default: [] })
  social: Social[];

  @Column({ type: "simple-array", default: [] })
  tabs: string[];

  @Column({ type: "text", default: "" })
  customCss: string;

  @Column({ type: "enum", default: Shape.CIRCLE, enum: Shape })
  avatarShape: string;

  @Column({ type: "enum", default: Layout.LEFT_ALLIGNED, enum: Layout })
  profileLayout: string;

  @Column({ type: "enum", default: BackgroungType.COLOR, enum: BackgroungType })
  coverType: string;

  @Column({ type: "boolean", default: true })
  coverVisible: boolean;

  @Column({ default: "#000000", type: "text" })
  cover: string;

  @Column({ type: "boolean", default: false })
  aboutPageVisible: boolean;

  @Column({ type: "numeric", default: 0 })
  views: number;

  @Column({ type: "boolean", default: false })
  isVerified: boolean;

  @ManyToOne(() => User, (user) => user.profiles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "creatorId" })
  user: User;

  @BeforeInsert()
  generateProfileId() {
    this.profileId = uuidv4();
  }
}
