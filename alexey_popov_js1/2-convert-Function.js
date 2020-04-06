// 2) Write a function convert

// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

// 2 function convert

// the function get keys of data 
// and form an array of values

function convert(data) {
  return Object.keys(data).map( function(el) {
    return [el, data[el]];
  });
};