/************* Domain object ****************************************/

import { inherits } from "util";

import {
  IAdditionalTagField,
  ITag,
  ITagDetails,
} from "../mockRoutes/api.types";
import { db } from "./mcAppDatabase";
import TagIndex from "./TagIndex";

/* Objects that falls into this  category is mainly used as entity in 
the database. The domain objects implements the type definition IFoo. 
The domain object should be the location for front-end business rules. 
(Front-end Biz.rules should normally be executed in the backend domain, and we will not 
challenge that within the new offline feature) */
export class Tag extends TagIndex implements ITag {
  tag: ITagDetails;
  additionalFields: IAdditionalTagField[];
  
  public constructor(tag: ITag) {
    super(tag);
    this.tag = tag.tag;
    this.additionalFields = tag.additionalFields;
  }
  log() {
    console.log(JSON.stringify(this));
  }

  insert(): boolean {
    return true;
  }

  async query(id: number): Promise<Array<TagIndex>> {
    console.log("querying the database...");
    db.tag.mapToClass(Tag);
    var result = await db.tag.where("id").equals(id).toArray();
    return result;
  }

  async persist(tag: ITag) {
    console.log("Persisting tag to database...");
    await db.transaction("rw", db.tag, async () => {
      await db.tag.add(this);
    });
  }

  async get(id: number) {
    if (typeof id === "number") {
      await db.tag.where("id").equals(id);
    } else if (typeof id === "string") {
      await db.tag.where("tagNo").equals(id);
    }
  }

  public equals(other: ITag): boolean {
    return (
      this.id === other.tag.id &&
      this.tagNo === other.tag.tagNo &&
      this.commPkgNo === other.tag.commPkgNo &&
      this.mcPkgNo === other.tag.mcPkgNo
    );
  }

  //helper
  async clean(): Promise<void> {
    await db.tag.clear();
    console.log("Clearing database...");
    await db.delete();
    await db.open();
    await Promise.all([db.tag.clear()]);
  }
}
