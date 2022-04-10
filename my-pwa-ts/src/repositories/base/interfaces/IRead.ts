
export interface IRead<T> {
    find(item: T): Promise<T[]> | undefined;
    findOne(id: number): Promise<T> | undefined;
}
