/////////////////////////////  number to roman   /////////////////////

// function solution(number) {
//   var map = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let output = "";
//   for (var i in map) {
//     while (number >= map[i]) {
//       console.log("ya");
//       output += i;
//       number -= map[i];
//     }
//   }
//   return output;
// }

// console.log(solution(8));

////////////////////////// roman to number ////////////////

// function solution(s) {
//   var map = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     console.log(map[0])
//     if (map[s[i]] < map[s[i + 1]]) {
//       total += map[s[i + 1]] - map[s[i]];
//       i++;
//     } else {
//       total += map[s[i]];
//     }
//   }

//   return total;
// }

// console.log(solution("VI"));
