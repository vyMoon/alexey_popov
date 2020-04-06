// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.

// Example:
// countDown(3); // 3 2 1 0

// 9 countDown Function

function countDown(num) {
    // if passed value can't be parsed to a number 
    // or if the passed value less than 0
    if ( isNaN(num) )  {
        return;
    };
    var counting = setInterval( function() {
        if ( num >= 0) {
          console.log(num--);
        } else {
          clearInterval(counting);
        }
    }, 1000);
};