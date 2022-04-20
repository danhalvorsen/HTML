import { db } from "../../../database/mcAppDatabase";
import { ITag } from "../../../mockRoutes/api.types";
import { BaseRepository } from "./Repository";

export class TagRepository extends BaseRepository<ITag> {

  constructor() {
    var table = db.tables.find((t) => t.name === "tags");
    console.log(`Database:${db.name} is: ${db.isOpen() ? "open" : "closed"}`);
    console.log(`TagRepository giving dixie table:${table} to baseRepository`);
    super(table);
  }
}
