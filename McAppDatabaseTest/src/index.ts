import { IndexableType } from 'dexie';
import * as _ from 'lodash';
import { Console } from "./console";
var equal = require('deep-equal');

import { FakerTag } from '../../my-pwa-ts/src/mockRoutes/faker';
import { Tag } from '../../my-pwa-ts/src/database/tag';
import { TagRepository } from '../../my-pwa-ts/src/repositories/base/interfaces/tagRepository';
import { TagIndexes } from '../../my-pwa-ts/src/database/TagIndex';
import {db } from '../../my-pwa-ts/src/database/mcAppDatabase';
import { ITag } from '../../my-pwa-ts/src/mockRoutes/api.types';


 
db.open().catch(function (err) {
    console.error('Failed to open db: ' + (err.stack || err));
});


const fakeTag = FakerTag();

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
if(!db.isOpen())
{
    console.log(`Trying to open a database connection to The database:${db.name}`);    
    db.open().then(()=>{
        console.log("");
        console.log(`The database:${db.name} is ${db.isOpen() ? "open" : "closed"}`);
        console.log("");
    })
}
    
console.log("====================================================================\n");

var respository = new TagRepository();
var obj = createTagIndexes(fakeTag);
await respository.create(obj);

var obj = createTagIndexes(fakeTag);
await respository.create(obj);

var obj = createTagIndexes(fakeTag);
await respository.create(obj);

var lookupTag = await respository.findOne(fakeTag.tag.id);
console.log(`The deep test fails due to different objects: ${equal(lookupTag, fakeTag.tag)}`);

console.log(`FakeTag:${fakeTag}`);
// const castedTag = lookupTag[0] as Tag;
// console.log(`The test was: ${castedTag.equals(fakeTag)}`);
console.log("====================================================================\n");


  
function createTagIndexes(fakeData : ITag) : TagIndexes {
    
    const obj : TagIndexes = {
        id: fakeTag.tag.id, 
        tagNo: fakeTag.tag.tagNo,
        commPkgNo: fakeTag.tag.commPkgNo,
        mcPkgNo: fakeTag.tag.mcPkgNo,
        additionalFields: [
            {id: 1, label: 'lll'},
            {id: 2, label: 'lll'},
    
        ]
    } as IndexableType ;

    return obj;
}