import { IDAOFactory } from "../../domain/services/IDaoFactory";
import { HandleResponse } from "../Response/HandleResponse";

export abstract class UseCase {
  protected daoFactory: IDAOFactory;
  constructor(daoFactory: IDAOFactory) {
    this.daoFactory = daoFactory;
  }
  public abstract exect(...args: any): Promise<HandleResponse>;
}
