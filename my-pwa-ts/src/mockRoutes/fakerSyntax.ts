import { faker } from '@faker-js/faker';
import { FakerAlphaCode } from './faker';
import { FindSubPatterns } from './findSubPatterns';

export const FakerSyntax = (syntax: string = "XX-AAA-XXA-XXXXX") => {
    let subPatterns: Array<string> = syntax.split("-");
    let results: Array<string> = [];

    subPatterns.forEach(subString => {
        var discoveredPatterns = FindSubPatterns(subString);
        discoveredPatterns.forEach(pattern => {

            let num = pattern.length - 1;
            if (pattern.startsWith("X")) {

                results.push(randomFixedInteger(num).toString());
            }
            else if (pattern.startsWith("A")) {

                results.push(FakerAlphaCode(num))
            }
        });
    });

    let result: string = "";
    for (let i = 0; i < results.length; i++) {
        if (i < results.length - 1)
            result += `${results[i]}-`;
        else
            result += `${results[i]}`
    }

    return result;
}

var randomFixedInteger = function (length: number) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}