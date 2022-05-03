import { Dexie } from 'dexie';
import { IChecklistDetails } from "../../../mockRoutes/api.types";

var all = Dexie.Promise.all;

export const JoinChecklistAndTag = async function (id: number, tagId: number)//Promise<IChecklistDetails[]> 
{
  console.log("Hey! Soon ready!");
};