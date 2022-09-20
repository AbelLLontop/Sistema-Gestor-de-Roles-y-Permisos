import { IDAOFactory } from "../../domain/services/IDaoFactory";
import { PrismaDaoFactory } from "./PrismaDaoFactory";

export const DAOFactoryConcrete:IDAOFactory = new PrismaDaoFactory()