import { openDB, deleteDB, wrap, unwrap } from 'idb';

async function doDatabaseStuff(key) : Promise<string> {
    const storeName : string = "RequestResponses.db";
    const store = await openDB(storeName);
    const value = await store.get(storeName, key);
    return value;
}