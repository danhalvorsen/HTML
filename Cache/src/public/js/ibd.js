"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyIndexDB = void 0;
const idb_1 = require("idb");
class MyIndexDB {
    constructor() {
        this.storeName = "my-test-pair";
        this.version = 1;
    }
    async addKeyValue(key, value) {
        var x = await (0, idb_1.openDB)(this.storeName, this.version)
            .then((result) => {
            result
                .add("my-test-pair", value, key)
                .then(result => { console.log('success', result); })
                .catch(err => { console.error(err); });
            // .finally()
        })
            .catch(err => { console.error(err); });
        // .finally();
    }
}
exports.MyIndexDB = MyIndexDB;
//# sourceMappingURL=ibd.js.map