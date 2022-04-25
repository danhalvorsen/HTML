import { ChecklistDetailsIndexes } from "../../../database/Index";
import { db } from "../../../database/mcAppDatabase";
import { IChecklistDetails } from "../../../mockRoutes/api.types";
import { BaseRepository } from "./Repository";

export class ChecklistDetailsRepository {
// extends BaseRepository<IChecklistDetails> {
    constructor() {
      
    }

    async getById(id : number) : IChecklistDetails {
        var result = await db.checklistDetails.where('id').equals(id).first();
        

    }

  }