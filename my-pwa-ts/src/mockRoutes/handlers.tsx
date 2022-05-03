import * as msw from "msw";
import { IChecklistPreview, IPoPreview } from "./api.types";
import * as faker from "./faker";
import { FakeSearchResults } from "./fakerTagSearchResults";

export const handlers = [
    msw.rest.get("api/person/:id", (req, res, ctx) => {
        return res(ctx.json(faker.FakerPerson()));
    }),
    msw.rest.get("CheckList/MC", (req, res, ctx) => {
        return res(ctx.json(faker.FakerChecklistResponse(parseInt("1010"))));
    }),
    msw.rest.get("CheckList/PunchList", (req, res, ctx) => {
        return res(ctx.json(faker.FakePunchPreviewList(2)));
    }),
    msw.rest.get("/McPkg", (req, res, ctx) => {
        return res(ctx.json(faker.FakerMcPkgPreview(parseInt("1010"))));
    }),
    msw.rest.get("McPkg/CheckLists",
        (
            req: msw.RestRequest<msw.DefaultRequestBody>,
            res: msw.ResponseComposition<msw.ResponseComposition | IChecklistPreview>,
            ctx: msw.RestContext
        ) => {
            return res(ctx.json(faker.FakerChecklistPreview()));
        }
    ),
    msw.rest.get("/WorkOrder", (req, res, ctx) => {
        return res(ctx.json(faker.FakerWoPreview()));
    }),
    msw.rest.get("/Tag", (req, res, ctx) => {
        return res(ctx.json(faker.FakerTagPreview()));
    }),
    ///Tag/Search/plantId=${plantId}&startsWithTagNo=${query}&projectId=${projectId}
    msw.rest.get("/Tag/Search", (req, res, ctx) => {
        const plantId = req.url.searchParams.get('plantId');
        const startsWithTagNo = req.url.searchParams.get('startsWithTagNo');
        const projectId = req.url.searchParams.get('projectId')
        const maxAvailable = 100;

        return res(ctx.json(FakeSearchResults(startsWithTagNo, projectId, plantId, maxAvailable)));


    }),
    msw.rest.get("/PurchaseOrder",
        (
            req: msw.RestRequest<msw.DefaultRequestBody>,
            res: msw.ResponseComposition<msw.ResponseComposition | IPoPreview>,
            ctx: msw.RestContext
        ) => {
            return res(ctx.json(faker.FakerPoPreview()));
        }
    ),
    msw.rest.get(
        "/PurchaseOrder/CheckLists",
        (
            req: msw.RestRequest<msw.DefaultRequestBody>,
            res: msw.ResponseComposition<msw.ResponseComposition | Array<IChecklistPreview>>,
            ctx: msw.RestContext
        ) => {
            return res(ctx.json(faker.FakerListChecklistPreview(5)));
        }
    ),
];
