import { openDB, DBSchema, deleteDB, wrap, unwrap, IDBPDatabase } from 'idb';

interface MyDBV2 extends DBSchema {
    'my-test-pair': { key: string, value: string };
}

class MyIndexDB {
    private version: number;
    private storeName: string = "my-test-pair";

    constructor() {
        this.version = 1;
    }

    async addKeyValue(key: string, value: string) {
        var x = await openDB(this.storeName, this.version)
            .then((result) => {
                result
                    .add("my-test-pair", value, key)
                    .then(result => { console.log('success', result) })
                    .catch(err => { console.error(err) })
                    // .finally()
            })
            .catch(err => { console.error(err) })
            // .finally();
        
    }


}

export { MyIndexDB };