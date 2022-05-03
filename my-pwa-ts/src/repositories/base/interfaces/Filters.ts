import { IMcPkgPreview, ITag } from '../../../mockRoutes/api.types';

export const isInstanceOf = <T>(ctor: new (...args: any) => T) =>
    (x: any): x is T => x instanceof ctor;

export const isOfType = <T>(
    varToBeChecked: any,
    propertyToCheckFor: keyof T
): varToBeChecked is T =>
    (varToBeChecked as T)[propertyToCheckFor] !== undefined;

    /** 
     * Check is types is to T by checking many of its properties
    */
    export const isExtOfType = <T>(
        varToBeChecked: any,
        propertiesToCheckFor: Array<keyof T>,
    ): varToBeChecked is T => {
        let numProperties = propertiesToCheckFor.length;
        while (numProperties > 0) {
            const propertyToCheckFor = propertiesToCheckFor.shift();
            if (varToBeChecked[propertyToCheckFor] === undefined) {
                return false;
            }
            numProperties--;
        }
        return true;
    };
    
    export class Describer{

        describeClass( typeOfClass: any) : Array<string>{
            let a = new typeOfClass();
            let array : Array<string> = Object.getOwnPropertyNames(a);
            return array;
        }
     }


function isIMcPkgPreview(item: any): item is IMcPkgPreview {
    return isOfType<IMcPkgPreview>(item, 'mcPkgNo' );
}