
import { ITagDetails, IAdditionalTagField, ITag  } from '../mockRoutes/api.types';
import { db } from './mcAppDatabase';

export type KeyTag = Pick<ITagDetails, 'id' | 'tagNo' | 'commPkgNo' | 'mcPkgNo' > & 
  {additionalFields: Pick<IAdditionalTagField, 'id'|'label'>[]}
export default class Tag implements KeyTag {
    id: number;
    tagNo: string;
    commPkgNo: string;
    mcPkgNo: string;
    additionalFields: Pick<IAdditionalTagField, 'id' | 'label'>[];

    constructor(object : ITag) {
        this.id = object.tag.id;
        this.tagNo = object.tag.tagNo;
        this.commPkgNo = object.tag.commPkgNo;
        this.mcPkgNo = object.tag.mcPkgNo;
        this.additionalFields = object.additionalFields;
    }

    async persistTag(tag : ITag) {
      console.log("Persisting tag to database...");
      await db.transaction("rw", db.tag, async () => {
        await db.tag.add(this);
      });
    }

    async getTag(id: number | string) {
      if (typeof id === "number") {
        await db.tag.where("id").equals(id);
      } else if (typeof id === "string") {
        await db.tag.where("tagNo").equals(id);
      }
    }
}