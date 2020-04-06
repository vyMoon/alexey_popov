// 5) Write a function stringExpansion

// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: 
// The numeric values represent the occurance of each letter preceding that numeric value. 
// There should be no numeric characters in the final string. Empty strings should return an empty string.

// The first occurance of a numeric value should be the number 
// of times each character behind it is repeated, until the next numeric value appears.

// stringExpansion('3D2a5d2f') === 'DDDaadddddff'

// If there are two consecutive numeric characters the first one is ignored.
// stringExpansion('3d332f2a') === 'dddffaa'

// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
// c

// Your code should be able to work for both lower and capital case letters.

// it wasn't entirely clear can I have a string .
// that have two and more alphabetic character in a row after a digit,
// and what should I do in this case.
// but if we take a look at this examle 
// stringExpansion('abcde') === 'abcde'
// we can gues that it is possible
// So I decided to make only 3t into ttt in 3ty patter, for instance 

// 5 stringExpansion function

function stringExpansion(str) {
    // the regExp for seeking numeric characters with alphabetic charcter in neibour position
    // it allows to  find also a row if numeric characters  with alphabetic character in neibour position
    var sp = /\d+\w/;
    // get array of cluster of the string that consist number or numbers and a letter behind it
    // chunk[0] contain the string of digits + letter
    // chunk.index contain the position in the string 
    var chunk = sp.exec(str);
    // if chunk == null there is no digit into the string so we can return the string
    if (chunk === null) {
      return str;
    }
    //get number + letter
    var pattern = chunk[0].slice(-2);
    var replacingStr = '';
    // and make string that it will put into the string instead of the chunk
    var digit = parseInt(pattern.charAt(0));
    if (typeof digit === 'number' && digit === digit) {
      for (var i = 0; i < digit ; i++ ) {
        replacingStr += pattern.charAt(1);
      }
    };
    // compound the respnse 
    //slice the chunk, put the replacing string 
    // and use recursion with the rest of the string
    var response = str.slice(0, chunk.index) + replacingStr;
    var rest = str.slice(chunk.index + chunk[0].length);
  
    return response + stringExpansion(rest);
}