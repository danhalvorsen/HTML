"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseKeyGenerator = exports.Value = void 0;
const idb_1 = require("idb");
const axios_1 = require("axios");
const md5_1 = require("ts-md5/dist/md5");
const dbName = "db2";
const storeName = "mystorewithautogeneratedkeys";
class Value {
    /**
     *
     */
    constructor() {
        this.request = new Request();
        this.request.request = axios_1.default.get("http://www.vg.no").toString();
        this.request.hash = md5_1.Md5.hashStr(this.request.request);
        this.response = "data";
    }
}
exports.Value = Value;
class Request {
    buildHash(request) {
        return 112;
    }
}
class DatabaseKeyGenerator {
    async CreateDatabase() {
        await (0, idb_1.openDB)(dbName, 1, {
            upgrade(dbPromise) {
                dbPromise.createObjectStore(storeName, { keyPath: "request.hash", autoIncrement: true });
            },
        })
            .then((result) => { console.log("success!", result); })
            .catch((err) => { console.error("error: ", err); })
            .finally();
    }
    async Add(value) {
        console.log("insert data");
        const dbPromise = await (0, idb_1.openDB)(dbName, 1);
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
exports.DatabaseKeyGenerator = DatabaseKeyGenerator;
//# sourceMappingURL=DatabaseKeyGenerator.js.map