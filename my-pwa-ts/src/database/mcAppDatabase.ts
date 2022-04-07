import Dexie, { Table } from 'dexie';
import TagIndex  from './TagIndex';

/* ---- Optimized index objects for database ---- */
// export type KeyMcPkgPreview = Pick<IMcPkgPreview, 'id'| 'mcPkgNo'>;
// type KeyTag = Pick<ITagDetails, 'id' | 'tagNo' | 'commPkgNo' | 'mcPkgNo' > & 
//   {additionalFields: Pick<IAdditionalTagField, 'id'|'label'>[]}

export default class SomethingDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  // mcPkgPreview!: Table<KeyMcPkgPreview>;
  tag!:Table<TagIndex>;

  constructor() {
    super('mcAppDatabase');
    this.version(1).stores({
      tag: 'id, tagNo, commPkgNo, mcPkgNo',
    });
  }
}

export const db = new SomethingDexie();

