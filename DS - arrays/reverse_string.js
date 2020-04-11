/**
 * 
 * @param {string} str 
 */
function reverseSimple(str) {
    if (!str || typeof str !== 'string') {
        return ""; 
    }

    const backwards = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join("");
}

/**
 * 
 * @param {string} str 
 */
function reverseBuiltIn(str) {
    return str.split('').reverse().join('');
}

/**
 * 
 * @param {string} str 
 */
const reverseES6 = str => [...str].reverse().join('');

let str = "Hellow world!";
console.log(reverseSimple(str));
console.log(reverseBuiltIn(str));
console.log(reverseES6(str));
