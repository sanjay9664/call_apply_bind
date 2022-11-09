// What will be the output of the following?

// // 1)

// var a = 50;   // a is shadowing is another a availble in block scope

// {
//   var a = 30;

//   let b = 20;

//   let c = 30;
// }

// console.log(a); // ans is 30 this is block scope and with var varibale to access evey where

// 2]

// const a = 50;

// {

// var a =30;  //SyntaxError: Identifier 'a' has already been declared

// let b = 20;

// let c = 30;

// }

// console.log(a) //SyntaxError: Identifier 'a' has already been declared

// 3)

// let a = 50;

// {

// var a =30;

// let b = 20;

// let c = 30;

// }

// console.log(a) //SyntaxError: Identifier 'a' has already been declared

// 4) (THINK SMARTLY BEFORE ANSWERING THIS)

// var a = 50;

// function fun(){

// var a =30;

// let b = 20;

// let c = 30;

// }

// fun();

// console.log(a) // access the globle variable

// 6)

// const a = 10;

// {

// var a = 10;

// }

// console.log(a)  //SyntaxError: Identifier 'a' has already been declared

// 7)

// const a = 10;

// {

// const a = 20;

// {

// const a = 50;

// console.log(a);

// }

// console.log(a)

// }

// console.log(a)

// this is given the value  declear the const varible coz this have own scope

// 9) Explain what did you understand by lexical scope in your own words

// ans:parents function is calling the innter function but inner function is not calling the
// parent function

function parent() {
  let a = "my name is sanjay";

  console.log(a + " " + b); //ReferenceError: b is not defined
  inner();
  function inner() {
    var b = "and my last name is gupta";

    // console.log(a + " " + b);
  }
}

parent();
