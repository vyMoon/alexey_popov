// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// 4 function wordsReverse

function wordsReverse(str) {
    return str.split(' ') // split the sentence into words
            .map( function(el) {  // reverse every word
              return el.split('').reverse().join('');
            }) 
            .join(' '); // and join them into sentence
};