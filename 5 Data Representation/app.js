const { F, f } = require("vt/lib/handler/csi");

let arr = [2, 4, 6, 5];

//! using methods
// let i = 1;
// let ans = arr.map((e,) => {
//     let value = e*i;
//     i *=10;
//     return value
// }).reduce((acc, sum) => acc + sum)
// console.log(ans)

//! using loop
// function digit(arr,base = 10){
//     let num = 0;
//     for(let i = 0 ; i<arr.length;i++ ){
//         num = num + arr[i] * Math.pow(base,i)
//     }
//     return num;
// }
// console.log(digit(arr,8))

//! convert decimal number to any type of number using base of that number , like binary , octal , hexa
function digit(arr, base = 10) {
  let num = 0;
  let hex = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  for (let i = 0; i < arr.length; i++) {
    arr[i] = typeof arr[i] === "string" ? hex[arr[i].toLowerCase()] : arr[i]; //convert a to f into number 
    num = num + arr[i] * Math.pow(base, i);
  }
  return num;
}
// base tell us which type of number we're passing to convert decimal
console.log(digit([1,2,4,7], 8)); // converting that number from octa to decimal        ( 0 -7 )
console.log(digit(['f','f','f',], 16)); // converting that number from hexa to decimal  ( 0 - F )
console.log(digit(arr, 10)); // converting that number from decimal to decimal          ( 0 - 9 )
console.log(digit([1, 0, 1], 2)); // converting that number from binary to decimal      ( 0 or 1 )
