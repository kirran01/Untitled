console.log("things will be good");
let nums = [8, 20, -2, 4, -6];

// <<<<<<<<<<<<<<<<<<<< Bubble sort >>>>>>>>>>>>>>>>>>>>

// let swapped;
// let bubbleSort = (nums) => {
//   let end = nums.length - 1;
//   swapped = false;
//   for (let i = 0; i < end; i++) {
//     if (nums[i] > nums[i + 1]) {
//       swapped = true;
//       let temp = nums[i];
//       nums[i] = nums[i + 1];
//       nums[i + 1] = temp;
//     }
//   }
//   end--;
// };
// do {
//   bubbleSort(nums);
// } while (swapped);

// console.log(nums);
// time complexity = 0n^2 space complexity=01

// <<<<<<<<<<<<<<<<<<<< insertion sort >>>>>>>>>>>>>>>>>>>>

// let insertionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j-1]) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// };

// console.log(insertionSort(nums), "insertion sort");

// time complexity = O(n)

// <<<<<<<<<<<<<<<<<<<< Mergesort >>>>>>>>>>>>>>>>>>>>

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) result.push(left.shift());
//     else result.push(right.shift());
//   }
//   return result.concat(left, right);
// }

// console.log(mergeSort(nums));

//O(nlogn)

// <<<<<<<<<<<<<<<<<<<< Quicksort >>>>>>>>>>>>>>>>>>>>

// let quickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// };

// console.log(quickSort(nums));

//time complexity = O(n*logn)

// <<<<<<<<<<<<<<<<<<<< AI Binary Search >>>>>>>>>>>>>>>>>>>>

// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const midValue = arr[mid];
//     if (midValue === target) {
//       return mid;
//     } else if (midValue < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return false;
// };

// const target = 4;
// const index = binarySearch(nums, target);
// console.log(index);
