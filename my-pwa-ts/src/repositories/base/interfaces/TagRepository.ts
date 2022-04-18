// import { TagIndexes } from "../../../database/TagIndex";

import { db } from "../../../database/mcAppDatabase";
import { Tag } from "../../../database/Tag";
import { ITag } from "../../../mockRoutes/api.types";
import { BaseRepository } from "./baseRepository";

export class TagRepository extends BaseRepository<ITag, Tag> {

  constructor() {
    var table = db.tables.find((t) => t.name === "tags");
    console.log(`Database:${db.name} is: ${db.isOpen() ? "open" : "closed"}`);
    console.log(`TagRepository giving dixie table:${table} to baseRepository`);
    super(table);
  }
}
