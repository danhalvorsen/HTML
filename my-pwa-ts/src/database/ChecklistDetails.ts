import { IChecklistDetails } from "../mockRoutes/api.types";
import { DomainObject } from "./DomainObject"; 

export class ChecklistDetails implements DomainObject<IChecklistDetails>{
    _data: IChecklistDetails;

    constructor(data: IChecklistDetails) {
        this._data = data;
    }

    data(): IChecklistDetails {
        return this._data;
    }

}