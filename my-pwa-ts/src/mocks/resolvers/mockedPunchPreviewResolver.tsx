export {}
// import { rest } from 'msw'
// import { FakePunchPreviewList} from '../faker'

// export const mockedPunchPreviewResolver = (req, res, ctx) => {
//     const plantId = req.url.searchParams.get('plantId');
//     const checklistId = req.url.searchParams.get('checklistId');
//     if(plantId === null || checklistId === null)
//         return;

//     return res(
//         ctx.json(FakePunchPreviewList(2)),
//         ctx.status(200),
//         ctx.set('Content-Type', 'application/json'),
//         )
// }