import { openDB } from "idb";
import * as _ from "lodash";
import { Database } from "./Database";

//Execute the program when the DOM is read and loaded
window.addEventListener("load", (event) => {
  main();
});

const storeName: string = "my-test-pair";

export async function main() {
  var database = new Database();

  await database.CreateDatabase();
  await database.Add("key1", "Dan");

}
