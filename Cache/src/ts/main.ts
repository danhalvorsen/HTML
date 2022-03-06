import { openDB } from 'idb';
import * as _ from 'lodash';
import { MyIndexDB } from '../ts/ibd'

//Execute the program when the DOM is read and loaded
window.addEventListener('load', (event) => {
    main();
   
});


const storeName: string = "my-test-pair";

export async function main() {
    console.info("Hi localdb");


    const dbPromise = await openDB('db1', 1, {
        upgrade(dbPromise) {
            dbPromise.createObjectStore("mystore");
        }
    });

    const db1 = await openDB("db1", 1);
    db1.add("mystore", "test", "key");
    db1.close();
   
    
}