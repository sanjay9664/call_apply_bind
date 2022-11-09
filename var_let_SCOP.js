// variable decleared karte hai with "var" se js me
// to wo function scope hota hai

// variable decleared karte "let and const"  se
// to wo block scoped hota hai

// console.log(a);//undefined
// var a = 10;
// console.log(b);// coz =>ReferenceError: Cannot access 'b' before initialization
// let b = 20

// *******************************************
// var name = "sanjay";
// name = "gupta";  // this is possible to re-assained value

// console.log(name);

// 2] test -2nd

// function print(data) {
//   // *********function scoped********
//   if (data) {
//     // *********block scoped********
//     var name = "Sanjay";
//     var last = "gupta";

//     // console.log(name + " " + last);
//   }
//   // *********block scoped********

//   console.log(name + " " + last); // this is possible coz this function scoped
// } // *********function scoped********

// print(true);

// 3rd] task

// var belong = "India";

// if (true) {
//   var belong = "Newzeland";

//   console.log(belong);
// }

// console.log(belong); // ans dega kuki re-assained value

// *******************************************
// let a = 10;
// a = 20; // this is possible  re-assained value again
// console.log(a);

// 2] tasked use

// function print(data) {
//   // *********function scoped********
//   if (data) {
//     // *********block scoped********
//     let name = "Sanjay";
//     let last = "gupta";

//     // console.log(name + " " + last);  //here this is possible give the ans over here
//   }
//   // *********block scoped********

//     console.log(name + " " + last); //ReferenceError: name is not defined  (this is possible only block scope)
// } // *********function scoped********

// print(true);

// 3rd] scoped

// pahle to block se value liya uske bad sabse pahle
// let assained kiye use value india aa gai

// let belong = "India";

// if (true) {
//   let belong = "Newzeland";

//   console.log(belong);
// }

// console.log(belong); // ans dega kuki re-assained value

// output:=>Newzeland
//          India
// *******************************************

// const name = "sanjay";
// name = "gupta";   // not assain again because this is not possible

// console.log(name);//SyntaxError: Identifier 'name' has already been declared

// 2]task is going

// function print(data) {
//   // *********function scoped********
//   if (data) {
//     // *********block scoped********
//     let name = "Sanjay";
//     let last = "gupta";

//     // console.log(name + " " + last);  //here this is possible give the ans over here
//   }
//   // *********block scoped********

//   console.log(name + " " + last); //ReferenceError: name is not defined  (this is possible only block scope)
// } // *********function scoped********

// print(true);

// 3rd] method use

// pahle to block se value liya uske bad sabse pahle
// let assained kiye use value india aa gai

// const belong = "India";

// if (true) {
//   const belong = "Newzeland";

//   console.log(belong);
// }

// console.log(belong); // ans dega kuki re-assained value

// output:>Newzeland
//         India

// *******************************************

// 1]

// console.log(a) //ReferenceError: Cannot access 'a' before initialization

// console.log(b);//undefined

// let a =5;

// var b =6;

// console.log(b); // output 6

// 2]

// What is the difference between type error vs syntax error vs reference error.

// Give Examples of when you can encounter each one of them.

// *
// *
// *
// **
// const name = "sanjay";
// name = "gupta"; // not assain again because this is not possible

// console.log(name); //SyntaxError: Identifier 'name' has already been declared

// *
// *
// *
// *
// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a = 10;

// 3]

// console.log(a); //undefined

// var a = 5;

// console.log(b) //we havent initialized b, Guess the output

// output :=>ReferenceError: b is not defined

// 4]

// let a = 5;

// var b = 6;

// console.log(this.b);  //undefined

// console.log(window.b)   //ReferenceError: window is not defined

// console.log(window.a) //ReferenceError: window is not defined

// console.log(this.a); //undefined

// 5]

// What will be the error
// let a = 5;

// let a = 6;

// console.log(a);

// ans :=>SyntaxError: Identifier 'a' has already been declared


// 6]
// What will be the error

// let a =6;

// const b


// ans:=>SyntaxError: Missing initializer in const declaration



