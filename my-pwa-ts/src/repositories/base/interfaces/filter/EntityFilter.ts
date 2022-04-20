export interface IEntityFilter {
    filterResult: { [key: string]: string };
    build() : string;
}

export class EntityFilter implements IEntityFilter {
    
    filterResult: { [key: string]: string } = {};
    build() : string { return "Not implemented by purpose - Should be overloaded by object";};
}

 export class TagReadFilter extends EntityFilter {
    filterResult: { [key: string]: string } = {};

    setTagId(tagId : string) {
        if(tagId) {
            this.filterResult.tagId = `tagId = ${tagId}`;
        }
        return this;
    }

    /* Mainly used for testing purposes */
    setExceptedTagId(tagId : string) {
        if(tagId) {
            this.filterResult.expected_tagId = `${tagId}`;
        }
    }

    override build() : string {
        const filters = [
            this.filterResult.tagId,
            this.filterResult.expected_tagId
          ].filter(Boolean);
          return filters?.length > 0 ? filters.join(` and `) : '';
    }

    protected buildFilterFromArray(values: string[], prop: string) {
        return values?.map((e) => `${prop} eq '${e}'`).join(` or `) ?? '';
      }
}