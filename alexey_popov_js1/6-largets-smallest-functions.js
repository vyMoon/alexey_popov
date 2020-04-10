// 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.

// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5

// 6 largest smallest functions

function largest() {
    return Array.prototopy.slice.call( arguments ).reduce( function (response, el) {
        //choose bigger value
        return response < el ? el : response;
    });
  };
  
function smallest() {
    return Array.prototype.slice.call(  arguments ).reduce( function(response, el) {
        //choose smaller value
        return response > el ? el : response;
    });
};