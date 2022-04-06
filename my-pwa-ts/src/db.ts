// db.ts
import Dexie, { Table } from 'dexie';
import { IPerson } from './mockRoutes/api.types';

export default class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<IPerson>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      friends: '++id, username, firstName' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();