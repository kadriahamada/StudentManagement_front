export class MainEntity<T extends String | Number = number> {
  id: T;
  createdAt: Date;
  cretedBy: string;
  updatedDate: Date;
  updatedBy: string;
  deletedDate: Date;
  deletedBy: string;
  isActive: 0 | 1;
}
