import { FakerTag, TagSyntaxRegex } from '../../../mockRoutes/Faker';

describe('A Tag should have a spesfic syntax', () => {
    it('should have a specific syntax', ()=> {
        let tag = FakerTag();
        expect(tag.tag.tagNo).toMatch(TagSyntaxRegex);
    })
});