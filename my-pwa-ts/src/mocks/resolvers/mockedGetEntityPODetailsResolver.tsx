export {}
// import { rest } from 'msw'
// import { FakerPoPreview} from '../faker'

// export const mockedGetEntityPODetailsResolver = (req, res, ctx) => {
//     const plantId = req.url.searchParams.get('plantId');
//     const checklistId = req.url.searchParams.get('checklistId');
//     const callOffId = req.url.searchParams.get('callOffId');

//     if(plantId === null || checklistId === null || callOffId === null)
//     {
//         console.error('mockedGetEntityPODetailsResolver failed')
//         return;
//     }

//     return res(
//         ctx.json(FakerPoPreview()),
//         ctx.status(200),
//         )
// }