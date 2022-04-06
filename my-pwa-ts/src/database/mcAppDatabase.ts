import Dexie, { Table } from 'dexie';
import { IMcPkgPreview, ITagDetails, ITagPreview, ITag  } from '../mockRoutes/api.types';

/* ---- Optimized index objects for database ---- */
export type KeyMcPkgPreview = Pick<IMcPkgPreview, 'id'| 'mcPkgNo'>;
type KeyTagPreview = Pick<ITagPreview, 'id'| 'tagNo'>;
type KeyTagDetails = Pick<ITagDetails, 'id'| 'tagNo'| 'commPkgNo' | 'mcPkgNo' | 'tagFunctionCode'>;
type KeyTag = Pick<ITag, 'tag'>

export default class SomethingDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  mcPkgPreview!: Table<KeyMcPkgPreview>;
  tag!: Table<KeyTag>;

  constructor() {
    super('mcAppDatabase');
    this.version(1).stores({
      mcPkgPreview: 'id, mcPkgNo', // Primary key and indexed props
      tag: 'id, tagNo, commPkgNo, mcPkgNo',
    });
  }
}

export const db = new SomethingDexie();

