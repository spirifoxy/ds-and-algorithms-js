/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */
const mergeSortedArrays = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }
    if (arr1.length == 0 && arr2.length == 0) {
        return [];
    }

    const mergedArray = [];
    let arr1Index = 0;
    let arr2Index = 0;
    while (mergedArray.length < arr1.length + arr2.length) {
        let item1 = arr1[arr1Index];
        let item2 = arr2[arr2Index];
        let isArr1Depleted = arr1Index >= arr1.length;

        if (isArr1Depleted || item2 < item1) {
            mergedArray.push(item2);
            arr2Index++;
        } else { 
            mergedArray.push(item1);
            arr1Index++;
        }
    }
    return mergedArray;
};

let arr1 = [1, 2, 3];
let arr2 = [0, 1, 4, 6];
console.log(mergeSortedArrays(arr1, arr2));