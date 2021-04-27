/*  
Given a string, determine if you can remove any character to create a palindrome.
("abcdcbea") abcdcba=> abcdcba
# True
("abccra") 
# False
("abccaa") 
# False
*/

let isPal = (str) => str === str.split("").reverse().join("");

let palRemove = (str, k) => {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp = str.slice(0, i) + str.slice(i + 1, str.length);
    if (isPal(temp)) {
      console.log(str[i]);
      return true;
    }
  }
  return false;
};

let func = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      for (let j = i; arr[j] == k; j++) {}
      return j;
    }
  }
  return 0;
};

console.log(palRemove("abccaa"));
