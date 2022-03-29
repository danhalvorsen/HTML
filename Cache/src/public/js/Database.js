"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const idb_1 = require("idb");
const dbName = "db1";
const storeName = "mystore";
class Database {
    async CreateDatabase() {
        await (0, idb_1.openDB)(dbName, 1, {
            upgrade(dbPromise) {
                dbPromise.createObjectStore(storeName);
            },
        })
            .then((result) => { console.log("success!", result); })
            .catch((err) => { console.error("error: ", err); })
            .finally();
    }
    async Add(key, value) {
        console.log("insert data");
        const dbPromise = await (0, idb_1.openDB)(dbName, 1);
        dbPromise
            .add(storeName, value, key)
            .then((result) => {
            console.log("success!", result);
        })
            .catch((err) => {
            console.error("error: ", err);
        });
        dbPromise.close();
    }
    async Exist(key) {
        const dbPromise = await (0, idb_1.openDB)(dbName, 1);
        dbPromise
            .get(storeName, key)
            .then((value) => {
            value.length > 0 ? true : false;
        })
            .catch((err) => {
            console.error("error: ", err);
            return false;
        });
        return false;
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map