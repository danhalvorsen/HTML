import { db } from "../../../database/mcAppDatabase";
import { IChecklistDetails } from "../../../mockRoutes/api.types";
import { BaseRepository } from "./Repository";

export class ChecklistDetailsRepository extends BaseRepository<IChecklistDetails> {
    constructor() {
      var table = db.tables.find((t) => t.name === "checklistDetails");
      console.log(`Database:${db.name} is: ${db.isOpen() ? "open" : "closed"}`);
      console.log(`ChecklistDetailsRepository giving dixie table:${table} to baseRepository`);
      super(table);
    }
  }