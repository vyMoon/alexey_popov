// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. 
// Note: function should use recursion

// Example:
// sum(1,3,5,7); //should return 16

// 8 sum function with recursion

function sum() {
    //checks the first argument
    // if it is an Array use it
    // else  compound array of passed arguments
    var numbers = Array.isArray( arguments[0] ) ? arguments[0] : Array.from( arguments );
    // if there are no elements in the array or there is an elemetn that is not a number
    // returns undefined
    if (numbers.length == 0 || !numbers.every( function(el) {return typeof el == 'number'})) {
        return undefined;
    }
    // if there is only one element in the array return it
    if (numbers.length == 1) {
        return numbers.pop()
    }
    // adds the values of the elements using redcursion
    return numbers.pop() + sum(numbers);
}