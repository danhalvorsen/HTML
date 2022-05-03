import { ChecklistDetails } from "../../../database/ChecklistDetails";
import { db } from "../../../database/mcAppDatabase";

export class ChecklistDetailsRepository {
// extends BaseRepository<IChecklistDetails> 
    async getById(id : number) : Promise<ChecklistDetails> {

        let result =  await db.checklistDetails.where('id').equals(id).first();
        return result as ChecklistDetails;

    }
  }