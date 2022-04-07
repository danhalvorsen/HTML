import { FakerTag } from "./../../my-pwa-ts/src/mockRoutes/faker";
import { db } from "../../my-pwa-ts/src/database/mcAppDatabase";
import { Console } from "./console";
import Tag from "../../my-pwa-ts/src/database/Tag";
import { ITag } from "../../my-pwa-ts/src/mockRoutes/api.types";

export default class TagTesting {
  constructor() {
    console.log("Inside insert data to database object");
  }

  async persistTag(tag : ITag) : Promise<void> {
    var potentialTag = new Tag(tag);
    await potentialTag.persistTag(tag);
  }
   
  async queryTag(id : number|string) : Promise<Array<Tag>>
  {
      return await db.tag.where('id').equals(id).toArray();
  }

  async clean(console: Console): Promise<void> {
    console.log("Clearing database...");
    await db.delete();
    await db.open();
    await Promise.all([db.tag.clear()]);
  }
}

 
