export {}
// import { rest } from 'msw'
// import { FakerChecklistResponse } from '../faker'

//  export const mockedGetChecklistResponseResolver = (req, res, ctx) => {    
//     const plantId = req.url.searchParams.get('plantId');
//     const checklistId = req.url.searchParams.get('checklistId');
//     //const apiVersion = req.url.searchParams.get('apiversion');
//     if(plantId === null || checklistId === null)
//         return;
//     var checklistIdInt = parseInt(checklistId);
//     console.log(`plantid:${plantId}`);
//     console.log(`checklistId:${checklistId}`);
//         return res(
//             ctx.json(FakerChecklistResponse(checklistIdInt)),
//             )
// }