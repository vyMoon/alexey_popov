// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// 3 toCamelCase function

// split the string into words by regExp and then compound the response
// reduce keep the first word and makes the first letter of the other words capitalized 

function toCamelCase(str) {
    return str.split(/-|_/).reduce( function(response, el, index) {
      return response + el.charAt(0).toUpperCase() + el.slice(1)
    });
}