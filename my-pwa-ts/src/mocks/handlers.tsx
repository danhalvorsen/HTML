import { DefaultRequestBody, ResponseComposition, rest, RestContext, RestRequest } from 'msw'
import { ChecklistPreview, PoPreview } from './api.types';
import { FakerChecklistPreview, FakePunchPreviewList, FakerChecklistResponse, FakerMcPkgPreview, FakerPerson, FakerPoPreview, FakerTagPreview, FakerWoPreview, FakerListChecklistPreview } from './faker';

export const handlers = [
    rest.get('api/person/:id', (req, res, ctx)  => {

        return res(
            ctx.json(FakerPerson())
        )
    }),

    //rest.get('CheckList/MC', mockedGetChecklistResponseResolver),
    rest.get('CheckList/MC', (req, res, ctx) => {
        return res(
            ctx.json(FakerChecklistResponse(parseInt("1010")))
            )

    }),
    //rest.get('CheckList/PunchList', mockedPunchPreviewResolver),
    rest.get('CheckList/PunchList', (req, res, ctx) => {
        return res(
            ctx.json(FakePunchPreviewList(2))
        )
    }),

    //rest.get('McPkg', mockedGetEntityMcPkgDetailsResolver),
    rest.get('/McPkg', (req, res, ctx) => {
        return res(
            ctx.json(FakerMcPkgPreview(parseInt("1010")))
            )
    }),
    rest.get('McPkg/CheckLists', (req: RestRequest<DefaultRequestBody>, res :ResponseComposition<ResponseComposition|ChecklistPreview>, ctx: RestContext)  => {
        return res(
            ctx.json(FakerChecklistPreview())
        )
    }),
    //rest.get('WorkOrder/', mockedGetEntityWorkOrderDetailsResolver),
    rest.get('/WorkOrder', (req, res, ctx)  => {
        return res(
            ctx.json(FakerWoPreview())
    )}),
    //rest.get('Tag/', mockedGetEntityTagDetailsResolver),
    rest.get('/Tag', (req, res, ctx) => {
        return res(
            ctx.json(FakerTagPreview())
        )
    }),
    rest.get('/PurchaseOrder', (req : RestRequest<DefaultRequestBody>, res : ResponseComposition<ResponseComposition|PoPreview>, ctx: RestContext)  => {
        return res(ctx.json(FakerPoPreview()))
    }),
    rest.get('/PurchaseOrder/CheckLists', (req : RestRequest<DefaultRequestBody>, res : ResponseComposition<ResponseComposition| Array<ChecklistPreview>>, ctx: RestContext)  => {
        return res(ctx.json(FakerListChecklistPreview(5)))
    }),

];


