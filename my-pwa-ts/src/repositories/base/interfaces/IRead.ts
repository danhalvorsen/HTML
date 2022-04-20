import { QueryFilter } from './QueryFilter';
export interface IRead<T> {
    find(filter: QueryFilter): Promise<T[]> | undefined;
    findOne(filter: QueryFilter): Promise<T> | undefined;
}
