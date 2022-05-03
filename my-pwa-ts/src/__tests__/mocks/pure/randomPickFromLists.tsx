import {  PickRandomFromList } from '../../../mockRoutes/Faker';
import { StatusCodes, TagFunctionCodes } from '../../../mockRoutes/FakerDataLists';

describe('Pick randomly from a list', () => {
    it('should pick status code item from codes', ()=> {
        let value = PickRandomFromList(StatusCodes());
        expect(StatusCodes()).toContain(value);
    })
    
    it('should pick function-code item from codes', ()=> {
        let value = PickRandomFromList<string>(TagFunctionCodes());
        expect(TagFunctionCodes()).toContain(value);
    })
});