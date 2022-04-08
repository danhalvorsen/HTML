import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

import Dexie, { Table } from 'dexie';


// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    //creating a property to use your code in all instances 
    // that extends your base repository and reuse on methods of class
    public readonly _collection: Array<T>;

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}