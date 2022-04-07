import * as _ from 'lodash';
import { Console } from "./console";
var equal = require('deep-equal');

import { FakerTag } from '../../my-pwa-ts/src/mockRoutes/faker';
import { Tag } from '../../my-pwa-ts/src/Database/tag';


const appDiv: HTMLElement = document.getElementById("app") as HTMLElement;

// ===================================
// Bootstrapping
// Add a console element
// ===================================

appDiv.innerHTML = `<h1>Database tests</h1>
<div id="consoleArea"></div>`

const console = new Console();
const consoleArea = document.getElementById("consoleArea") as HTMLDivElement;
consoleArea.appendChild(console.textarea);

// Test it:
console.log("Hello Dexie Lovers!");
console.log("====================================================================\n");

const fakeTag = FakerTag();
const tag = new Tag(fakeTag); 
await tag.clean().then(() => console.log("Database deleted"));
await tag.persist(fakeTag);

var lookupTag = await tag.query(fakeTag.tag.id);
console.log(`The deep test fails due to different objects: ${equal(lookupTag[0], fakeTag.tag)}`);

console.log(`FakeTag:${fakeTag}`);
const castedTag = lookupTag[0] as Tag;
console.log(`The test was: ${castedTag.equals(fakeTag)}`);
console.log("====================================================================\n");