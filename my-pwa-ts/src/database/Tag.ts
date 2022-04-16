/************* Domain object ****************************************/

import { IAdditionalTagField, ITag, ITagDetails } from "../mockRoutes/api.types";
import { db } from "./mcAppDatabase";
import { TagIndexes } from "./TagIndex";
 

/* Objects that falls into this  category is mainly used as entity in 
the database. The domain objects implements the type definition IFoo. 
The domain object should be the location for front-end business rules. 
(Front-end Biz.rules should normally be executed in the backend domain, and we will not 
challenge that within the new offline feature) */
export class Tag  {
  _indexes: TagIndexes | undefined;
  _tagDetails : ITagDetails | undefined;
  _tag: ITag | undefined;

  public constructor(tag: ITag, tagDetails: ITagDetails, indexes: TagIndexes ) {
    this._tag = tag;
    this._indexes = indexes;
    this._tagDetails = tagDetails;
  }
 
  
  log() {
    console.log(JSON.stringify(this));
  }
}

// export interface ITagIndexes {
//   tag: ITagDetails;
//   additionalFields: IAdditionalTagField[];
// }
