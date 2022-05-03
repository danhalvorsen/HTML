import { db } from './../../../db';
import { IWrite } from "./IWrite";
import { IRead } from "./IRead";
import { IndexableType, Table } from "dexie";
import { QueryFilter } from "./QueryFilter";
export abstract class BaseRepository<S> implements IWrite<S>, IRead<S> {
  //creating a property to use your code in all instances
  // that extends your base repository and reuse on methods of class
  public _table?: Table<any, IndexableType> | undefined;

  constructor(table: Table<any, IndexableType> | undefined) {
    this._table = table;
  }

  async create(item: S): Promise<boolean> {
    console.log("create");
    await this._table
      ?.add(item)
      .then((result) => {
        //console.log(`Adding item:${JSON.stringify(i)} to database`);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

    return true;
  }


  async update(id: string, item: S): Promise<boolean> {
    const i = item as unknown as IndexableType;
    this._table?.put(id, i).then((result) => {
      return true;
    });

    return false;
  }
  async delete(id: string): Promise<boolean> {
    this._table?.delete(id).then((result) => {
      return true;
    });

    return false;
  }

  findById(id: number) : boolean {
    return true;
  }; 

  async find(filter: QueryFilter): Promise<S[]> {
    console.log('find');
    var result = new Array<S>();
  
    await this._table?.where(filter.id).equals(filter.value.toString())
      .each((item) => {
        result.push(item);
      });
    return result;
  }

  async findOne(filter : QueryFilter): Promise<S> {
    console.log('findOne');
    let result = await this._table?.where("tag.id").equals(filter.value).first();
    console.log(result);
    return result;
  }

 

  async getUsedIds(): Promise<Array<number>> {
    var usedIds: Array<number> = [];
    await this._table?.each((item) => {
      usedIds.push(item.id);
    });

    return usedIds;
  }
}
// function ITag(ITag: any) {
//   throw new Error("Function not implemented.");
// }

// function TagIndexes(TagIndexes: any) {
//   throw new Error("Function not implemented.");
// }

