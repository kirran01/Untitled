///////////////  smaller to right //////////////////

// let testArr = [-1, 5, 3, -5, 3, -3];

// function smallerToRight(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   console.log(result);
//   return result;
// }

// console.log(smallerToRight(testArr));
// output : [2, 4, 2, 0, 1, 0]

//////////////////////////////////////// Longest Common Prefix ////////////////////////////////

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// function prefix(arr) {
//   if (!arr.length) {
//     return "";
//   }
//   for (let i = 0; i < arr[0].length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[0][i] !== arr[j][i]) {
//         return arr[0].slice(0, i);
//       }
//     }
//   }
//   return arr[0];
// }

// function lp(arr){
//   if (!arr.length) {
//     return "";
//   }
//   for (let i = 0; i < arr[0].length; i++) {
//     console.log(arr[0][i])
//     for (let j = 1; j < arr.length; j++) {
//       console.log('       ',arr[j][i])
//     }
//   }
// }

// console.log(lp(["123","456"]));

//////////////////  numbers to phone number  /////////////

// let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function toPhone(arr) {
//   return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6, 10).join('')}`;
// }
// console.log(toPhone(testArr))

///////////////// find unique num /////////////////

// let testArr = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1];

// function findUniq(arr) {
//   const uniqueElements = arr.filter((value) => {
//     return arr.indexOf(value) == arr.lastIndexOf(value);
//   });
//   return +uniqueElements;
// }

// console.log(findUniq(testArr));

////////////////////////////  two sum ////////////////////////////
//[1,2,3,4]
//target = 3
//output =[0,1]

// let testArr = [1, 2, 3, 4, 5];
// let testArr2 = [6, 7, 8, 9, 10];
// let testArr3 = [3, 2, 4];
// [1,2,2,4,3,1]

// function twoSum(arr, target) {
//   if (arr.length <= 1) return "not enough numbers";
//   let result = [];
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[i] + arr[j] == target&&i!==j) {
//         result.push(i, j);
//         return result;
//       }
//     }
//   }
//   return result;
// }

// console.log(twoSum(testArr3, 6));

/////////////////////////////  remove dups ///////////////

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = (nums) => {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        nums[i+1] = nums[j];
      }
    }
    return i+1;
  };
  
console.log(removeDuplicates([1,1,2]));
