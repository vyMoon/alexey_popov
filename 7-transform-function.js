// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

// Example:
// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// newArray3; // should return 40
// newArray4; // should return 50

// 7 transform function
// makes and returns array of function
// every elemnt of the new array has the function that related to 
// the value in the same position in passed array.

function transform(arr) {
    return arr.map( function(el, index) {
        return function() {
            return arr[index];
        }
    });
}