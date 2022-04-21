import { TagReadFilter } from "../../repositories/base/interfaces/filter/EntityFilter";

describe("Tag filter builder", () => {

    it("should build a simple query", () => {
        let filter = new TagReadFilter();
        var query = filter.setTagPath("tag.Id").build();
        expect(query).toBe("tag.Id");


    });

    it('should build a more complex query', () => {
        let filter = new TagReadFilter();
        var query = filter
            .setTagPath("Tag.Id")
            .setTagId("2001")
            .build();
        expect(query).toBe("Tag.Id and 2001");
    })

    it('should be possible to call build several times with same result', () => {
        let filter = new TagReadFilter();
        let query = filter
            .setTagPath("Tag.Id")
            .setTagId("2001")
            .build();
        expect(query).toBe("Tag.Id and 2001");

    });

    it('should be possible to get the sub products out from builder', () => {
        var filter = new TagReadFilter();
        filter = filter
            .setTagPath("Tag.Id")
            .setTagId("2001");

        expect(filter.getFilterByProp("tagPath")).toBe("Tag.Id");
        expect(filter.getFilterByProp("tagId")).toBe("2001");

    });
});
