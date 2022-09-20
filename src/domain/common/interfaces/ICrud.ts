export interface ICrud<T> {
  create(item: T): Promise<T|null>;
  readById(id: number): Promise<T|null>;
  read():Promise<T[]|null>
  update(id: number, item: T): Promise<T|null>;
  delete(id: number): Promise<T|null>;
}
