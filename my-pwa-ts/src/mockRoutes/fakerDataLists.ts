import { ColumnLabel, ICheckItem, Row } from "./api.types";
import { FakerCheckItem, FakerColumnLabel, FakeRow } from "./faker";


function Rows(): Array<Row> {
    let options = new Array<Row>();
    options.push(FakeRow());
    options.push(FakeRow());
    options.push(FakeRow());
    return options;
}

function ColumnLabels(): Array<ColumnLabel> {
    let options = new Array<ColumnLabel>();
    options.push(FakerColumnLabel());
    options.push(FakerColumnLabel());
    options.push(FakerColumnLabel());
    return options;
}

export const PhaseCodes = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["PhaseCode A", "PhaseCode B", "PhaseCode C", "PhaseCode D", "PhaseCode E"]);
};

export const ResponsibleCodes = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["ResponsibleCode A", "ResponsibleCode B", "ResponsibleCode C", "ResponsibleCode D", "ResponsibleCode E"]);
};

export const CommissioningHandoverStatus = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["CommissioningHandoverStatus A", "CommissioningHandoverStatus B", "CommissioningHandoverStatus C", "CommissioningHandoverStatus D", "CommissioningHandoverStatus E"]);
};

export const OperationHandoverStatus = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["OperationHandoverStatus A", "OperationHandoverStatus B", "OperationHandoverStatus C", "OperationHandoverStatus D", "OperationHandoverStatus E"]);
};

export const CompletionStatus = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["CompletionStatus A", "CompletionStatus B", "CompletionStatus C", "CompletionStatus D", "CompletionStatus E"]);
};

export function CheckItems(count: number): Array<ICheckItem> {
    let options = new Array<ICheckItem>();
    for (var i = 0; i < count; i++)
        options.push(FakerCheckItem());
    return options;
}

export const StatusCodes = (): Array<string> => {
    let list = new Array<string>();
    list.push("Status A");
    list.push("Status B");
    list.push("Status C");
    list.push("Status D");
    return list;
};

export const TagFunctionCodes = () : Array<string> => {
    var list = new Array<string>();
    list.push("Function Code AA");
    list.push("Function Code BB");
    list.push("Function Code CC");
    list.push("Function Code DD");
    return list;
}