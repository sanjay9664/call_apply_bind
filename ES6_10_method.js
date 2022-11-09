// 1]
// console.log('a');

// console.log('b');

// setTimeout(()=> console.log('c'), 1000);

// console.log('d');

// output:=>
// a
// b
// d
// c

// 2]

// console.log('a');

// console.log('b');

// setTimeout(()=> console.log('c'), 1000);

// setTimeout(()=> console.log('c'), 0);

// console.log('d');

// output:=>
// a
// b
// d
// c
// c

// 3rd




// *
// *
// *
// *
// *
// *********************************************************************************
// Write down the 10 new features introduced in ES6 along with
//  what they mean and where they could be used ?

// variable decleared karte hai with "var" se js me
// to wo function scope hota hai

// variable decleared karte "let and const"  se
// to wo block scoped hota hai

// console.log(a);//undefined
// var a = 10;
// console.log(b);// coz =>ReferenceError: Cannot access 'b' before initialization
// let b = 20
// ***************************************************************************************************
// 2nd features
// Arrow function :=>

// (arrow function bhaut se chije nahi kar payega jaishe (new keyword use nahi kar sakte (eska kud ka "this" nahi hota)) )

// ex of the arrow

// let squre = (num)=>{

//     var value = num *num

//     console.log(value)
// }

// squre(2)


// ***************************************************************************************************
// 3rd

// Multi line String

// //  but esme multiple line likh sakte hai kuki esme back tick ka use kiye hai
// let address = `esme ham multiple value likh sakte hai bina kisi comma ke ese back tick kahte hai  `;

// console.log(address);

// another ex

// let form = `
// <form>
// <input type="text" name="name"/>
// <button> ok <button/>
// <form/>`;

// console.log(form);
// // but str1

// // esme multiple line nahi likh sakte
// let str = "esme ham multiple line me nahi likh sakte nahi to error aa jayega jaishe hi mai enter press karenga to error aa jayega"
// ***************************************************************************************************


// 4rd

// Default Parameters
// agar mai parameter me already value pass kar deta hu to bahar 
// se value dene ki jarurat nahi hogi wo default parameter ki value le lega aur ans de dega
// const sum = (x=2 , y=5) => x + y;

// let s = sum();

// console.log(s);

// console.log(sum(3, 3));



// ***************************************************************************************************
// 5th

// Template Literals

// let x = 3

// let y = 5

// console.log(`my x value is ${x} and my y value is ${y}  i want to concatinate my x and y value then ${x+y}`)


// ***************************************************************************************************
// 6th

// Destructuring assaigment

// storing the value x , y  = 20 30

// let arr = [20, 30];

// let [x, y] = arr;

// console.log("my x value is ", x);

// console.log("my y value is", y);

// swap the two number

// let a = 4;

// let b = 5;

// console.log("my a value is", a);
// console.log("my b value is ", b);

//  After destructuring
//  [a, b] = [b, a]

//  console.log("my a value is", a);

//  console.log("my b value is ", b);

// obj des

// let obj = {
//   first_name: "sanjay",

//   second_name: "gupta",
// };

// let { first_name, second_name } = obj;

// console.log(first_name);

// console.log(second_name);

// ... abstract ka use desturturing me

// let arr = [22,33, 4, 5, 6, 7, 8];

// let [a, b, ...rest] = arr;

// console.log("my a value is ", a);

// console.log("my b value is ", b);

// console.log("my rest value is ", rest);


// ***************************************************************************************************
// 7th

// Enhanced Object Literals

// pahle obj aishe likhte the

// let obj = {

//     name : "sanjay",

//     last : "gupta",

//     display : function(){

//         console.log(this.name + " " + this.last)
//     }
// }

// console.log(obj)
// obj.display()

// ES6 style enhance features bta raha hu

// let name = "Sanjay";

// let last = "gupta";

// let obj = {
//   name,
//   last,

//   display() {
//     console.log(this.name + " " + this.last);
//   },
// };

// console.log(obj);

// obj.display();

// ek aur style obj create karne ka

// function createobj(a, b, c) {
//   return { a, b, c };
// }

// let store_obj = createobj(12, 22, 33);

// console.log(store_obj);



// ***************************************************************************************************
// 8th

// Promies

// pending ,resolved ,reject

// A JavaScript Promise object contains both the producing code and calls to the consuming code:

// let Pro = new Promise((resolv, reject) => {
//   //   pending state
//   setTimeout(() => {
//     let sanjay = true;
//     if (sanjay) {
//       resolv();
//     } else {
//       reject();
//     }
//   }, 5000);
// });

// Pro.then(() => {
//   console.log("sanjay your promies is fulfill");  // resolved state ye ayega
// }).catch(() => {
//   console.log("sanjay your promies is rejected");  // reject state me ye ayega
// });


// ****************************************************************************************************************
// 9th

// classes (constructor)

// class Student {
//   constructor(a, b, c) {
//     this.name = a;

//     this.last = b;

//     this.age = c;
//   }

//   display() {
//     console.log(this.name);
//   }
// }

// let data = new Student("Anuj", "singh", 21);

// console.log(data);

// data.display();




// ****************************************************************************************************************
// 10th

// terney opertor

// let data = 6 > 4 ? "this is true" : "this is false";

// console.log(data);

// What is array.map function . Please write the code of array.map function in
// plain javascript without using any inbuilt functions.

// map:=> (map function apko ek array bana ke dega jo v call back function
//     map function me provide karte hai wo har ek element ke liye excute hota hai
//    aur useme jo  v excution hota hai aur jo v  result ata hai use ek array ke form me
//   return karta hai  )

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.map(function (el) {

//   console.log(el);
// });

var newarr = arr.map(function (el) {
  el++;

  console.log(el);
});



// ****************************************************************************************************************