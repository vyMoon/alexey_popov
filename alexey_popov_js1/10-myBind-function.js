// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). 
// myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
// Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like:

// it is not claer should I add only first number or every, so I dicided to make a function that 
// can recive a list of paramtrs and  summ all of them.

Function.prototype.myBind = function (context) {
    function adder(arr) {
        // aader recives an array of arguments and checks each argument
        // if an argument a Number, or cam be a number it adds them
        // and ignores an other values
        // but we can have not a good results as it miss silently not a number values and values that can't be parsed as a number
        var response = 0;
        arr.forEach( function(el) {
            var elToNum = parseInt(el);
            if (typeof elToNum == 'number' && elToNum === elToNum) {
                response += elToNum;
            }
        })
        return response;
    };
    // here is the summ of the arguments passed to myBind 
    var argsBind = adder(Array.prototype.slice.call(arguments, 1));
    // it is a context
    var originalFunction = this;
    // it is a returned function
    var boundedFunction = function() {
        // here is the summ of the arguments passed to boundedFunction and myBind 
        var argsCall = adder(Array.prototype.slice.call(arguments, 0)) + argsBind;
        
        return originalFunction.call(context, argsCall);
    };

    return boundedFunction;
}

// Example:

// function addPropToNumber(number) { 
//     return this.prop + number; 
// }

// var bound = addPropToNumber.myBind({ prop: 9 }, 1,2,3);

// console.log( bound(1) ) // 10