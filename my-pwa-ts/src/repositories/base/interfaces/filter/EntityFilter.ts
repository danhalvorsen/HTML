export interface IEntityFilter {
    build(): string;
}

const mergeSubObject = <S, K extends keyof S>(originalObject: S, changes: Pick<S, K>): S =>
  Object.assign({}, originalObject, changes);

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
        return new TagReadFilter({
            ...this.filterResult, 
            tagPath:tagPath 
            ? `${tagPath}` : undefined 
        });
    }

    setTagId(id: string) {
        return new TagReadFilter({
            ...this.filterResult, 
            tagId:id 
            ? `${id}` : undefined 
        });
    }
 
    setTagNo(tagNo: string) {
        return new TagReadFilter({...this.filterResult, TagNo: tagNo ? `${tagNo}` : undefined });
    }

    setCommPkgNo(commPkgNo: string) {
        return new TagReadFilter({...this.filterResult, CommPkgNo: commPkgNo ? `${commPkgNo}` : undefined });
    }

    setMcPkgNo(mcPkgNo : string) {
        return new TagReadFilter({...this.filterResult, McPkgNo: mcPkgNo ? `${mcPkgNo}` : undefined });
    }

   

    override build(): string {
        const filters = Object.values(this.filterResult).filter(Boolean);
        return filters?.length > 0 ? filters.join(` and `) : '';
    }

    getFilterByProp(prop: string) : string {

        return this.filterResult[prop];
    }

    protected buildFilterFromArray(values: string[], prop: string) {
        return values?.map((e) => `${prop} eq '${e}'`).join(` or `) ?? '';
    }

}