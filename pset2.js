/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
// SOLUTION 1
const removeNegatives = arr => {
    const copyArr = [...arr];
    for (i = 0; i < copyArr.length; i++) {
        copyArr[i] = Math.abs(copyArr[i]);
    }
    return copyArr;
}

console.log(removeNegatives([-3, -2, 1, 2, 3, -4]));

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
// SOLUTION 2
const findVal = (arr, val) => {


    for (i = 0; i < arr.length; i++) {

        if (arr[i] === val) { // arr[i] refers to the element
            return arr.indexOf(arr[i]);
        }
    }

    return -1;
}

// wanna end when u end the A or find the val
// as long as I haven't reached the end of the A, keep going
console.log(findVal([1, 2, 3, 4], 1));
console.log(findVal([1, 2, 3, 4], 4));
console.log(findVal([1, 2, 3, 4], 9));

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
// SOLUTION 3
const removeOdds = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    
        if (arr[i] % 2 === 0 && typeof(arr[i]) === "number") {
           newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeOdds([1, 2, 3, 4]));
console.log(removeOdds([1, "2", 3, 4]));

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
// SOLUTION 4
const addSquares = arr => {
const copyArr = [...arr];
for (i = 0; i < arr.length; i++) {

copyArr.push(arr[i] ** 2)
}

return copyArr;
}

console.log(addSquares([1,2,3,4]));

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/
// SOLUTION 5

const doubleify = arr => {
    const copyArr =  [...arr];
for (i = 0; i < arr.length; i++) {

}
}

// 

console.log(doubleify([1,2,3,4));

/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
// SOLUTION 6

const findMax = arr => {
for (i = 0; i < arr.length)
}

console.log(findMax([1,2,3,99,4]));