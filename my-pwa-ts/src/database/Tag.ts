/************* Domain object ****************************************/

import { IAdditionalTagField, ITag, ITagDetails } from "../mockRoutes/api.types";
import { db } from "./mcAppDatabase";
 

/* Objects that falls into this  category is mainly used as entity in 
the database. The domain objects implements the type definition IFoo. 
The domain object should be the location for front-end business rules. 
(Front-end Biz.rules should normally be executed in the backend domain, and we will not 
challenge that within the new offline feature) */
export class Tag implements ITag {
  tag: ITagDetails;
  additionalFields: IAdditionalTagField[];
  
  public constructor(tag: ITag) {
    this.tag = tag.tag;
    this.additionalFields = tag.additionalFields;
  }
  log() {
    console.log(JSON.stringify(this));
  }
 

  // //helper
  // async clean(): Promise<void> {
  //   await db.tag.clear();
  //   console.log("Clearing database...");
  //   await db.delete();
  //   await db.open();
  //   await Promise.all([db.tag.clear()]);
  // }
}
