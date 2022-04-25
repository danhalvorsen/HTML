import { IAdditionalTagField, ITag, ITagDetails } from "../mockRoutes/api.types";
export class Tag implements ITag {

  tag: ITagDetails;
  additionalFields: IAdditionalTagField[];

  public constructor(data: ITag) {
    this.tag = data.tag,
      this.additionalFields = data.additionalFields;
  }

  log() {
    console.log(JSON.stringify(this));
  }
}

