// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// 4 function wordsReverse

function wordsReverse(str) {
    // split the sentence into words
    var wordsArr = str.split(' ');
    // returns the sentence with reversed words
    return wordsArr.map( function(el) {
      return el.split('').reverse().join('');
    }).join(' ');
};