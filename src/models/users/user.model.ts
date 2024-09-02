import { UserEntity } from "src/entities/user.entity";
import { Model } from "../model";

export class UserModel extends Model<UserEntity, string> {
  constructor() {
    super(new UserEntity(), "users");
  }
}
