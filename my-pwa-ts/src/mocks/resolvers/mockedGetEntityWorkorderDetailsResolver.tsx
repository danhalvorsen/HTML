export {}
// import { rest } from 'msw'
// import { FakerWoPreview } from '../faker'

// export const mockedGetEntityWorkOrderDetailsResolver = (req, res, ctx) => {
//     const plantId = req.url.searchParams.get('plantId');
//     const checklistId = req.url.searchParams.get('checklistId');
//     const WorkOrderId = req.url.searchParams.get('WorkOrderId');

//     if(plantId === null || checklistId === null || WorkOrderId === null)
//         return;

//     return res(
//         ctx.json(FakerWoPreview()),
//         ctx.status(200),
//         ctx.set('Content-Type', 'application/json'),
//         )
// }