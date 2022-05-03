import { CompletionStatus, IChecklistDetails } from "../mockRoutes/api.types";

export class ChecklistDetails implements IChecklistDetails {
    id!: number;
    tagNo!: string;
    tagDescription!: string;
    tagId!: number;
    mcPkgNo!: string;
    responsibleCode!: string;
    responsibleDescription!: string;
    status!: CompletionStatus;
    systemModule!: string;
    formularType!: string;
    formularGroup!: string;
    comment!: string;
    signedByUser!: string;
    signedByFirstName!: string;
    signedByLastName!: string;
    signedAt!: Date;
    verifiedByUser!: string;
    verifiedByFirstName!: string;
    verifiedByLastName!: string;
    verifiedAt!: Date;
    updatedAt!: Date;
    updatedByUser!: string;
    updatedByFirstName!: string;
    updatedByLastName!: string;
    isRestrictedForUser!: boolean;
    hasElectronicForm!: boolean;
    attachmentCount!: number;
  
    
}
