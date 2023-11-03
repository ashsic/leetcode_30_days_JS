/**
 * @param {string} val
 * @return {Object}
 */
var expect = (val) => {
    let newObject = {
        toBe: (value) => {
            if (value === val){
                return true;
            }else{
                throw "Not Equal";
            }
        },
        notToBe: (value) => {
            if (value !== val){
                return true;
            }else{
                throw "Equal";
            }
        }
    }
    return newObject;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */