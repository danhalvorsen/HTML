"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const Database_1 = require("./Database");
const DatabaseKeyGenerator_1 = require("./DatabaseKeyGenerator");
document.addEventListener("DOMContentLoaded", async function (event) {
    console.log("calling main()");
    await main();
});
async function main() {
    document
        .getElementById("save")
        .addEventListener("click", async (event) => {
        console.log("save pressed");
        //var key = document.getElementById("key").innerText;
        var key = document.getElementById("key").value;
        if (key.length > 5) {
            console.log("data preset");
        }
        var value = document.getElementById("value").value;
        console.log(`Maybe some data:`, key.toString() + " " + value.toString());
        var database = new Database_1.Database();
        await database.CreateDatabase();
        await database.Add(key, value);
        var databaseKeyGenerator = new DatabaseKeyGenerator_1.DatabaseKeyGenerator();
        await databaseKeyGenerator.CreateDatabase();
        await databaseKeyGenerator.Add(new DatabaseKeyGenerator_1.Value());
    });
}
exports.main = main;
//# sourceMappingURL=main.js.map