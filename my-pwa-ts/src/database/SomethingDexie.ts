import Dexie, { Table } from 'dexie';
import { ChecklistDetailsIndexes, TagIndexes } from './Index';
import relationships from "dexie-relationships";
import { ChecklistDetails } from './ChecklistDetails';
import { Tag } from './Tag';
 
export default class SomethingDexie extends Dexie {

  tags!:Table<Tag, TagIndexes>;
  checklistDetails!:Table<ChecklistDetails, ChecklistDetailsIndexes>;
  
  constructor() {
    super('mcAppDatabase', {addons: [relationships]});
    this.version(1).stores({
      tags: "tag.id, tag.tagNo, tag.commPkgNo, tag.mcPkgNo",
      checklistDetails: "id, tagId -> tags.id, mcPkgNo"
    });

    this.tags.mapToClass(Tag);
    this.checklistDetails.mapToClass(ChecklistDetails);
    
  }
}

export const db : SomethingDexie = new SomethingDexie();

