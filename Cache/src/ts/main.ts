import * as _ from "lodash";
import { Database } from "./Database";

document.addEventListener("DOMContentLoaded", async function (event) {
  console.log("calling main()");
  await main();
});

export async function main() {
  document
    .getElementById("save")
    .addEventListener("click", async (event: MouseEvent) => {
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
    });
}
