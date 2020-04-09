// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. 
// Note: function should use recursion

// Example:
// sum(1,3,5,7); //should return 16

// 8 sum function with recursion

function sum() {
    // get the array of passed arguments
    var argsArr = Array.prototype.slice.call(arguments)
    // if any not a number value or no arguments are passed
    // it returns undefined
    if (!argsArr.every( function(el) {return typeof el === 'number'}) || argsArr.length === 0) {
      return undefined;
    }
    // if only one arguments, return it. base case
    if (argsArr.length === 1) {
      return argsArr[0];
    }
    // recursive case
    // I use apply as it receves an array of arguments
    return argsArr.pop() + sum.apply( Object.create(null), argsArr )
}