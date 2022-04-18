import Dexie, { Table } from 'dexie';
import { ChecklistDetailsIndexes, TagIndexes } from './Index';
// import TagIndex  from './TagIndex';

/* ---- Optimized index objects for database ---- */
// export type KeyMcPkgPreview = Pick<IMcPkgPreview, 'id'| 'mcPkgNo'>;
// type KeyTag = Pick<ITagDetails, 'id' | 'tagNo' | 'commPkgNo' | 'mcPkgNo' > & 
//   {additionalFields: Pick<IAdditionalTagField, 'id'|'label'>[]}

export default class SomethingDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  // mcPkgPreview!: Table<KeyMcPkgPreview>;
  tags!:Table<TagIndexes>;
  checklistDetails!:Table<ChecklistDetailsIndexes>;
  
  constructor() {
    super('mcAppDatabase');
    this.version(1).stores({
      tags: "tag.id, tag.tagNo, tag.commPkgNo, tag.mcPkgNo",
      checklistDetails: "id, tagId, mcPkgNo"
    });
    
  }
}

export const db = new SomethingDexie();

