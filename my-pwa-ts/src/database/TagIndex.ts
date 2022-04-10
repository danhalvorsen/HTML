import { IndexableType  } from "dexie";
import { ITagDetails, IAdditionalTagField } from "../mockRoutes/api.types";

export type TagIndexes = Pick<ITagDetails, "id" | "tagNo" | "commPkgNo" | "mcPkgNo"> & 
{ additionalFields: Pick<IAdditionalTagField, "id" | "label">[];} & IndexableType;