import {FindSubPatterns } from '../../../mockRoutes/findSubPatterns'
import {FakerSyntax} from '../../../mockRoutes/fakerSyntax'


describe('discover sub patterns in string', () => {
    it('one Pattern in XX', () => {
        let result = FindSubPatterns("XX");
        expect(result.length).toBe(1);
    })
    it('one Pattern in XXXX', () => {
        let result = FindSubPatterns("XXXX");
        expect(result.length).toBe(1);
    })
    it('one Pattern in AAAAAA', () => {
        let result = FindSubPatterns("AAAAAA");
        expect(result.length).toBe(1);
    })
    it('one Pattern in XA', () => {
        let result = FindSubPatterns("XA");
        expect(result.length).toBe(2);
    })
    it('wwo Pattern in AX', () => {
        let result = FindSubPatterns("AX");
        expect(result.length).toBe(2);
    })
    it('wwo Pattern in AAXXXX', () => {
        let result = FindSubPatterns("AAXXXX");
        expect(result.length).toBe(2);
    })
    it('wwo Pattern in AAXX', () => {
        let result = FindSubPatterns("AAXX");
        expect(result.length).toBe(2);
    })
    it('there patterns in AXA', () => {
        let result = FindSubPatterns("AXA");
        expect(result.length).toBe(3);
    })
    it('four patterns in AXAX', () => {
        let result = FindSubPatterns("AXAX");
        expect(result.length).toBe(4);
    })
})

describe('generate a syntax for a given string pattern', () => {
    it('should give two random numbers with separated by a dash when XX-XX is given', () => {
        var pattern = "XX-XX";
        var fake = FakerSyntax(pattern)
        expect(fake.length).toBe(pattern.length);
    });

    it('should give two random numbers with separated by a dash when XXX-XXX is given', () => {
        var pattern = "XXX-XXX";
        var fake = FakerSyntax(pattern)
        expect(fake.length).toBe(pattern.length);
        // expect(fake).toBe("123-123");
    });

    it('should give one random number with an alpha-numeric chars when XXX-A is given', () => {
        var pattern = "XXX-A";
        var fake = FakerSyntax(pattern)
        console.log(fake);
        expect(fake.length).toBe(pattern.length);
        // expect(fake).toBe("123-123");
    });

    it('should give two random numbers with separated by a dash when XXX-A is given', () => {
        var pattern = "A-A-AA";
        var fake = FakerSyntax(pattern)
        console.log(fake);
        expect(fake.length).toBe(pattern.length);
        // expect(fake).toBe("123-123");
    });
})
