export {}

// import { rest } from 'msw'
// import { FakerTagPreview} from '../faker'

// export const mockedGetEntityTagDetailsResolver = (req, res, ctx) => {
//     const plantId = req.url.searchParams.get('plantId');
//     const checklistId = req.url.searchParams.get('checklistId');
//     const tagId = req.url.searchParams.get('tagId');

//     if(plantId === null || checklistId === null || tagId === null)
//         return;

//     return res(
//         ctx.json(FakerTagPreview()),
//         ctx.status(200),
//         ctx.set('Content-Type', 'application/json'),
//         )
// }