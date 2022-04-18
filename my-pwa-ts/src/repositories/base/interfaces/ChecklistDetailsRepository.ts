import { db } from "../../../database/mcAppDatabase";
import { BaseRepository } from "./baseRepository";
import { IChecklistDetails } from "../../../mockRoutes/api.types";
import { ChecklistDetails } from "../../../database/ChecklistDetails";

export class ChecklistDetailsRepository extends BaseRepository<IChecklistDetails, ChecklistDetails> {
    constructor() {
      var table = db.tables.find((t) => t.name === "checklistDetails");
      console.log(`Database:${db.name} is: ${db.isOpen() ? "open" : "closed"}`);
      console.log(`ChecklistDetailsRepository giving dixie table:${table} to baseRepository`);
      super(table);
    }
  }