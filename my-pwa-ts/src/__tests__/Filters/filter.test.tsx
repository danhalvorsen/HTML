import { TagReadFilter } from "../../repositories/base/interfaces/filter/EntityFilter";

describe("Tag filter builder", () => {
    let filter = new TagReadFilter();
    it("should build a simple query", () => {
        var query = filter.setTagPath("tag.Id").build();
        expect(query).toBe("tag.Id");
        expect(filter.getFilterByProp("tag.Id")).toBe("tag.Id");
        
    });

    it('should build a more complex query', () => {
        let tagIdFilter = filter.setExceptedTagId("2001");
        expect(tagIdFilter.build()).toBe("2001");
    })
});
