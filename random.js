// const people = [
//     { name: 'Alice', age: 30, city: 'New York' },
//     { name: 'Bob', age: 25, city: 'Los Angeles' },
//     { name: 'Charlie', age: 35, city: 'New York' },
//     { name: 'David', age: 28, city: 'Los Angeles' }
//   ];
//   const groupedByCity = people.reduce((acc, val) => {
//     acc[val.city] = acc[val.city] || [];
//     acc[val.city].push(val);
//     return acc;
//   }, {});
//   console.log(groupedByCity);

// function pascals(n) {
//   let pascalsTri = new Array(n);
//   for (let i = 0; i < n; i++) {
//     let row = new Array(i + 1);
//     row[0] = 1;
//     row[row.length - 1] = 1;
//     for (let j = 1; j < row.length - 1; j++) {
//       let rowAbove = pascalsTri[i - 1];
//       row[j] = rowAbove[j] + rowAbove[j - 1];
//     }
//     pascalsTri[i] = row;
//   }
//   return pascalsTri;
// }

// console.log(pascals(n));

// console.log(pascals(n).toString());
//            1
//          1   1
//        1   2   1
//      1   3   3   1
//    1   4   6   4   1

// let testArr = [3, 2, 1, 5];

//value
// let x = 2;
// let y = x;

// x = x + 2;
// console.log(x, y);
// y = y + 100;

// const bob = {
//   eyeColor: "brown",
// };

// const george = {...bob};

//reference - changing one will change the other
// console.log(george.eyeColor);
// george.eyeColor = "blue";
// console.log("george", george.eyeColor);
// console.log("bob", bob.eyeColor);

////////////   loop through array of objects /////////////

// let testArr = [
//   { 1: "apple", 2: "banana", 3: "cherry" },
//   { 1: "apple", 2: "banana", 3: "cherry" },
// ];

// function lp(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j in arr[i]) {
//       console.log(arr[i][j]);
//     }
//   }
// }

// lp(testArr);

///////////////////              Object sorting                //////////////////////////////

// let testObj = { a: "a", c: "c", b: "b" };

// function getVals(obj) {
//   for (var i in obj) {
//     console.log(obj[i]);
//   }
//   return obj;
// }

// testObj.e = "e";
// testObj.d = "d";

//sort by values
// const sorted = Object.entries(testObj).sort((a, b) => a[1] > b[1] ? 1 : -1);

//sort by keys
// const sorted = Object.entries(testObj).sort((a, b) => (a[0] > b[0] ? 1 : -1));

// testObj = Object.fromEntries(sorted);

// console.log(testObj);

//// sort 2d array
// let arr = [
//   [5, 2, 9],
//   [4, 8, 1],
//   [7, 3, 6],
// ];

// arr.sort((a, b) => {return a[1] - b[1]});

// console.log(arr);

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// let testStr = "hi bye why";
// function splitter(str) {
//   let strToArr = str.split(" ");
//   for (let i = 0; i < strToArr.length; i++) {
//     strToArr[i] += ` ${strToArr[i].length}`;
//   }
//   return strToArr;
// }

//splitter(testStr);

//////////////////////////////////////// Palindrome Number ////////////////////////////////

//121=true
//-121=false

// let testNum = 121;
// let arr1 = Array.from(testNum.toString()).map(Number);

// function palindromeNum(num) {
//   let arr1 = Array.from(num.toString()).map(Number);
//   let reversed = arr1.reverse().join('').toString();
//   if (num.toString() === reversed) {
//     return true;
//   } else if (arr1.length === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromeNum(testNum));

/// 

// let arr=[
//   { id: 1, val: "a", owner:'bob', runtime:'10' },
//   { id: 2, val: "b",owner:'jim', runtime:'5' },
//   { id: 3, val: "c",owner:'steve', runtime:'15' },
// ]


///