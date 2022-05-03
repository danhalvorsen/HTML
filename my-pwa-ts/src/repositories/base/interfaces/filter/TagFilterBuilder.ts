export type FilterType = {
    category: string | undefined;
    status: string | string[] | undefined;
    openOnly: boolean;
};

const mergeSubObject = <S, K extends keyof S>(originalObject: S, changes: Pick<S, K>): S =>
    Object.assign({}, originalObject, changes);


export class EventFilterBuilder3<T extends FilterType> {
    private filterResult: Record<keyof T, string>;
    constructor(current: Record<keyof T, string>) {
        this.filterResult = current;
    }

    setCategoryFilter(category: string | undefined) {
        return new EventFilterBuilder3(
            mergeSubObject(this.filterResult, {
                category: category ? `${category}` : "NA",
            })
        );
    }

    setStatusFilter(status: string | string[]) {
        const statusList = Array.isArray(status) ? status : [status];
        return new EventFilterBuilder3(
            mergeSubObject(this.filterResult, {
                status: status ?
                    `(${this.buildFilterFromArray(statusList, 'status')})` : "NA",
            })
        );
    }

    setTagPath(tagPath: string) {
        return new EventFilterBuilder3({ ...this.filterResult, tagPath: tagPath ? `${tagPath}` : undefined });
    }

    setTagId(id: string) {
        return new EventFilterBuilder3({ ...this.filterResult, tagId: id ? `${id}` : undefined });
    }

    setTagNo(tagNo: string) {
        return new EventFilterBuilder3({ ...this.filterResult, TagNo: tagNo ? `${tagNo}` : undefined });
    }

    setCommPkgNo(commPkgNo: string) {
        return new EventFilterBuilder3({ ...this.filterResult, CommPkgNo: commPkgNo ? `${commPkgNo}` : undefined });
    }

    setMcPkgNo(mcPkgNo: string) {
        return new EventFilterBuilder3({ ...this.filterResult, McPkgNo: mcPkgNo ? `${mcPkgNo}` : undefined });
    }

    build() {
        const filters = Object.values(this.filterResult).filter(Boolean);
        return filters?.length > 0 ? filters.join(` and `) : '';
    }

    protected buildFilterFromArray(values: string[], prop: keyof T) {
        return values?.map((e) => `${prop} eq '${e}'`).join(` or `) ?? '';
    }
}