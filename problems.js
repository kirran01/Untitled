///////////////////   cyclops number  /////////////////

// function cyclops(n) {
//   let binary = n.toString(2).split("0");
//   return binary.length == 2 && binary[0] == binary[1];
// }
// let x = 5;
// console.log(x.toString(2));
// console.log(x.toString(2).split("0"), "split");
// console.log(cyclops(x));

////////////////////////sum all odd fibonacci//////////////////////

//(7) = 10 ---> (1),(1),2,(3),(5)
//(4) = 5 ---> (1),(1),2,(3)

// function sumOddFibs(num) {
//   let a = 1;
//   let b = 1;
//   let sum = 1;
//   while (b <= num) {
//     if (b % 2 == 1) {
//       sum += b;
//     }
//     let temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return sum;
// }

// console.log(sumOddFibs(3))
