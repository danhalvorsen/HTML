import { openDB } from "idb";
import axios from 'axios';
import {Md5} from 'ts-md5/dist/md5';

const dbName: string = "db2";
const storeName: string = "mystorewithautogeneratedkeys";


export class Value {

    /**
     *
     */
    constructor() {
        this.request = new Request();
        this.request.request = axios.get("http://www.vg.no", ).toString();
        this.request.hash = Md5.hashStr(this.request.request);   
        
        this.response = "data";
    }
    request : Request; 
    response : string;
}

class Request {
    request : string; 
    hash: string;

    buildHash(request : string) : number
    {
        return 112;
    }
}

export class DatabaseKeyGenerator {
    async CreateDatabase(): Promise<void> {
      await openDB(dbName, 1, {
        upgrade(dbPromise) {
          dbPromise.createObjectStore(storeName, { keyPath: "request.hash", autoIncrement: true });
        },
      })
        .then((result) => { console.log("success!", result);})
        .catch((err) => {console.error("error: ", err);})
        .finally();
    }
    async Add(value: Value): Promise<void> {
        console.log("insert data");
        const dbPromise = await openDB(dbName, 1);
        dbPromise
          .add(storeName, value)
          .then((result) => {
            console.log("success!", result);
          })
          .catch((err) => {
            console.error("error: ", err);
          });
        dbPromise.close();
      }
}