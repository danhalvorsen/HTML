import Dexie, { Table } from 'dexie';
import { IMcPkgPreview, ITagDetails, IAdditionalTagField  } from '../mockRoutes/api.types';
import Tag, { KeyTag } from './Tag';

/* ---- Optimized index objects for database ---- */
// export type KeyMcPkgPreview = Pick<IMcPkgPreview, 'id'| 'mcPkgNo'>;
// type KeyTag = Pick<ITagDetails, 'id' | 'tagNo' | 'commPkgNo' | 'mcPkgNo' > & 
//   {additionalFields: Pick<IAdditionalTagField, 'id'|'label'>[]}

export default class SomethingDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  // mcPkgPreview!: Table<KeyMcPkgPreview>;
  tag!: Table<Tag>;

  constructor() {
    super('mcAppDatabase');
    this.version(1).stores({
      tag: 'id, tagNo, commPkgNo, mcPkgNo',
    });
  }
}

export const db = new SomethingDexie();

