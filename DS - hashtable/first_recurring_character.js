// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Given an array = [2,5,5,2,3,5,1,2,4]:
// It should return 5

/**
 * 
 * @param {string} input 
 */
function firstRecurringCharacter(input) {
    const hashset = new Set();
    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (hashset.has(value)) {
            return value;
        }
        hashset.add(value);
    }
    return undefined;
}

let arr;
arr = [2,5,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(arr));

arr = [2,1,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(arr));

arr = [2,3,4,5];
console.log(firstRecurringCharacter(arr));

arr = [2,5,5,2,3,5,1,2,4];
console.log(firstRecurringCharacter(arr));