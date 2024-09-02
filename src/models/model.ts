import { dbInstance } from "src/db/connection";
import { MainEntity } from "src/entities/main.entity";
import { IModel } from "src/interfaces/Model.interface";

export class Model<T extends MainEntity<K>, K extends String | Number = number>
  implements IModel<T, K>
{
  public entity;
  private db;
  constructor(entity: T, private table) {
    this.entity = entity;
    this.db = dbInstance;
    this.table = table;
  }
}
