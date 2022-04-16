import { TagIndexes } from '../../../database/TagIndex';
import { db } from '../../../database/mcAppDatabase';
import { BaseRepository } from "./baseRepository";



export class TagRepository extends BaseRepository<TagIndexes>{

    constructor() {
        
        var table  = db.tables.find(t=>t.name === "tag");
        console.log(`Database:${db.name} is: ${db.isOpen() ? "open" : "closed"}`);
        console.log(`TagRepository giving dixie table:${table} to baseRepository`);
        super(table);
    }
    // async create(item: ITag): Promise<boolean> {
    //     let transformed = 
    //     let result = super.create(item as TagIndexes);

    }
