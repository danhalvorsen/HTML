import { faker } from '@faker-js/faker';
import { AdditionalTagField, ApiSavedSearchType, Attachment, Cell, CheckItem, ChecklistDetails, ChecklistPreview, ChecklistResponse, ChecklistSavedSearchResult, ColumnLabel, CommPkg, CompletionStatus, CustomCheckItem, LoopTag, McPkgPreview, MetaTable, NewPunch, Person, Plant, PoPreview, Project, PunchCategory, PunchItem, PunchItemSavedSearchResult, PunchOrganization, PunchPreview, PunchPriority, PunchSort, PunchType, Row, SavedSearch, Tag, TagDetails, TagPreview, WoPreview } from './api.types';

//https://www.angularfix.com/2022/03/how-to-get-random-enum-in-typescript.html
function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
        //.map(n => Number.parseInt(n))
        .map(n => n)
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}


export const FakerId = (): number => faker.datatype.number({ min: 1, max: 999999999 });
export const FakerTitle = (): string => faker.lorem.paragraph(1);
export const FakerDescription = (): string => faker.lorem.paragraph(3);
export const FakerRandomBoolean = (): boolean => { return Math.random() > 0.50 ? true : false; }
export const FakerCommPkgNo = (count: number) => FakerAlphaCode(count);
export const FakerPurchaseOrderNo = (count: number) => FakerAlphaCode(count);
export const FakerMcPkgNo = (count: number) => FakerAlphaCode(count);
export const FakerCallOffNo = (count: number) => FakerAlphaCode(count);
export const FakerDisciplineCode = (count: number) => FakerAlphaCode(count);
export const FakerAreaCode = (count: number) => FakerAlphaCode(count);
export const FakerEngineeringCodeCode = (count: number) => FakerAlphaCode(count);
export const FakerContractorCode = (count: number) => FakerAlphaCode(count);
export const FakerSystemCode = (count: number) => FakerAlphaCode(count);
export const FakerSystemModule = (count: number) => FakerAlphaCode(count);
export const FakerSystemId = (count: number) => faker.datatype.number({ min: 1, max: 99999999 })
export const FakerWorkOrderNo = (count: number) => FakerAlphaCode(count);
export const FakerTagNo = (count: number) => FakerAlphaCode(count);
export const FakerTagFunctionCode = (count: number) => FakerAlphaCode(count);
export const FakerTagId = () => faker.datatype.number({ min: 1, max: 99999999 })
export const FakerMccrResponsibleCode = (count: number) => FakerAlphaCode(count);
export const FakerResponsibleCode = (count: number) => FakerAlphaCode(count);
export const FakerFormularGroup = (count: number) => FakerAlphaCode(count);
export const FakerSequenceNumber = () => faker.datatype.number({ min: 1, max: 99999999 });
export const FakerItemNo = (count: number) => FakerAlphaCode(count);
export const FakerTypeId = () => faker.datatype.number({ min: 1, max: 99999999 })


export const FakerCompletionStatus = (): string => {
    let options = new Array<string>();
    options.concat("Status A", "Status B", "Status C", "Status D", "Status E");
    return options[Math.floor(Math.random() * options.length)];
};

export const FakerPerson = (): Person => {
    return {
        id: FakerId(),
        azureOid: faker.datatype.uuid(),
        username: faker.name.findName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    }
}

const generateTagNumber = (): string => {
    let subnumber1 = faker.datatype.number({ min: 100, max: 300 });
    let subnumber2 = faker.datatype.number({ min: 500, max: 700 });
    let subnumber3 = faker.datatype.number({ min: 800, max: 999 });

    return `${subnumber1} +'-' ${subnumber2} +'-' ${subnumber3}`;
}

export const FakerSavedSearch = (type: ApiSavedSearchType): SavedSearch => {
    return {
        id: FakerId(),
        name: faker.name.findName(),
        description: FakerDescription(),
        type: type,
    }
};

const PhaseCodes = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["PhaseCode A", "PhaseCode B", "PhaseCode C", "PhaseCode D", "PhaseCode E"]);
};

const ResponsibleCodes = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["ResponsibleCode A", "ResponsibleCode B", "ResponsibleCode C", "ResponsibleCode D", "ResponsibleCode E"]);
};

const CommissioningHandoverStatues = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["CommissioningHandoverStatus A", "CommissioningHandoverStatus B", "CommissioningHandoverStatus C", "CommissioningHandoverStatus D", "CommissioningHandoverStatus E"]);
};

const OperationHandoverStatues = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["OperationHandoverStatus A", "OperationHandoverStatus B", "OperationHandoverStatus C", "OperationHandoverStatus D", "OperationHandoverStatus E"]);
};

const CompletionStatues = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["CompletionStatus A", "CompletionStatus B", "CompletionStatus C", "CompletionStatus D", "CompletionStatus E"]);
};


export const FakerPickInRandomList = (options: Array<string>) => {
    return options[Math.floor(Math.random() * options.length)];
};

export const FakerMcPkgPreview = (id : number) : McPkgPreview  => {
    return {
        id: id,
        mcPkgNo: FakerMcPkgNo(5),
        description: FakerDescription(),
        status: randomEnum(CompletionStatus),
        commPkgNo: FakerCommPkgNo(5),
        phaseCode: FakerPickInRandomList(PhaseCodes()),
        phaseDescription: FakerDescription(),
        responsibleCode: FakerPickInRandomList(ResponsibleCodes()),
        responsibleDescription: FakerDescription(),
        commissioningHandoverStatus: FakerPickInRandomList(CommissioningHandoverStatues()),
        operationHandoverStatus: FakerPickInRandomList(OperationHandoverStatues())
    }
};

export const FakerWoPreview = (): WoPreview => {
    return {

        id: FakerId(),
        workOrderNo: FakerWorkOrderNo(5),
        title: FakerTitle(),
        description: FakerDescription(),
        disciplineCode: FakerDisciplineCode(5),
        disciplineDescription: FakerDescription()
    }
}

export const FakerTagPreview = (): TagPreview => {
    return {
        id: FakerId(),
        tagNo: FakerTagNo(5),
        description: FakerDescription(),
        registerCode: FakerRegisterCode(),
        tagFunctionCode: FakerTagFunctionCode(5),
        commPkgNo: FakerCommPkgNo(5),
        mcPkgNo: FakerMcPkgNo(5),
        callOffNo: FakerCallOffNo(5),
        punchaseOrderTitle: FakerTitle(),
        mccrResponsibleCode: FakerMccrResponsibleCode(5)
    }
}

export const FakerPoPreview = () : PoPreview => {
    return {
        callOffId: FakerId(),
        isPurchaseOrder: FakerRandomBoolean(),
        title: FakerTitle(),
        description: FakerDescription(),
        responsibleCode: FakerResponsibleCode(5)
    }
}

export const FakerChecklistSavedSearchResult = (): ChecklistSavedSearchResult => {
    return {
        id: FakerId(),
        tagNo: FakerTagNo(5),
        tagDescription: FakerDescription(),
        responsibleCode: FakerResponsibleCode(5),
        status: randomEnum(CompletionStatus),
        projectDescription: FakerDescription(),
        formularType: FakerAlphaCode(10),
        formularGroup: FakerAlphaCode(4),
        hasElectronicForm: FakerRandomBoolean(),
        attachmentCount: 10,
        isSigned: FakerRandomBoolean(),
        isVerified: FakerRandomBoolean(),
        updatedAt: faker.date.past(1),
        updatedByUser: faker.name.findName(),
        updatedByFirstName: faker.name.firstName(),
        updatedByLastName: faker.name.firstName()
    }
}

export const FakerFormularType = (count: number) => FakerAlphaCode(count);

export const FakerPunchItemSavedSearchResult = (): PunchItemSavedSearchResult => {
    return {
        id: FakerId(),
        status: randomEnum(CompletionStatus),
        description: FakerDescription(),
        tagNo: FakerTagNo(5),
        tagId: FakerTagId(),
        formularType: FakerFormularType(10),
        responsibleCode: FakerResponsibleCode(5),
        isCleared: FakerRandomBoolean(),
        isVerified: FakerRandomBoolean(),
        statusControlledBySwcr: FakerRandomBoolean(),
        attachmentCount: 10
    }
};


export const FakeCommPkg = (): CommPkg => {
    return {
        id: FakerId(),
        commPkgNo: FakerCommPkgNo(5),
        description: FakerDescription(),
        commStatus: randomEnum(CompletionStatus),
        mcStatus: randomEnum(CompletionStatus),
        mcPkgCount: 100,
        mcPkgsAcceptedByCommissioning: 100,
        mcPkgsAcceptedByOperation: 200,
        commissioningHandoverStatus: FakerPickInRandomList(CommissioningHandoverStatues()),
        operationHandoverStatus: FakerPickInRandomList(OperationHandoverStatues()),
        systemId: FakerSystemId(5)
    };
};


export const FakerChecklistPreview = (): ChecklistPreview => {
    return {
        id: FakerId(),
        tagId: FakerTagId(),
        tagNo: FakerTagNo(5),
        tagDescription: FakerDescription(),
        responsibleCode: FakerResponsibleCode(5),
        status: randomEnum(CompletionStatus),
        formularType: FakerFormularType(10),
        formularGroup: FakerFormularType(4),
        sheetNo: 100,
        subSheetNo: 200,
        isRestrictedForUser: FakerRandomBoolean(),
        hasElectronicForm: FakerRandomBoolean(),
        attachmentCount: 10,
        isSigned: FakerRandomBoolean(),
        isVerified: FakerRandomBoolean(),
    }
};

export const FakerListChecklistPreview = (count : number): Array<ChecklistPreview>  => {

    let options = new Array<ChecklistPreview>();
    for (var i = 0; i < count; i++)
        options.push(FakerChecklistPreview());
    return options;
};

export const FakePunchPreview = (): PunchPreview => {
    return {
        id: FakerId(),
        status: randomEnum(CompletionStatus),
        description: FakerDescription(),
        systemModule: FakerSystemModule(5),
        tagDescription: FakerDescription(),
        tagId: FakerTagId(),
        tagNo: FakerTagNo(5),
        formularType: FakerFormularType(10),
        responsibleCode: FakerResponsibleCode(5),
        isRestrictedForUser: FakerRandomBoolean(),
        cleared: FakerRandomBoolean(),
        rejected: FakerRandomBoolean(),
        verified: FakerRandomBoolean(),
        statusControlledBySwcr: FakerRandomBoolean(),
        attachmentCount: 100,
        callOffNo: FakerCallOffNo(5)
    }
};

export const FakePunchPreviewList = (count : number) : Array<PunchPreview> => {

    let options = new Array<PunchPreview>();
    for(var i=0; i<count; i++)
        options.push(FakePunchPreview())

    return options;
}


export const FakerColumnLabel = (): ColumnLabel => {
    return {
        id: FakerId(),
        label: FakerTitle()
    }
}

export const FakerCell = (): Cell => {
    return {
        value: FakerTitle(),
        unit: "unit",
        columnId: faker.datatype.number({ min: 5, max: 1000 })
    }
};

function CreateCells(): Array<Cell> {
    let options = new Array<Cell>();
    options.push(FakerCell());
    options.push(FakerCell());
    options.push(FakerCell());
    return options;
}


export const FakeRow = (): Row => {
    return {
        id: FakerId(),
        label: FakerTitle(),
        cells: CreateCells()
    }
}

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

export const FakeMetaTable = (): MetaTable => {
    return {
        info: FakerTitle(),
        columnLabels: ColumnLabels(),
        rows: Rows()
    }

}

export const FakerCheckItem = (): CheckItem => {
    return {
        id: FakerId(),
        sequenceNumber: FakerSequenceNumber().toString(),
        text: FakerTitle(),
        detailText: FakerTitle(),
        isHeading: FakerRandomBoolean(),
        hasImage: FakerRandomBoolean(),
        imageFileId: FakerId(),
        hasMetaTable: FakerRandomBoolean(),
        metaTable: FakeMetaTable(),
        isOk: FakerRandomBoolean(),
        isNotApplicable: FakerRandomBoolean(),
    }
}

function CheckItems(count: number): Array<CheckItem> {
    let options = new Array<CheckItem>();
    for (var i = 0; i < count; i++)
        options.push(FakerCheckItem());
    return options;
}

export const FakerLoopTag = (): LoopTag => {

    return {
        tagId: FakerTagId(),
        tagNo: FakerTagNo(5)
    }
}

function LoopTags(count: number): Array<LoopTag> {
    let options = new Array<LoopTag>();
    for (var i = 0; i < count; i++) {
        options.push(FakerLoopTag());
    }
    return options;
}

export const FakerCustomCheckItem = (): CustomCheckItem => {
    return {
        id: FakerId(),
        itemNo: FakerItemNo(5),
        text: FakerTitle(),
        isOk: FakerRandomBoolean(),
    }
}

function CustomCheckItems(count: number): Array<CustomCheckItem> {
    let options = new Array<CustomCheckItem>();
    for (var i = 0; i < count; i++) {
        options.push(FakerCustomCheckItem());
    }
    return options;
}

export const FakerChecklistResponse = (id : number): ChecklistResponse => {
    return {
        loopTags: LoopTags(5),
        checkList: FakeChecklistDetails(id),
        checkItems: CheckItems(1),
        customCheckItems: CustomCheckItems(4)
    }
}

export const FakerPunchCategory = (): PunchCategory => {
    return {
        id: FakerId(),
        code: randomEnum(CompletionStatus),
        description: FakerTitle()
    }
}

export const FakerPunchType = (): PunchType => {
    return {
        id: FakerId(),
        parentId: FakerId(),
        code: "code",
        description: FakerTitle()
    }
}

export const FakerPunchOrganization = (): PunchOrganization => {
    return {
        id: FakerId(),
        parentId: FakerId(),
        code: "code",
        description: FakerTitle(),
    }
}

export const FakerPunchSort = (): PunchSort => {
    return {
        id: FakerId(),
        parentId: FakerId(),
        code: "code",
        description: FakerTitle()
    }
}

export const FakerPunchPriority = (): PunchPriority => {
    return {
        id: FakerId(),
        code: "code",
        description: FakerDescription()
    }
}

export const FakerNewPunch = (): NewPunch => {
    return {
        CheckListId: FakerId(),
        CategoryId: FakerId(),
        Description: FakerDescription(),
        TypeId: FakerTypeId(),
        RaisedByOrganizationId: FakerId(),
        ClearingByOrganizationId: FakerId(),
        TemporaryFileIds: new Array<string>().concat("101", "102", "103"),
    }
}

export const FakerFullname = () => faker.name.findName();
export const FakerBetweenDates = (from: Date, to: Date) => {
    return faker.date.between(from.toDateString(), to.toDateString());
}

export const FakerDatesBetween2021and2022 = () => {
    let from = new Date(2021, 1, 1);
    let to = new Date(2022, 12, 31);
    return faker.date.between(from.toDateString(), to.toDateString());
}

export const FakerRaisedByCode = () => {
    return FakerAlphaCode(5);
}
export const FakerTypeCode = () => {
    return FakerAlphaCode(5);
}

export const FakerClearingByCode = () => {
    return FakerAlphaCode(5);
}

const MAX_PRIORITY_LIMIT = 10;
export const FakerPriorityId = () => faker.datatype.number({ min: 1, max: MAX_PRIORITY_LIMIT })


const PriorityCodes = (): Array<string> => {
    let options = new Array<string>();
    return options.concat(["PriorityCode A", "PriorityCode B", "PriorityCode C", "PriorityCode D"]);
};





export const FakerPunchItem = (): PunchItem => {
    return {
        id: FakerId(),
        checklistId: FakerId(),
        formularType: FakerFormularType(10),
        status: randomEnum(CompletionStatus),
        description: FakerDescription(),
        typeCode: FakerTypeCode(),
        typeDescription: FakerDescription(),
        raisedByCode: FakerRaisedByCode(),
        raisedByDescription: FakerDescription(),
        clearingByCode: FakerClearingByCode(),
        clearingByDescription: FakerDescription(),
        clearedAt: FakerBetweenDates(new Date(2022, 1, 1), new Date(2022, 1, 9)).toDateString(),
        clearedByUser: FakerFullname(),
        clearedByFirstName: faker.name.firstName(),
        clearedByLastName: faker.name.lastName(),
        verifiedAt: "somewhere",
        verifiedByUser: FakerFullname(),
        verifiedByFirstName: faker.name.firstName(),
        verifiedByLastName: faker.name.lastName(),
        rejectedAt: "somewhere",
        rejectedByUser: FakerFullname(),
        rejectedByFirstName: faker.name.firstName(),
        rejectedByLastName: faker.name.lastName(),
        dueDate: new Date(2022, 1, 1).toDateString(),
        estimate: 100,
        priorityId: FakerPriorityId(),
        priorityCode: FakerPickInRandomList(PriorityCodes()),
        priorityDescription: FakerDescription(),
        actionByPerson: FakerId(),
        actionByPersonFirstName: faker.name.firstName(),
        actionByPersonLastName: faker.name.lastName(),
        materialRequired: FakerRandomBoolean(),
        materialEta: "future",
        materialNo: "future",
        systemModule: FakerSystemModule(5),
        tagDescription: FakerDescription(),
        tagId: FakerTagId(),
        tagNo: FakerTagNo(5),
        responsibleCode: FakerResponsibleCode(5),
        responsibleDescription: FakerDescription(),
        sorting: null,
        statusControlledBySwcr: FakerRandomBoolean(),
        isRestrictedForUser: FakerRandomBoolean(),
        attachmentCount: 100,
    }
};

export const FakerAttachment = (): Attachment => {
    return {
        id: FakerId(),
        uri: faker.internet.url(),
        title: FakerTitle(),
        createdAt: FakerDatesBetween2021and2022(),
        classification: "future",
        mimeType: "future",
        thumbnailAsBase64: "2323321",
        hasFile: true,
        fileName: "filename.txt"
    }

}

export const FakeChecklistDetails = (id : number): ChecklistDetails => {
    return {
        id: id,
        tagNo: FakerTagNo(5),
        tagDescription: FakerDescription(),
        tagId: FakerTagId(),
        mcPkgNo: FakerMcPkgNo(5),
        responsibleCode: FakerResponsibleCode(5),
        responsibleDescription: FakerDescription(),
        status: randomEnum(CompletionStatus),
        systemModule: FakerSystemModule(5),
        formularType: FakerFormularType(10),
        formularGroup: FakerFormularGroup(5),
        comment: FakerTitle(),
        signedByUser: faker.name.firstName(),
        signedByFirstName: faker.name.firstName(),
        signedByLastName: faker.name.lastName(),
        signedAt: faker.date.past(2),
        verifiedByUser: faker.name.findName(),
        verifiedByFirstName: faker.name.firstName(),
        verifiedByLastName: faker.name.lastName(),
        verifiedAt: faker.date.past(1),
        updatedAt: faker.date.past(1),
        updatedByUser: faker.name.findName(),
        updatedByFirstName: faker.name.firstName(),
        updatedByLastName: faker.name.lastName(),
        isRestrictedForUser: FakerRandomBoolean(),
        hasElectronicForm: FakerRandomBoolean(),
        attachmentCount: 10
    }
}


export const CreateProjectList = (count: number): Array<Project> => {
    var projects = new Array<Project>();
    for (var i = 0; i < count; i++) {
        projects.push(FakerProject());
    }
    return projects;
}

export const FakerPlant = (count: number): Plant => {
    return {
        id: FakerId().toString(),
        title: faker.lorem.paragraph(1),
        slug: "slug",
        projects: CreateProjectList(count),
    }
}

export const FakerProject = (): Project => {
    return {
        description: FakerDescription(),
        id: FakerId(),
        title: FakerTitle()
    };
}


export const FakerRegisterCode = () => { return faker.random.alphaNumeric(10) };
export const FakerAlphaCode = (count: number) => { return faker.random.alphaNumeric(10) };

export const StatusCodes = (): Array<string> => {
    let list = new Array<string>();
    list.concat(["A", "B", "C", "D"]);
    return list;
};

export const RandomStatusCode = (): string => {
    return StatusCodes()[Math.floor(Math.random() * StatusCodes().length)];
}

export const tagFunctionCode = (): Array<string> => {
    let list = new Array<string>();
    list.concat(["AA", "BB", "CC", "DD"]);
    return list;
};

export const RandomFunctionCode = (): string => {
    return StatusCodes()[Math.floor(Math.random() * StatusCodes().length)];
}

export const FakerTagDetails = (): TagDetails => {
    return {
        id: FakerId(),
        tagNo: generateTagNumber(),
        description: FakerDescription(),
        registerCode: FakerAlphaCode(10),
        registerDescription: FakerDescription(),
        statusCode: RandomStatusCode(),
        statusDescription: FakerDescription(),
        tagFunctionCode: RandomStatusCode(),
        tagFunctionDescription: FakerDescription(),
        commPkgNo: FakerCommPkgNo(5),
        mcPkgNo: FakerMcPkgNo(5),
        purchaseOrderNo: FakerPurchaseOrderNo(5),
        callOffNo: FakerCallOffNo(5),
        purchaseOrderTitle: FakerTitle(),
        projectDescription: FakerDescription(),
        sequence: faker.datatype.number.toString(),
        mountedOnTagNo: generateTagNumber(),
        remark: FakerTitle(),
        systemCode: FakerSystemCode(5),
        systemDescription: FakerDescription(),
        disciplineCode: FakerDisciplineCode(5),
        disciplineDescription: FakerDescription(),
        areaCode: FakerAreaCode(5),
        areaDescription: FakerDescription(),
        engineeringCodeCode: FakerEngineeringCodeCode(5),
        engineeringCodeDescription: FakerDescription(),
        contractorCode: FakerContractorCode(5),
        contractorDescription: FakerDescription(),
        hasPreservation: FakerRandomBoolean(),
        preservationMigrated: FakerRandomBoolean()
    }
}

export const FakerAdditionalTagField = (): AdditionalTagField => {

    let labels = new Array<string>().concat("Label 1", "Label 2", "Label 3", "Label 4", "Label 5");
    let types = new Array<string>().concat("Type 1", "Type 2");
    let values = new Array<string>().concat("Label 1", "Label 2");
    let units = new Array<string>().concat("unit 1", "unit 2", "unit 3");

    return {
        id: FakerId(),
        label: FakerPickInRandomList(labels),
        value: FakerPickInRandomList(values),
        type: FakerPickInRandomList(types),
        unit: FakerPickInRandomList(units)
    }
}

function AdditionalTagFields(count: number): Array<AdditionalTagField> {

    let options = new Array<AdditionalTagField>();
    for (var i = 0; i < count; i++)
        options.push(FakerAdditionalTagField());
    return options;
}

export const FakerTag = (): Tag => {
    return {
        tag: FakerTagDetails(),
        additionalFields: AdditionalTagFields(faker.datatype.number({ min: 0, max: 10 }))
    }
}
