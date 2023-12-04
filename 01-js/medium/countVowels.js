/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0
    let character;
    for (let i = 0; i < str.length; i++) {
        character = str[i];
        if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' || 
           character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U') {
              count += 1;
           }
    }
    return count;
}

module.exports = countVowels;