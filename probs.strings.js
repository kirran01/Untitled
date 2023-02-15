//<<<<<<<<<<<<<<<<<<<< is anagram >>>>>>>>>>>>>>>>>>>>

// const isAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const sortStr1 = str1.split("").sort();
//   const sortStr2 = str2.split("").sort();
//   let isIt;
//   for (let i = 0; i < sortStr1.length; i++) {
//     if (sortStr1[i] == sortStr2[i]) {
//       isIt = true;
//     } else {
//       isIt = false;
//     }
//     return isIt;
//   }
// };

////////// DOES A STRING HAVE UNIQUE CHARS? //////

// const hasUnique = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (str[j] === str[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(hasUnique("abcd"));

//////////////////  Remove non-unique chars from a string /////////////

// let testStr = "abcdd";
// console.log(testStr.slice(testStr.length))
// let noUn = Array.from(new Set(testStr.split(""))).toString();
// let replaced = noUn.replaceAll(",", "");
// console.log(replaced);

///////  ARE 2 STRINGS PERMUTATIONS? /////

// const isPerm = (s1, s2) => {
//   if (s1.length !== s2.length) {
//     return false;
//   }
//   let converted1 = Array.from(s1).sort().toString();
//   let converted2 = Array.from(s2).sort().toString();
//   if (converted1 == converted2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPerm("zpoop", "pozpo"));

///////////////    URLify  /////////////////

// const urlify = (str) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char == " ") {
//       result += "%20";
//     } else {
//       result += char;
//     }
//   }
//   return result;
// };

// const testStr = "bang";
// const testStr2 = "b oom";
// let testStr2toArr = Array.from(testStr2);

// console.log(urlify("jingle bells bitch!"));

/////////// ONE EDIT //////////////

//i 2 strings
//o boolean
//c are they one edit
//e more than or equal to 2 char difference in length (false), if they are equal to each other when sorted (true)

//length-1 characters must be identical between strings
//loop through joined sorted strings
//compare each index
//if more than 1 character is different, return false, else return true.
//keep track of different characters

// let testStr1 = "juicd";
// let testStr2 = "juice";

// function oneEditAway(s1, s2) {
//   // Get the lengths of the strings
//   const str1Length = s1.length;
//   const str2Length = s2.length;
//   // If the difference in the lengths is more than 1,
//   // then they can't be one edit away
//   if (Math.abs(str1Length - str2Length) > 1) {
//     return false;
//   }
//   // Initialize counters for the strings
//   let i = 0;
//   let j = 0;
//   let count = 0;
//   while (i < str1Length && j < str2Length) {
//     // If the characters at the current positions are different,
//     // increment the count and move the pointer for the longer string forward
//     if (s1[i] != s2[j]) {
//       count++;
//       if (str1Length > str2Length) {
//         i++;
//       } else if (str1Length < str2Length) {
//         j++;
//       } else {
//         i++;
//         j++;
//       }
//     } else {
//       // If the characters are the same, just move both pointers forward
//       i++;
//       j++;
//     }
//   }
//   // If the strings are of different lengths and the loop has ended,
//   // we need to account for the extra character in the longer string
//   if (i < str1Length || j < str2Length) {
//     count++;
//   }
//   // Return true if the count is 0 or 1, false otherwise
//   return count <= 1;
// }

// console.log(oneEditAway(testStr1, testStr2));

//////////////////// STRING COMPRESSION /////////////////////

//i 1 string
//o 1 string
//c output must be of equal length or shorter
//e if the input parameter has a length of 3 or less,

// function compress(str) {
//   if (str.length <= 3) return str;
//   let result = "";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     count++;
//     if (str[i] !== str[i + 1]) {
//       result = result + str[i] + count;
//       count = 0;
//     }
//   }
//   return result;
// }

// let testStr = "aaabcccdde";
// console.log(compress(testStr));

////////////// gcd of 2 strings ////////////

// function gcd(str1, str2) {
//   if (str1 + str2 != str2 + str1) return "";
//   let compare = (w, str) => {
//     if (str.length == 0) return true;
//     if (!str.startsWith(w)) return false;
//     return compare(w, str.slice(w.length));
//   }
//   let res = "";
//   for (let i = 1; i <= str1.length; i++) {
//     let current = str1.slice(0, i);
//     if (compare(current, str2) && compare(current, str1)) res = current;
//   }
//   return res;
// }

// let testStr1 = "ABCABC";
// let testStr2 = "ABC";

// console.log(gcd("ABCABC", "ABC"));

///////////////////////  valid parentheses  ////////////////////
// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// function isValid(s) {
// let hash = { "(": ")", "[": "]", "{": "}" };
//   if (s.length % 2 === 1) return false
//   if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
//   if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
//   let stack = []
//   for(let i=0; i<s.length; i++) {
//       if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
//           stack.push(s[i])
//       } else if (hash[stack.pop()] !== s[i]) {
//           return false
//       }
//   }
//   return stack.length === 0
// }

// console.log(isValid("{}{}{}"));

////////////////////////////////////   length of last word     ///////////////////////////////

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// function lolw(str) {
//   let splitUp = str.split(" ");
//   let actualWords = [];
//   for (let i = 0; i < splitUp.length; i++) {
//     if (splitUp[i].length) {
//       actualWords.push(splitUp[i]);
//     }
//   }
//   let lastWord = actualWords[actualWords.length - 1];
//   return lastWord.length;
// }

// console.log(lolw("luffy is still joyboy"));

////////////////////////////////////   Plus one     ///////////////////////////////

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Input: digits = [9]
// Output: [1,0]

// var plusOne = function(digits) {
//     const fromArray = digits.join(''); // get Digits out of Array
//     const toInt = BigInt(fromArray) ; //Dont use parseInt, use BigInt instead :)
//     console.log(toInt)
//     const addOne = toInt + 1n; // add one!
//     console.log(addOne)
//     const result =  Array.from(String(addOne), Number); // return digits to array
//     return result
// };

// console.log(plusOne([1,2,3]));


