// // // use the call

// // var obj = {num: 5}

// // var fun =  function(a){

// //     return this.num + a
// // }

// // // funtion_name.call(obj_name, argument)

// // console.log(fun.call(obj, 5))

// var obj = { num: 5 };

// var fun = function (a, b, c) {
//   return this.num + a + b + c;
// };

// // function_name.call.(obj, argument)

// // console.log(fun.call(obj, 5, 2, 3));

// // apply use here

// var arr = [1, 2, 3];

// // console.log(fun.apply(obj, arr))

// // bind use here

// var bound = fun.bind(obj);

// console.log(bound(1, 2, 3));

// call use here

// var obj = { num: 5 };

// var dam = function (a, b, c) {
//   return this.num + a + b + c;
// };

// function_Name.call(object_name_you_give , argument)

// console.log(dam.call(obj, 4));

// apply use here

// var arr = [1, 2, 3];

// console.log(dam.apply(obj, arr));

// bind use here

// let bound = dam.bind(obj);

// console.log(bound(1, 2, 3));

// use the call here

// var obj = { num: 5 };

// var fun = function (a, b, c) {
//   return this.num + a + b + c;
// };

// // call is provide some rule

// // function_name.call(obj , argument)

// console.log("this is my call value ", fun.call(obj, 1, 2, 3)); // output = 17

// // use the apply

// var arr = [1, 2, 3];

// console.log("this is my apply value : ", fun.apply(obj, arr));

// // bind using overhere

// let bound = fun.bind(obj);

// console.log("this is my bind value :", bound(1, 2, 1));

// Write a function and use 'call' to call the function

// var obj = {value : 5 }

// var fun = function(a){

//     return this.value + a
// }

// function_name.call(obj, argument)

// console.log("this is my call value" , fun.call(obj, 4))

// Write a program using apply ?

// var obj = {num: 5}

// var fun = function(a,b,c){

// return this.num+a+b+c
// }

// var arr = [1,2,3]

// console.log("this is my apply value " , fun.apply(obj, arr))

// Write a program using bind ?

// var obj = {myval:6}

// var fun = function(a,b,c){

//   return this.myval + a+b+c
// }

// let bonnd = fun.bind(obj)

// console.log("this is my bind value ",bonnd(1,2,8))

// Create a new object called Student with age 20 ,
//  write a function which prints the age of the student from the student object.
// Dont pass in args. Read from 'this' and use BIND

var student = { age: 20 };

var fun = function () {
  return this.age;
};

let bound = fun.bind(student);

console.log(
  "this is student age with help of bind without pass argument :=>",
  bound()
);
