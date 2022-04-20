export interface IEntityFilter {
    build(): string;
}

export class EntityFilter implements IEntityFilter {

    public filterResult: { readonly [key: string]: string } = {};
    build(): string { return "Not implemented by purpose - Should be overloaded by object"; };
}

export class TagReadFilter extends EntityFilter {

    constructor(private current = {}) {
        super();
        this.filterResult = current;
    }

    setTagPath(tagPath: string) {
        return new TagReadFilter({ ...this.filterResult, tagPath:tagPath ? `${tagPath}` : undefined });
    }

    setTagId(id: string) {
        return new TagReadFilter({ ...this.filterResult, tagId:id ? `${id}` : undefined });
    }

    /* Mainly used for testing purposes */
    setExceptedTagId(expected_tagId: string) {
        return new TagReadFilter({ ...this.filterResult, expected_tagId: expected_tagId ? `${expected_tagId}` : undefined });
    }



    override build(): string {
        const filters = Object.values(this.filterResult).filter(Boolean);
        return filters?.length > 0 ? filters.join(` and `) : '';
    }

    getFilterByProp(prop: string) {

        return this.filterResult[prop];
    }

    protected buildFilterFromArray(values: string[], prop: string) {
        return values?.map((e) => `${prop} eq '${e}'`).join(` or `) ?? '';
    }

}