import {expect, jest, test, describe} from '@jest/globals';
import { MyIndexDB } from '../ts/ibd'
import { openDB, DBSchema, deleteDB, wrap, unwrap, IDBPDatabase } from 'idb';


describe("My Database", () => {
    test("Should be able to add key/value pair to database", () => {
        var db = new MyIndexDB();
        db.addKeyValue("foo", "bar");
    });
});