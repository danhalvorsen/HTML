 
import * as _ from 'lodash';
import { Console } from "./console";

import { FakerTag } from '../../my-pwa-ts/src/mockRoutes/faker';
import TagTesting from './AddTagData.test';

const appDiv: HTMLElement = document.getElementById("app") as HTMLElement;

// ===================================
// Bootstrapping
// Add a console element
// ===================================

appDiv.innerHTML = `<h1>Dexie Lovers TypeScript Demo</h1>
<div id="consoleArea"></div>`

const console = new Console();
const consoleArea = document.getElementById("consoleArea") as HTMLDivElement;
consoleArea.appendChild(console.textarea);

// Test it:
console.log("Hello Dexie Lovers!");
console.log("==================\n");

const testingTag = new TagTesting();
await testingTag.clean(console).then(() => console.log("Database deleted"));
var tagSource = FakerTag();
await testingTag.persistTag(tagSource);
var queriedTags = await testingTag.queryTag(tagSource.tag.id);
console.log(`QueryResult:${queriedTags.length} Id:${queriedTags[0].id}`);
console.log("==================\n");





 


