    import { TagReadFilter } from './../../my-pwa-ts/src/repositories/base/interfaces/filter/EntityFilter';

import { ReservedIds } from './../../my-pwa-ts/src/mockRoutes/faker';
import * as _ from 'lodash';
import { Console } from "./console";
var equal = require('deep-equal');
import { FakerTagWithIdCheck } from '../../my-pwa-ts/src/mockRoutes/faker';
import { TagRepository } from '../../my-pwa-ts/src/repositories/base/interfaces/tagRepository';
import { Tag } from '../../my-pwa-ts/src/database/Tag';
import { QueryFilter } from '../../my-pwa-ts/src/repositories/base/interfaces/QueryFilter';
import { db } from '../../my-pwa-ts/src/database/SomethingDexie';


let tagFilter = new TagReadFilter();
    tagFilter = 
    tagFilter
    .setTagPath("tag.Id")
    .setTagId("1000")
    .setTagNo("1000-1000")
    .setCommPkgNo("2000-2222")


    var byProp1 = tagFilter.getFilterByProp("tagId");
    var byProp2 = tagFilter.getFilterByProp("Dummy");
    let query = tagFilter.build();


db.open()
    .catch(function (err) {
        console.error('Failed to open db: ' + (err.stack || err));
    });


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
console.log(`The database:${db.name} is ${db.isOpen() ? "open" : "closed"}`);
if (!db.isOpen()) {
    console.log(`Trying to open a database connection to The database:${db.name}`);
    db.open().then(() => {
        console.log("");
        console.log(`The database:${db.name} is ${db.isOpen() ? "open" : "closed"}`);
        console.log("");
    })
}

console.log("====================================================================\n");

var repository = new TagRepository();

let rr = await repository.getUsedIds();
const r: ReservedIds = {
    ids: rr,
};

const fakeTag = FakerTagWithIdCheck(r);

await repository.create(fakeTag);

let filter: QueryFilter = {
    id: "tag.id",
    value: fakeTag.tag.id
};

const lookupTag = await repository.findOne(filter);
if (lookupTag !== undefined || lookupTag !== null) {
    console.log(`The deep test fails due to different objects: ${equal(lookupTag, fakeTag.tag)}`);
}
else {
    console.log("Error finding tag");
}



console.log(`FakeTag:${JSON.stringify(fakeTag)}`);
// const castedTag = lookupTag[0] as Tag;
// console.log(`The test was: ${castedTag.equals(fakeTag)}`);
console.log("====================================================================\n");