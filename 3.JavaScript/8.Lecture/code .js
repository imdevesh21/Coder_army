// 'object declearation in js

const { use } = require("react");

/*


let person = {
  name: "devesh",
  age: "23",
  occupation: "Software Developer",
  Tech_Stack: "Front-End && Back-End Coder"
}
console.log(person);

// create an object where subscribe user info is present as a data

let user = {
  username: "Dev_Xo",
  age: 24,
  subscribe_Premium: false,
  log_Count: 10,
};

// accessing specific info from obj
console.log(user.subscribe_Premium); //dot notation access

console.log(user["subscribe_Premium"]); //bracket notation

console.log()

// updating and adding properties

const book = {
  name: "Atomic Habits",
};

// update an existing properties
book.name = "Daily Stoic";

// Add a new Property
book.author = "Ryan Holiday";
book.releasing_Date = "Apr 2023";

console.log(book);

delete book.releasing_Date;
console.log(book);

// object with method(behavior)

const userOne = {
  name: "Alice",
  greeting: function(){
    // Here this refers to the userOne Object which is userOne name
    console.log(`Hello my name is ${this.name}`);
  }
};

userOne.greeting();

// Looping over an object(Iteration)

const car = {
  Brand: "TATA", SUV: false, type: "Petrol",
};

for (const key in car) {
  console.log(`Key: ${key}, value: ${car[key]}`)
}

// modern method to access the key value from the object

const cars = {
  make: "Honda",
  year: 2025,
  model: "Harrier",
};

console.log(Object.keys(car));
console.log(Object.values(car));

// the entries() method of perfect with a for ...of loop

for(const [key, value] of Object.entries(car)){
  console.log(`Key: ${key}, Value: ${value}`)
}

// Advance Concept
//A. Object are a reference type


let obj1 = {value: 10};
let obj2 = obj1; //copy the reference not the object
obj2.value = 20;  // Mutates the single object
console.log(obj1.value); //{the original was changed};


const mainUser = {
  name: "Alice",
  age: 32,
  mail: "Alice132@gmail.com",
  islogin: true,
  address: {
    country: "india",
    city: "jaipur",
  },
};

console.log(mainUser.address["city"]);
// how to copy an object(shallow copy)

const original = {
  name: "devesh",
  age: 25,
};

const shallCopy = {...original};
shallCopy.age = 21;
console.log(shallCopy);
*/ 

// modern value es6+

const name = "Alice";
const age = 34;

// const userOld = {name: name, age: age};
// const userNew = {name, age};
// console.log(userNew);


// method shorthand -- you can omit the function keyword when definging methods

// old way:
// const userOld = {
//   say: function() {
//     console.log("hello");
//   }
// };

// new way 

// const newUser = {
//   sayHi() {
//     console.log("hello");
//   }
// };

// console.log(userOld);
// console.log(newUser)

// computed property

import React from 'react';
// const propName = "email";

// const user = {
//   name: "Devesh",
//   [propName]: "devesh@gmail.com",
// }
// console.log(user);

// // modern way

// const userOne = {
//   name: "alice",
//   forklift: "Linde",
//   age: 20,
//   isStudent: true,
// };

// object.values( obj)
// const keys = Object.keys(userOne);

// for(const key of keys){

//   const value = userOne[key];
//   // console.log(`Keys: ${key}, Value: ${value}`)
// }

// const values = Object.values(userOne);

// for(const val of values){
//   // console.log(`The value is: ${val}`)
// }

// object.entries(obj)

// for(const [keys, value] of Object.entries(userOne)){
  // console.log(`Keys: ${keys} and the values ${value}`)
// }

// for... in

// const users = {
//   name: "Alice",
//   age: 24,
//   city: "frankfart",
//   country: "Germany",
// } 


// for (const key in users) {
//   const value = users[key];
//   console.log(`keys: ${key} of value ${value}`)
// }

// prototype

// function person(name){
//   this.name = name;
// }
// person.prototype.sayHi = function(){
//   console.log(`Hi, I'm + ${this.name}`);
// }

// const user1 = new person("devesh");
// user1.sayHi();

// why it is not consider to use the for-in loop

// Object.prototype.isInherited = true;

// const person = {name: "bob"};
// console.log("-------using for..in ---");

// for(const key in person){
//   console.log(key);
// }

// console.log("using object.keys");
// console.log(Object.keys(person))

// // to  avoid the extra inheritance in for in we have to add an extra check which makes it clumsy

// for(const keys in person){
//   if(person.hasOwnProperty(keys)){
//     console.log(keys);
//   }
// }


// shallow copy vs a deep copy

// const originalUser = {
//   name: "Alice",
//   age: 32,
//   address: {
//     city: "new-york",
//   }
// };

// // using the spread syntax to create a new object

// const newCopy = {...originalUser};

// newCopy.name = "devesh";
// console.log(originalUser.name);
// console.log(newCopy.name);

// // now change the property in the nested object
// newCopy.address.city = "boston";
// console.log(originalUser.address.city)

// const originalUser = {
//   name: "alice",
//   age: 30,
//   joined: new Date("2023-01-15"),
//   address: {
//     city: "new-york",
//   },
//   role: ["editor", "viewer"]
// };

// const deepCopy = structuredClone(originalUser);

// deepCopy.age = 31;
// deepCopy.address.city = "Boston";

// deepCopy.role.push("admin");

// deepCopy.joined.setFullYear(2024);

// console.log(originalUser);
// console.log(originalUser.address.city);
// console.log(deepCopy.address.city);
// console.log(deepCopy.role);


// // structured clone works fine with  object data but when comes to showcase cloning with the function it get's failed and give structclone error
// const originalObj = {
//   name: "sma",
//   sayHi: function(){
//     console.log("Say Hi");
//   },
// };
// try {
//   const clone = structuredClone(originalObj);
// } catch(error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// // alternate old way use a library _.clonedeep
// import _ from 'lodash';
// const realObj = {
//   name: "niuca",
//   age: 23,
//   sayHi() {
//     console.log("hi, there")
//   },
// };

// const lodashClone = _.cloneDeep(realObj);

// lodashClone.sayHi();
// console.log(realObj.sayHi === lodashClone.sayHi)

// destructring 

// const user = {
//   id: 1223,
//   name: "modi",
//   email: "pmo@gmail.com",
//   profile: {
//     admin: true
//   }
// };

// old way

// const name = user.name;
// const age = user.age;

// new way

// const {name, age} = user;
// console.log(name, age)

// renaming variable

// const {name: username, email} = user;
// console.log(username);

// seting personal values

// const {name: firstname, role = "user"} = user;
// console.log(firstname, role);

// nested destructing

// const user = {
//   id: 1223,
//   // name: "modi",
//   email: "pmo@gmail.com",
//   profile: {
//     admin: true
//   }
// };
// const {profile: {admin: isAdmin}} = user;
// console.log(isAdmin)

// array destructring

const arr = ["firstname", "lastname", "devesh", "sharma"];

const [na, last] = arr;
console.log(na, last);


const nums = [32, 324, 654, 756, 322];
// const [zero, one] = nums;
// console.log(zero, one);

// take middle value
const [first, , third] = nums;
console.log(first, third)


// symbol

const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log(sym1 === sym2);


// using symbol as a object key

const newUser = {
  name: "alice",
}

const secretId = Symbol("userId");

newUser[secretId] = "32XEDSFEF23";
console.log(newUser);

console.log(newUser[secretId]);

// cannot access it with a string

console.log(newUser["secretId"]);

// symbol are hidden form normal iteration

for(const key in newUser){
  console.log(key);
}

console.log(Object.keys(newUser));

const symbKeys = Object.getOwnPropertySymbols(newUser);
console.log(symbKeys);
console.log(newUser[symbKeys[0]]);
