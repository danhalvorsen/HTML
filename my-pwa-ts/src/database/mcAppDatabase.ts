import Dexie, { Table } from 'dexie';
import { ITag } from '../mockRoutes/api.types';
import { ChecklistDetailsIndexes, TagIndexes } from './Index';
import { Tag } from './Tag';

export default class SomethingDexie extends Dexie {

  public readonly dbName: string = 'mcAppDatabase'
  tags!: Table<Tag, TagIndexes>;
  checklistDetails!: Table<ChecklistDetailsIndexes>;

  constructor() {
    super('mcAppDatabase');
    this.version(1).stores({
      tags: "tag.id, tag.tagNo, tag.commPkgNo, tag.mcPkgNo",
      checklistDetails: "id, tagId, mcPkgNo"
    });
    this.tags.mapToClass(Tag);
  }
}

export const db = new SomethingDexie();

