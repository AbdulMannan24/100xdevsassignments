/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a = str.toLowerCase();
  a = a.replace(/\s+/g, '').replace(/[^\w\s]/gi, '');
  let i = 0, j = a.length - 1;
  while (i < j) {
    if (a[i] == a[j]) {
      i++;
      j--;
      continue;
    }
    return false;
  }
  return true;
}

module.exports = isPalindrome;
