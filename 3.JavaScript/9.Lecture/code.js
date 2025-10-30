// three stages of any function is declearation, calling, parameter & return value

// function greet(name){
//   const message = `Hello ${name}`;
//   return message;
// }

// const greetingFor = greet("devesh");
// console.log(greetingFor)

// const greetForDebu = greet("debu");
// console.log(greetForDebu);


// // function declearation with parameters

// function sum(nums1 = 0, nums2 = 0, nums3 = 0, nums4 = 0){
//   const add = nums1 + nums2 + nums3 + nums4;
//   return add;
// }

// const ans = sum(5, 8);
// console.log(ans);


// function output(...num){ //using rest operator to make our parameter scalable w'r't to value
//   let sum = 0;
//   for (const n of num) {
//     sum += n;
//   }
//   console.log(sum,)
// }

// output(3, 6);
// output(6, 77, 4);
// output(23, 43, 6, 2);

// hoisting

// var hoisted and initialized to undefined

// console.log(x);
// var x = 32;
// console.log(x);

// let and const hoisted but in tdz in until initialized
// console.log(y); //gives us and reference error
// const y = 323;

// console.log(z); //same give us an reference error
// let z = 33;


// console.log(sayHi());

// function sayHi(){
//   return `Hello there!`;
// }

// with function expression
// foo();
// var foo = function() {
//   console.log(`Say goodbye!`);
// }

// // bar();
// const bar = () => {
//   console.log(`hello from bar!`);
// }

// // with classes

// // const c = new point();
// class point{
//   constructor(x, y){
//     this.x = x; this.y = y;
//   }
// }

// // block scope hoisting(let/const)

// {
//   // console.log(x);
//   let x = 34;
// }


// //var in loops and closure pitfall
// for(var i=0; i<3; i++){
//   setTimeout(()=>{
//     console.log(i);
//   }, 2000);
// }

// for(let j=0; j<3; j++){
//   setTimeout(()=>{
//     console.log(j);
//   }, 3000);
// }

// two phase explanation with a single demo

// console.log(typeof myfunc);
// console.log(typeof myvar);
// // console.log(typeof mylet);

// function myfunc(){
//   return 1;
// }
// var myvar = 3;
// let mylet = 2;
// // difference between spread and rest operator

// // rest
// const nums = [10, 20, 30, 40, 50, 60];
// const [first, second, ...num] = nums;
// console.log(first, second, num);

// // spread

// const arr = [10, 20, 30];
// const arr1 = [40, 50 , 60, 70];

// const ans = [...arr, ...arr1];
// console.log(ans);

// // function -> function decleation, function expression

// function firstMethod(){
//   return `We have declear a function using a function decleation`;
// }

// console.log(firstMethod());

// // function expression

// let subtract = function subtracting(a, b){
//   console.log(`this is a function expression`);
//   return a - b;
// }

// console.log(subtract(10, 4));


// // using modern method using a function arrow method

// const multiply = (A, B) => {
//   console.log(`this is a arrow function`);
//   return A * B;
// }

// console.log(multiply(19, 2));

// // shorthand in arrowfunction

// const add = (num1, num2) => num1 + num2;
// console.log(add(5, 3));

// let arrSort = [23, 534, 652, 1, 5, 76];

// arrSort.sort((a, b)=> a - b);
// console.log(arrSort);

// const expo = num => num * num;
// console.log(expo(6));

// const user = () => {
//   return {
//     name: "devesh",
//     age: 34,
//   };
// };

// console.log(user().name)

// // advance concept
// // a. you can pass default value for parameter in case it's not passed 

// const userActive = ((role = "Admin")=>{
//   console.log(`Hey!, ${role} is logged-in! `)
// })

// userActive();

// // rest para

// function sumAll(...numbers){
//   let total = 0;
//   for(const num of numbers){
//     total += num;
//   }
//   return total;
// }

// console.log(sumAll(23, 323, 4423, 232));

// // scoping in the function 

// let globalVar = "I am global";

// function myFunction(){
//   let localScope = "I am local";
//   console.log(globalVar);
//   console.log(localScope);
// }

// myFunction();

// // console.log(localScope);


// spread vs rest operator -> they both share the same syntax but both have different functioning

// const numbers = [1, 2, 3];

// console.log(...numbers);
// console.log(numbers)


// practical usage ---> combining arrays

// const extraNum = [4, 5, 6, 7];
// console.log(...numbers, ...extraNum);

// copying an array
// const arr = [...numbers];
// console.log(arr);
// passing an array element as a function argument
// function add(a, b, c){
//   return a+b+c;
// }

// console.log(add(...numbers));

// object

// const person = {name: "Alice", age: 23};

// const updatePerson = { ...person, role: "Admin"};
// console.log(updatePerson);

// overwriting properties

// const olderPerson = { ...person, age: 60};
// console.log(olderPerson);


// rest operator (collecting/unpacking);

// function add(...num){
//   console.log(num);
//   return num.reduce((total, value)=> total + value, 0);
// }
// console.log(add(1, 2, 3, 4, 5, 6));

// function introduce(greeting, ...name){
//   console.log(greeting);
//   console.log(name);
// }

// introduce("Hello", "Alice", "charlie", "bob");

// // destructing

// const defaultNum = [1, 2, 3, 4, 5];

// const [first, second, ...others] = defaultNum;
// console.log(first);
// console.log(second);
// console.log(others);

// destructing in object

// const person = {
//   name: "devesh",
//   age: 23,
//   role: "developer",
//   city: "nyc",
// };

// const {name, age, ...other} = person;
// console.log(name);
// console.log(age);
// console.log(other);


// using both

// function user(name, age, ...hobbies){
//   console.log(`${name} is ${age} year old!`);
//   console.log(`hobbies: ${hobbies}`)
// }

// const personDetails = ["Devesh", 34, "coding", "football", "physics"];

// user(...personDetails)


// IIFE Immediately invoked function

// (function username(){
//   console.log(`Hello`);
// }());


// callbacks

// function greet(){
//   console.log("Hello!");
// }

// function meet(callback){
//   console.log("Hello, this side devesh!");
//   callback(); 
//   console.log("Nice to meet you");
// }

// meet(greet);

function blinkitOrder(){
  console.log("You're order been placed and in packaging stage!");
}
function zomatoOrderPlaced(){
  console.log("Order is preparing.")
}
function payment(amount, callback){
  console.log(`${amount} payment has been initialized.`);
  console.log("Payment is received");
  // zomatoOrderPlaced();//this is the hard coded so we replace it with callback
  callback();
}

payment(500, zomatoOrderPlaced);
