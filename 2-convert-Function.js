// 2) Write a function convert

// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

// 2 function convert

function convert(data) {
    var responseArr = [];
  
    for (var key in data) {
      respondArr.push([key, data[key]])
    };
    
    return responseArr;
  };