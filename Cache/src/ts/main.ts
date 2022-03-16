import * as _ from "lodash";
import { Database } from "./Database";
import { DatabaseKeyGenerator, Value } from "./DatabaseKeyGenerator";

document.addEventListener("DOMContentLoaded", async function (event) {
  console.log("calling main()");
  await main();
});

export async function main() {
  document
    .getElementById("save")
    .addEventListener("click", async (event: Event) => {
      console.log("save pressed");

      //var key = document.getElementById("key").innerText;
      var key = (<HTMLInputElement>document.getElementById("key")).value;

      if (key.length > 5) {
        console.log("data preset");
      }
      var value = (<HTMLInputElement>document.getElementById("value")).value;
      console.log(`Maybe some data:`, key.toString() + " " + value.toString());
      var database = new Database();
      await database.CreateDatabase();
      await database.Add(key, value);

      var databaseKeyGenerator = new DatabaseKeyGenerator();
      await databaseKeyGenerator.CreateDatabase();
      await databaseKeyGenerator.Add(new Value())
    });
}
