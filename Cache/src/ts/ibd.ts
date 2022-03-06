import { openDB, DBSchema, deleteDB, wrap, unwrap, IDBPDatabase } from 'idb';

interface MyDBV2 extends DBSchema {
    'my-test-pair': { key: string, value: string };
}

class MyIndexDB {
    private version: number;
    private storeName: string = "my-test-pair";
    private dbPromise : any;

    constructor() {
        this.version = 1;
        this.dbPromise = openDB(this.storeName, this.version, {  
        });

    }

    async addKeyValue(key: string, value: string) {
        // var x = await openDB(this.storeName, this.version, {
            
        // })
        await this.dbPromise
            .then(async (result) => {
                const tx = result.transaction('my-test-pair', 'readwrite');
                console.log("trying....");
                await result
                    .add("my-test-pair", value, key)
                    .then(result => { console.log('success', result) })
                    .catch(err => { console.error(err) })
                    // .finally()
            })
            .catch(err => { console.error(err) })
            // .finally();
        

            console.info("database created");
    }


}

export { MyIndexDB };