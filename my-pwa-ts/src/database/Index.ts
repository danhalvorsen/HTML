import { ITag, IChecklistDetails } from "../mockRoutes/api.types";

// export type Index = IndexableType;
// export type TagIndexes = Pick<ITagDetails, "id" | "tagNo" | "commPkgNo" | "mcPkgNo"> & 
// { additionalFields: Pick<IAdditionalTagField, "id" | "label">[];};

export type TagIndexes = Pick<ITag["tag"], "id" | "tagNo" | "commPkgNo" | "mcPkgNo">;
 
export type ChecklistDetailsIndexes = Pick<IChecklistDetails, "id" | "tagId" |"mcPkgNo">;

// export type IndexableTypeArrayReadonly2 = ReadonlyArray<IndexableTypePart2>;
// export type IndexableTypePart2 = string & number & Date & ArrayBuffer & ArrayBufferView & DataView & Array<Array<void>>;
// export type IndexableTypeArray2 = Array<IndexableTypePart2>;
// export type IndexableType2 = IndexableTypePart2 & IndexableTypeArrayReadonly;
// export interface ITagExtended extends IndexableType2 
// {}