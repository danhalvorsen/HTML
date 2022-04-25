
import { IAdditionalTagField, ITag, ITagDetails } from "../mockRoutes/api.types";

export class Tag implements ITag {
  tag!: ITagDetails;
  additionalFields!: IAdditionalTagField[];
}
