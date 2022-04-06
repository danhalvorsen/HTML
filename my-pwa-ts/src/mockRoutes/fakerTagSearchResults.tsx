import { faker } from '@faker-js/faker';
import { IAdditionalTagField, ApiSavedSearchType, IAttachment, Cell, ICheckItem, IChecklistDetails, IChecklistPreview, IChecklistResponse, IChecklistSavedSearchResult, ColumnLabel, ICommPkg, CompletionStatus, ICustomCheckItem, LoopTag, IMcPkgPreview, MetaTable, INewPunch, IPerson, IPlant, IPoPreview, Project, IPunchCategory, IPunchItem, IPunchItemSavedSearchResult, IPunchOrganization, IPunchPreview, IPunchPriority, IPunchSort, IPunchType, Row, ISavedSearch, ISearchResults, ITag, ITagDetails, ITagPreview, IWoPreview } from './api.types';
import { FakerTagPreview } from './faker';

export const FakeSearchResults = (startsWithTagNo: string | null, projectId: string | null, 
    plantId: string | null, maxAvailable : number) : ISearchResults => {

    var fakeResults = new Array<ITagPreview>();
    for(var i = 0; i < maxAvailable; i++) 
    {
        fakeResults.push(FakerTagPreview()); //ToDo: Improve the tag name syntax to be alined with the search params
    }
    
    return {
        items: fakeResults,
        maxAvailable: fakeResults.length,
    }
};