// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// 3 toCamelCase function

function toCamelCase(str) {
    // check dashes and underscore into the string
    var dash = str.indexOf('-');
    var underscore = str.indexOf('_');
    // if there is no dashes or underscores into the string return string
    if ( dash === -1 && underscore === -1 ) {
      return str;
    };
    // chose the separator into the string 
    // snd split the string into words
    var separator = dash > -1 ? '-' : '_';
    // makes the response. 
    // compound the respond string and makes the first letter of each words capitalized exept the first one 
    return str.split(separator).reduce( function(response, el) {
      return response + el.charAt(0).toUpperCase() + el.slice(1);
    });
}