// var sum = function (a) {
//   console.log("hi sanjay");

//   var c = 4;

//   return function (b) {
//     return a + b + c;//5+2+4 = 11
//   };
// };
// let data = sum(5);

// console.log(data(2));

// ****************************************************************

// 2nd question

// let sum = function (a, b, c) {

//    return {

//     gettwoad:function(){
//         return a+c;
//     },

//     getaddthree: function(){

//         return a+b+c
//     }
//    }
// };

// var data = sum(2, 3, 5);

// console.log(data.gettwoad())
// console.log(data.getaddthree())

// ****************************************************************

// 1)

// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);   //calling the function functionScope to block scope
//                      // this is possibale becoz use the "VAR"var use
//   }

//   y();
// }

// x();

// 2)

// function x(){

// let a = 10;

// function y(){

// console.log(a);  //calling the function functionScope to block scope
//                 // this is possibale becoz use the "LET"var use  THIS IS REASSAIN VALUE

// }

// return y();

// }

// x();

// 3)
// function x() {
//   let a = 10;

//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// console.log(x());

// 4)
//  function x(){

//     let a = 10;

//     function y(){

//     console.log(a);

//     }

//     return y;

//     }

//     const z = x()

//     console.log(z());

// what is closure ?

// ans:=> A function can access all variables defined inside the function, like this:

// function myFunction() {
//   let a = 4;
//   return a * a;
// }

// let data = myFunction();

// console.log(data);  //16

// But a function can also access variables defined outside the function, like this:

// let a = 4;
// function myFunction() {
//   return a * a;
// }

// console.log(myFunction()); // 16

// *******************************************************************

// A Counter Dilemma
// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

// You could use a global variable, and a function to increase the counter:

// Initiate counter
let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;

//   console.log(counter);
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The counter should now be 3

// It did not work because we display the global counter instead of the local counter.

// We can remove the global counter and access the local counter by
// letting the function return it:

// Example
// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}
// Trying to increment the counter
function myFunction() {
  return add();
}

console.log(myFunction());
