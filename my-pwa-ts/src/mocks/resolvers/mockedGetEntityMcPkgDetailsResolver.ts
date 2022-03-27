export {}
// import { rest } from 'msw'
// import { FakerMcPkgPreview} from '../faker'

// export const mockedGetEntityMcPkgDetailsResolver = (req, res, ctx) => {
//     const plantId = req.url.searchParams.get('plantId');
//     const checklistId = req.url.searchParams.get('checklistId');
//     const mcPkgId = req.url.searchParams.get('mcPkgId');

//     if(plantId === null || checklistId === null || mcPkgId === null)
//         return;

//     return res(
//         ctx.json(FakerMcPkgPreview(parseInt(mcPkgId))),
//         ctx.status(200),
//         ctx.set('Content-Type', 'application/json'),
//         )
// }