// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

// Example:
// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// newArray3; // should return 40
// newArray4; // should return 50

// 7 transform function

// I don't know should the functions takes the value form based array
// and then return this value always.
// So I made universal function that recives the second bool parametr
// if the second parametr is passed as a true value, it returns an array of functions
// that return a new value if any value would change in the base array.

// const newArray = transform(baseArray, true);
// newArray[3](); // return 40
// baseArray[3] = 'abc';
// newArray[3](); // return 'abc'

// if the second parametr isn't passed or it is a false value
// changing values in the based array don't  influence 
// on reterned values from the functions in the 
// trnasformed array.

// const newArray = transform(baseArray);
// newArray[3](); // return 40
// baseArray[3] = 'abc';
// newArray[3](); // return 40

function transform(arr, bool) {
    return arr.map( function(el, index) {
        return (function() {
            return bool ?  arr[index] : el;
        })(el)
    });
}