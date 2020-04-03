// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.

// Example:
// countDown(3); // 3 2 1 0

// 9 countDown Function

function countDown(num) {
    // if passed value can't be parsed to a number 
    // or if the passed value less than 0
    if ( num < 0 || Number.isNaN( parseInt(num) ) ) {
        return
    }
    // makes the record in the console 
    // uses decrement
    // uses reursion
    console.log(num--);
    countDown(num);
}