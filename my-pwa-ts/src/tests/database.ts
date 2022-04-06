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
      .then((result) => { console.log("success!", result);})
      .catch((err) => {console.error("error: ", err);})
      .finally();
  }

  async Add(key: string, response: Response): Promise<void> {
    console.log("insert data");
    const dbPromise = await openDB(dbName, 1);
    dbPromise
      .add(storeName, response, key)
      .then((result) => {
        console.log("success!", result);
      })
      .catch((err) => {
        console.error("error: ", err);
      });
    dbPromise.close();
  }

  async Exist(key: string): Promise<boolean> {
    const dbPromise = await openDB(dbName, 1);
    dbPromise
      .get(storeName, key)
      .then((value) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value.length > 0 ? true : false;
      })
      .catch((err) => {
        console.error("error: ", err);
        return false;
      });

    return false;
  }
}
