import { MainEntity } from "src/entities/main.entity";

export interface IModel<
  T extends MainEntity<K>,
  K extends String | Number = number
> {}
