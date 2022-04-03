import { faker } from '@faker-js/faker';
import { AdditionalTagField, ApiSavedSearchType, Attachment, Cell, CheckItem, ChecklistDetails, ChecklistPreview, ChecklistResponse, ChecklistSavedSearchResult, ColumnLabel, CommPkg, CompletionStatus, CustomCheckItem, LoopTag, McPkgPreview, MetaTable, NewPunch, Person, Plant, PoPreview, Project, PunchCategory, PunchItem, PunchItemSavedSearchResult, PunchOrganization, PunchPreview, PunchPriority, PunchSort, PunchType, Row, SavedSearch, SearchResults, Tag, TagDetails, TagPreview, WoPreview } from './api.types';
import { FakerTagPreview } from './faker';



export const FakeSearchResults = (startsWithTagNo: string | null, projectId: string | null, 
    plantId: string | null, maxAvailable : number) : SearchResults => {

    var fakeResults = new Array<TagPreview>();
    for(var i = 0; i < maxAvailable; i++) 
    {
        fakeResults.push(FakerTagPreview()); //ToDo: Improve the tag name syntax to be alined with the search params
    }
    
    return {
        items: fakeResults,
        maxAvailable: fakeResults.length,
    }
};