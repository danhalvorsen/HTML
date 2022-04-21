import { EventFilterBuilder3, FilterType } from "../../repositories/base/interfaces/filter/TagFilterBuilder";

describe("Tag filter builder", () => {

    it("should build a simple query", () => {
        let filter = new EventFilterBuilder3<FilterType>();
        var query = filter.setTagPath("tag.Id").build();
        expect(query).toBe("tag.Id");


    });
});