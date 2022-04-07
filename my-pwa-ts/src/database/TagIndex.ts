import {
  ITagDetails,
  IAdditionalTagField,
  ITag,
} from "../mockRoutes/api.types";

type KeyTag = Pick<ITagDetails, "id" | "tagNo" | "commPkgNo" | "mcPkgNo"> & {
  additionalFields: Pick<IAdditionalTagField, "id" | "label">[];
};

export default class TagIndex implements KeyTag {
  id: number;
  tagNo: string;
  commPkgNo: string;
  mcPkgNo: string;
  additionalFields: Pick<IAdditionalTagField, "id" | "label">[];

  constructor(object: ITag) {
    this.id = object.tag.id;
    this.tagNo = object.tag.tagNo;
    this.commPkgNo = object.tag.commPkgNo;
    this.mcPkgNo = object.tag.mcPkgNo;
    this.additionalFields = object.additionalFields;
  }
}
