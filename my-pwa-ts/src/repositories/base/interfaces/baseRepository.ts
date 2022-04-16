import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

import { IndexableType, Table } from 'dexie';
import { db } from '../../../database/mcAppDatabase';
import { Index, TagIndexes } from '../../../database/TagIndex';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    //creating a property to use your code in all instances 
    // that extends your base repository and reuse on methods of class
    public _table?: Table<any, IndexableType>  | undefined;

    constructor(table : Table<any, IndexableType> |  undefined) {
        this._table = table;
      }

    async create(item: T): Promise<boolean> {
        
        //await db.tag.add(item).then((result) => {
            await this._table?.add(item).then((result) => {
            console.log(`Adding item:${item} to database`);
            return true; }).catch((error) => {

                console.log(error);
                return false;
            });
        
            return true;
    }

    async update(id: string, item: T): Promise<boolean> {
        const i = item as unknown as IndexableType;
        this._table?.put(id, i).then((result) =>{
            return true;
        });

        return false;
    }
    async delete(id: string): Promise<boolean> {
        this._table?.delete(id).then((result) =>{
            return true;
        });

        return false;
    }

    async find(item: T): Promise<T[]> {
    var result = new Array<T>();
    const i = item as unknown as IndexableType;
    await this._table?.where("id").equals(i).each((item) => {
        result.push(item);
    });
    return result;
    }
    
    async findOne(id: number): Promise<T> {
        
        let result =  await this._table?.where("id").equals(id).first();
        console.log(result);
        return result;
    }
}