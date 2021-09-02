import { Entity, Column, Index, BeforeInsert } from "typeorm";
import { Exclude } from 'class-transformer';
import { IsEmail, Length } from 'class-validator';
import { hash } from "argon2";

import BaseModel from "./BaseModel";

@Entity("users")
export default class User extends BaseModel {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

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

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password);
  }
}
