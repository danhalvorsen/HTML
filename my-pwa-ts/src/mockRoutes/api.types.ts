import { IndexableType } from 'dexie';
import { ResponseComposition } from 'msw';

export enum CompletionStatus {
    OS = 'OS',
    PA = 'PA',
    PB = 'PB',
    OK = 'OK',
}

export type Project = {
    description: string;
    id: number;
    title: string;
};

export interface IPlant {
    id: string;
    title: string;
    slug: string;
    projects?: Project[];
}

//SEARCH

export enum ApiSavedSearchType {
    CHECKLIST = 'Check Lists',
    PUNCH = 'Punch List Items',
}

export interface ISavedSearch {
    id: number;
    name: string;
    description: string;
    type: ApiSavedSearchType;
}

export interface IMcPkgPreview {
    id: number;
    mcPkgNo: string;
    description: string;
    status: CompletionStatus;
    commPkgNo: string;
    phaseCode: string;
    phaseDescription: string;
    responsibleCode: string;
    responsibleDescription: string;
    commissioningHandoverStatus: string;
    operationHandoverStatus: string;
}

export interface IWoPreview {
    id: number;
    workOrderNo: string;
    title: string;
    description: string;
    disciplineCode: string;
    disciplineDescription: string;
}

export interface ITagPreview {
    id: number;
    tagNo: string;
    description: string;
    registerCode: string;
    tagFunctionCode: string;
    commPkgNo: string;
    mcPkgNo: string;
    callOffNo: string;
    punchaseOrderTitle: string;
    mccrResponsibleCode: string;
}

export interface IPoPreview {
    callOffId: number;
    isPurchaseOrder: boolean;
    title: string;
    description: string;
    responsibleCode: string;
}

export interface ISearchResults {
    maxAvailable: number;
    items: IMcPkgPreview[] | IWoPreview[] | ITagPreview[] | IPoPreview[];
}

export interface IChecklistSavedSearchResult {
    id: number;
    tagNo: string;
    tagDescription: string;
    responsibleCode: string;
    status: CompletionStatus;
    projectDescription: string;
    formularType: string;
    formularGroup: string;
    hasElectronicForm: boolean;
    attachmentCount: number;
    isSigned: boolean;
    isVerified: boolean;
    updatedAt: Date;
    updatedByUser: string;
    updatedByFirstName: string;
    updatedByLastName: string;
}

export interface IPunchItemSavedSearchResult {
    id: number;
    status: CompletionStatus;
    description: string;
    tagNo: string;
    tagId: number;
    formularType: string;
    responsibleCode: string;
    isCleared: boolean;
    isVerified: boolean;
    statusControlledBySwcr: boolean;
    attachmentCount: number;
}

// COMM PKG AND LISTS

export interface ICommPkg {
    id: number;
    commPkgNo: string;
    description: string;
    commStatus: CompletionStatus;
    mcStatus: CompletionStatus;
    mcPkgCount: number;
    mcPkgsAcceptedByCommissioning: number;
    mcPkgsAcceptedByOperation: number;
    commissioningHandoverStatus: string;
    operationHandoverStatus: string;
    systemId: number;
}

export interface IChecklistPreview 
{
    id: number;
    tagId: number;
    tagNo: string;
    tagDescription: string;
    responsibleCode: string;
    status: CompletionStatus;
    formularType: string;
    formularGroup: string;
    sheetNo: number;
    subSheetNo: number;
    isRestrictedForUser: boolean;
    hasElectronicForm: boolean;
    attachmentCount: number;
    isSigned: boolean;
    isVerified: boolean;
}

export interface IPunchPreview {
    id: number;
    status: CompletionStatus;
    description: string;
    systemModule: string;
    tagDescription: string;
    tagId: number;
    tagNo: string;
    formularType: string;
    responsibleCode: string;
    isRestrictedForUser: boolean;
    cleared: boolean;
    rejected: boolean;
    verified: boolean;
    statusControlledBySwcr: boolean;
    attachmentCount: number;
    callOffNo?: string;
}

// CHECKLIST
export interface IChecklistDetails {
    id: number;
    tagNo: string;
    tagDescription: string;
    tagId: number;
    mcPkgNo: string;
    responsibleCode: string;
    responsibleDescription: string;
    status: CompletionStatus;
    systemModule: string;
    formularType: string;
    formularGroup: string;
    comment: string;
    signedByUser: string;
    signedByFirstName: string;
    signedByLastName: string;
    signedAt: Date;
    verifiedByUser: string;
    verifiedByFirstName: string;
    verifiedByLastName: string;
    verifiedAt: Date;
    updatedAt: Date;
    updatedByUser: string;
    updatedByFirstName: string;
    updatedByLastName: string;
    isRestrictedForUser: boolean;
    hasElectronicForm: boolean;
    attachmentCount: number;
}

export interface ColumnLabel {
    id: number;
    label: string;
}

export interface Cell {
    value: string;
    unit: string;
    columnId: number;
}

export interface Row {
    id: number;
    label: string;
    cells: Cell[];
}

export interface MetaTable {
    info: string;
    columnLabels: ColumnLabel[];
    rows: Row[];
}

export interface ICheckItem {
    id: number;
    sequenceNumber: string;
    text: string;
    detailText: string;
    isHeading: boolean;
    hasImage: boolean;
    imageFileId: number;
    hasMetaTable: boolean;
    metaTable: MetaTable;
    isOk: boolean;
    isNotApplicable: boolean;
}

export interface LoopTag {
    tagId: number;
    tagNo: string;
}

export interface ICustomCheckItem {
    id: number;
    itemNo: string;
    text: string;
    isOk: boolean;
}

export interface IChecklistResponse {
    loopTags: LoopTag[];
    checkList: IChecklistDetails;
    checkItems: ICheckItem[];
    customCheckItems: ICustomCheckItem[];
}

export interface IPunchCategory {
    id: number;
    code: CompletionStatus;
    description: string;
}

export interface IPunchType {
    id: number;
    parentId: number;
    code: string;
    description: string;
}

export interface IPunchOrganization {
    id: number;
    parentId: number;
    code: string;
    description: string;
}

export interface IPunchSort {
    id: number;
    parentId: number;
    code: string;
    description: string;
}

export interface IPunchPriority {
    id: number;
    code: string;
    description: string;
}

export interface INewPunch {
    CheckListId: number;
    CategoryId: number;
    Description: string;
    TypeId?: number;
    RaisedByOrganizationId: number;
    ClearingByOrganizationId: number;
    SortingId?: number;
    PriorityId?: number;
    ActionByPerson?: number | null;
    DueDate?: string;
    Estimate?: number;
    TemporaryFileIds: string[];
}

export interface IPunchItem {
    id: number;
    checklistId: number;
    formularType: string;
    status: CompletionStatus;
    description: string;
    typeCode: string;
    typeDescription: string;
    raisedByCode: string;
    raisedByDescription: string;
    clearingByCode: string;
    clearingByDescription: string;
    clearedAt: string | null;
    clearedByUser: string | null;
    clearedByFirstName: string | null;
    clearedByLastName: string | null;
    verifiedAt: string | null;
    verifiedByUser: string | null;
    verifiedByFirstName: string | null;
    verifiedByLastName: string | null;
    rejectedAt: string | null;
    rejectedByUser: string | null;
    rejectedByFirstName: string | null;
    rejectedByLastName: string | null;
    dueDate: string | null;
    estimate: number | null;
    priorityId: number | null;
    priorityCode: string | null;
    priorityDescription: string | null;
    actionByPerson: number | null;
    actionByPersonFirstName: string | null;
    actionByPersonLastName: string | null;
    materialRequired: boolean;
    materialEta: string | null;
    materialNo: string | null;
    systemModule: string;
    tagDescription: string;
    tagId: number;
    tagNo: string;
    responsibleCode: string;
    responsibleDescription: string;
    sorting: string | null;
    statusControlledBySwcr: boolean;
    isRestrictedForUser: boolean;
    attachmentCount: number;
}

export interface IAttachment {
    id: number;
    uri: string;
    title: string;
    createdAt: Date;
    classification: string;
    mimeType: string;
    thumbnailAsBase64: string;
    hasFile: boolean;
    fileName: string;
}

export interface ITagDetails {
    id: number;
    tagNo: string;
    description: string;
    registerCode: string;
    registerDescription: string;
    statusCode: string;
    statusDescription: string;
    tagFunctionCode: string;
    tagFunctionDescription: string;
    commPkgNo: string;
    mcPkgNo: string;
    purchaseOrderNo: string;
    callOffNo: string;
    purchaseOrderTitle: string;
    projectDescription: string;
    sequence: string;
    mountedOnTagNo: string;
    remark: string;
    systemCode: string;
    systemDescription: string;
    disciplineCode: string;
    disciplineDescription: string;
    areaCode: string;
    areaDescription: string;
    engineeringCodeCode: string;
    engineeringCodeDescription: string;
    contractorCode: string;
    contractorDescription: string;
    hasPreservation: boolean;
    preservationMigrated: boolean;
}

export interface IAdditionalTagField {
    id: number;
    label: string;
    value: string;
    type: string;
    unit: string;
}
export interface ITag  {
    tag: ITagDetails;
    additionalFields: IAdditionalTagField[];
}

 




export interface IPerson {
    id: number;
    azureOid: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}