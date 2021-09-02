import { Entity, Column } from "typeorm";
import BaseModel from "./BaseModel";

@Entity("users")
export default class User extends BaseModel {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Column()
  userName: string;
}
