import { Entity, Column, Index, BeforeInsert } from "typeorm";
import { Exclude } from "class-transformer";
import { IsEmail, Length } from "class-validator";
import { hash } from "argon2";
import { v4 as uuidv4 } from "uuid";

import BaseModel from "./BaseModel";
import { UserRole } from "../enums/userRole";

@Entity("users")
export default class User extends BaseModel {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Column({ type: "uuid", unique: true })
  @Index()
  userID: string;

  @Index()
  @IsEmail(undefined, { message: "Must be a valid email address" })
  @Length(1, 255, { message: "Email is empty" })
  @Column({ unique: true })
  email: string;

  @Index()
  @Length(3, 255, { message: "Must be at least 3 characters long" })
  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  @Length(6, 255, { message: "Must be at least 6 characters long" })
  password: string;

  @Column({ default: "" })
  oAuthId: string;

  @Column({ default: "" })
  tokenId: string;

  @Column({ default: "https://via.placeholder.com/200/000000/FFFFFF/?text=LL" })
  imgUrl: string;

  @Column({ default: UserRole.USER, enum: UserRole })
  role: string;

  @Column({ default: false, type: "boolean" })
  isActive: boolean;

  @Column({ default: false, type: "boolean" })
  isVerified: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.userID = uuidv4();
    this.password = await hash(this.password);
  }
}
