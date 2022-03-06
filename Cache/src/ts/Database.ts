import { openDB } from "idb";

const dbName: string = "db1";
const storeName: string = "mystore";

export class Database {

  async CreateDatabase(): Promise<void> {
    await openDB(dbName, 1, {
      upgrade(dbPromise) {
        dbPromise.createObjectStore(storeName);
      },
    })
    .then()
    .catch()
    .finally();
  }

  async Add(key: string, value: string): Promise<void> {

    if(!this.Exist(key,value))
    {
      const dbPromise = await openDB(dbName, 1);
      dbPromise.add(storeName, value, key)
      .then(result => {
        console.log('success!', result);
      })
      .catch(err => {
        console.error('error: ', err);
      });
      dbPromise.close();
    }
    else
    {
      let keyValue = {key: key, value: value};
      var keyValueStringify = JSON.stringify(keyValue);
      console.log(`key-value already exists in database ${keyValueStringify} `);
    }
  }

  async Exist(key: string, value: string, ) : Promise<boolean> {
    const dbPromise = await openDB(dbName, 1);
    dbPromise.get(key,value)
      .then(() => { true;})
      .catch(()=>{ console.log})
    
      return false;
  }
}