// About arrays

/*

let names = ["devesh", "debu", "ayush", "ritik"];
console.log(names);


// let num = [10, 20, 30, 40, 50];
// console.log(num);

// num[2] = 100;
// console.log(num)

// num.push(200);
// console.log(num);

// we can also create an empty array and provide elements later

const cars = [];
cars[0] = "BMW";
cars[1] = "Volkswagan";
cars[2] = "Maruti";

for (const car of cars) {
  console.log(car);
}

// array declearation using a new keyword

const persons = new Array("Devesh", "devesh", "sharma", "devesh");

console.log(persons);


// accssing array element

console.log(persons[0]);
// changing an element
persons[0] = "debu";
console.log(persons[0]);

// converting an array to a string

const fruits = ["Apple", "Mango", "Banana", "graps", "chilli"];
console.log(fruits.toString());

// accessing the full array

let count = ["One", "two", "three", "four"];
console.log(count);


// arrays are special types of object

console.log(typeof count);

// array with object

let userDetails = {
  name: "Devesh",
  age: "25",
  occupation: "unemployed",
  aspring_dream: "SDE at google, meta",
};

console.log(userDetails.name);

// Array elements can be objects

let arr = ["devesh", 23, true];
console.log(arr);

arr.name = arr[0];
console.log(arr.name);


// it is equivalent to 

let arr1 = {
  name: "Devesh",
  age: 25,
  coder: true,
};

console.log(arr1);

// Mixed type of array

let myArray = [];

myArray[0] = "devesh"; //string
myArray[1] = 25; //number
myArray[2] = true;//boolean
myArray[3] = function(){ //function
console.log("Hi from inside array! ");
}
myArray[4] = [1, 2, 3]; //array inside array
console.log(myArray);
myArray[3]();

// example 2

function myFunction(){
  return "this is my function";
}

let myCar = ["BMW", 2025, true];

let myCustomArr = [];
myCustomArr[0] = Date.now;
myCustomArr[1] = myFunction;
myCustomArr[2] = myCar;

console.log(myCustomArr[0]().toLocaleString());
console.log(myCustomArr[1]());
console.log(myCustomArr[2]);


let counting = ["one", "two", "three", "four"]
for (const count of counting) {
  console.log(count);
}
console.log(count.length);

console.log(count.sort())

// accessing the first and last element in array
console.log(count[0]);
console.log(count[count.length - 1]);

// types of decleration in array

let point = [];
point = ["A", "B", "C"];
console.log(point);
let points = new Array("A", "B", "C");
console.log(points)

// to recognize the array type
console.log(typeof(point));
console.log(typeof (Array.isArray(points)));
console.log(point instanceof Array);


const myObj = {
  name: 'John',
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]},
  ],
};

// Log all cars array
console.log("All cars:", myObj.cars);

// Loop through each car object
for (const car of myObj.cars) {
  // Log all details of each car
  console.log("Car brand:", car.name);
  console.log("Models:", car.models);
  
  // Loop through models of each car
  for (const model of car.models) {
    console.log("- " + model);
  }
  console.log("-------------------");
}

// If you want specific car details, e.g., only BMW
const bmw = myObj.cars.find(car => car.name === "BMW");
if (bmw) {
  console.log("BMW models:", bmw.models);
}


// let nums = [10, 20, 30, 40, 60];
// console.log(nums.shift());
// console.log(nums)
// console.log(nums.unshift());
// console.log(nums);

// copy by reference

// let arr = [1, 10, 12, 14, 16];
// let arr2 = arr;
// arr2.push(50);
// console.log(arr);


// let arr = [10, 30, 40, 50, 60];
// // arr = [70, 80, 90];
// console.log(arr);

// let cars = ["audi", "jaguar", "bmw"];
// cars[0] = "mercedes";
// cars.push("tata");
// console.log(cars)

// console.log(arr.slice(3))

// basic array methods

let arr = [1, 2, 4, 5, 6, 7, 8];
// length
console.log(arr.length);
// console.log(arr)
// arr.toString;

let nums = ["one", "two", "three", "four"];
// console.log(nums.toString());

// array at
// console.log(nums.at(2));

// console.log(arr.join("$"));

// push
// console.log(nums.push("five"));
// console.log(nums);

// pop

// console.log(nums.pop());
// console.log(nums)

// shift
// console.log(nums.shift());
console.log(nums) //shift does the same as pop perform but it remove the first element from an array

// unshift
console.log(nums.unshift("zero"));
console.log(nums); //does the same as push did but it add new element at the first place of the array

// delete
console.log(delete nums[0]);
console.log(nums); //using a delete method not consider because it give undefined insted of delete an item form that place

// concat
let firstName = ["devesh", "debu"];
let lastName = ["Sharma", "Joshi"];
console.log(firstName.concat(lastName));

// copyWithin
const fruit = ["banana", "orange", "apple", "mango"];
console.log(fruit.copyWithin(2, 0))


// flattering

let flat = [[1, 2], [3, 4], [5, 6]];
console.log(flat.flat());


// splice and slice

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "lemon", "kiwi"));
console.log(fruits);

console.log(fruits.slice(0, 1));
// toSpliced

// const months = ["Jan", 66666666


// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums);
// console.log(nums.join("*"))


// const persons = ["one", "two", "three", "four"];
// console.log(persons.splice(2, 2, "five", "eight"));
// console.log(persons);

// // console.log(persons.slice(3))
// const fruits = ["Mango", "Apple", "Banana", "guava"];
// console.log(fruits.splice(0, 2));
// console.log(fruits);


// sorting in array

// let numbers = [100, 2, 5, 1, 3];

// if a is smaller than b how to sort them in accending order
// numbers.sort((a, b)=>a-b);
// console.log(numbers);


// if b is smaller than in decending order
// numbers.sort((a, b)=>b-a);
// console.log(numbers)

// flattring in array

let mulArr = [1, [2, [3, [4]]]];
// console.log(mulArr.flat());

// multi-level flattring
let newArr = mulArr.flat(2);
console.log(newArr)


let jsArray = [];
jsArray[0] = "first item";
jsArray[1] = "second item";

console.log(jsArray.length);
console.log(jsArray[500]);

let mixedArr = ["devesh", 1223, true, {id: 1}];
console.log(mixedArr)


// JavaScript array search

let search = ["one", "two", "three", "four", "one"];
console.log(search.indexOf("one"))

// lastIndexOf

console.log(search.lastIndexOf("one"))

// include

console.log(search.includes("one"));


const numbers  = [4, 9, 16, 20, 25];
// let first = numbers.find(myFunc);
let first = numbers.findLastIndex(myFunc);
function myFunc(value, index, array){
  return value > 18;
}
console.log(first)

// sorting technique in array

let sortLetters = ["B", "C", "D", "A"];
console.log(sortLetters.sort().toLocaleString())

// reversing in array
console.log(sortLetters.reverse().sort());

// toSorted() the difference between the sort and toSorted() is that fist method make a new array with applied changes and the second method alters the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
function toSorted(){
  return months.sort();
}
console.log(toSorted());

console.log(months.toReversed())

// numeric sort 

const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
  // return b-a;
  // })
// console.log(points);

// sorting an array in random order
points.sort(function(){
  return 0.5 - Math.random();
})
// console.log(points);

// fisher yates mehtod

const point = [123, 12, 21, 56, 1, 6, 74];

for(let i = point.length-1; i > 0; i--){
  let j = Math.floor(Math.random() * (i + 1));
  let k = point[i];
  point[i] = point[j];
  points[j] = k;
}
*/

// finding min and max in an array

// let nums = [1223, 121, 1253, 5461, 21, 321];
// nums.sort(function(a,b){
//   // return a-b;
//   return b-a;
// })

// console.log(nums);

// // using math op min and max

// function myArrayMin(arr) {
//   return Math.min.apply(null, arr);
// }
// console.log(myArrayMin([1, 5, 2, 9, 3]));

// function findMax(arr){
//   return Math.max.apply(null, arr);
// }

// console.log(findMax([1223, 121, 1253, 5461, 21, 321]));

// Array Iteration method

// const nums = ["A", "B", "C", "D"];

// nums.forEach((element)=>console.log(element));

// JS Array Map()

// const num1 = [45, 4, 9, 16, 25];
// const num2 = num1.map(myFunction);

// function myFunction(value, index, array){
//   return value * 2;
// }
// console.log(num2);

// flatMap method

// const newNum = [312, 1213, 21, 23, 1, 5];
// const newNum1 = newNum.flatMap((x)=>x*2);
// console.log(newNum1);

// array filter

// const nums1 = [23, 23, 122, 645, 62];
// const ans = nums1.filter(myFunc);

// function myFunc(value){
//   return value > 18;
// }

// console.log(ans);


// const numbers = [23, 34, 12, 64, 75];
// let sum = numbers.reduce(myNewFunc);
// function myNewFunc(total, value){
//   return total + value;
// }
// console.log(sum);

// every method

// const numbers =  [45, 4, 9, 16, 25];
// let ans = numbers.every((value)=>{
//   return value > 18;
// })
// console.log(ans);

// some

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(someOver18);

// form

const myNum = [1, 2, 3, 4];

const myArr = Array.from(myNum, (x)=>x*2);
console.log(myArr);

// keys

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//   text += x + "<br>";
// }

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();

for(let x of f){
    console.log(x)
}

// spread
console.log(...fruit);


// rest
let a, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr1;
console.log(rest);


function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- an array
