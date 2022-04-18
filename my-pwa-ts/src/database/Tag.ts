/************* Domain object ****************************************/

import { ITag } from "../mockRoutes/api.types";
import { DomainObject } from "./DomainObject";

/* Objects that falls into this  category is mainly used as entity in 
the database. The domain objects implements the type definition IFoo. 
The domain object should be the location for front-end business rules. 
(Front-end Biz.rules should normally be executed in the backend domain, and we will not 
challenge that within the new offline feature) */
export class Tag implements DomainObject<ITag> {
   _data: ITag;

  public constructor(data: ITag) {
    this._data = data;
  }

  data() : ITag {
    return this._data;
  }
 
  log() {
    console.log(JSON.stringify(this));
  }
}

