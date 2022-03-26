import { rest } from 'msw'


export const handlers = [
    rest.get('api/person/:id', (req, res, ctx)  => {
        
        return res(
            
            ctx.json({id: req.params.id}),
            ctx.status(200),
        )
    })
];