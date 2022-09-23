import { IDAOFactory } from "../../application/services/IDaoFactory";
import { PrismaDaoFactory } from "./PrismaDaoFactory";

export const DAOFactoryConcrete:IDAOFactory = new PrismaDaoFactory()