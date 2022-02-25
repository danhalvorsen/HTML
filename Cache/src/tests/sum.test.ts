import { Sum } from "../ts/sum";
import {expect, jest, test, describe} from '@jest/globals';

describe("This is a simple test", () => {
    test("Check the sampleFunction function", () => {
        expect(Sum(21,21) === 42)
    });
});