// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). 
// myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
// Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like:

Function.prototype.myBind = function (context) {
    
    var argsBind = Array.prototype.slice.call(arguments, 1); // here is the array of the arguments passed to myBind 
    var originalFunction = this;                             // this is the function that should be treated

    // it is a returned function
    var boundedFunction = function() {
        var args = argsBind.concat(Array.prototype.slice.call(arguments, 0) );  // here is the array of the arguments passed to boundedFunction and myBind 

        return originalFunction.apply(context, args);
    };
    return boundedFunction;
}

// Example:

function addPropToNumber(number) { 
    return this.prop + number; 
}
var bound = addPropToNumber.myBind({ prop: 9 });

// console.log( bound(1) ) // 10
