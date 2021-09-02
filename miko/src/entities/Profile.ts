import { Entity, Column, Index, BeforeInsert } from "typeorm";
import { Length } from "class-validator";
import { v4 as uuidv4 } from "uuid";

import BaseModel from "./BaseModel";
import { ProfileType } from "../enums/profileType";

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
  display: string;

  @Length(3, 1000, { message: "Must be at least 3 characters long" })
  @Column({ type: "linestring" })
  bio: string;

  @Column({ default: "https://via.placeholder.com/200/000000/FFFFFF/?text=LL" })
  imgUrl: string;

  @Column({ default: ProfileType.UNPUBLISHED, enum: ProfileType })
  visibility: string;

  @Column({ default: false, type: "boolean" })
  isActive: boolean;

  @Column({ default: false, type: "boolean" })
  isVerified: boolean;

  @BeforeInsert()
  generateProfileId() {
    this.profileId = uuidv4();
  }
}
