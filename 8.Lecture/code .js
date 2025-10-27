// 'object declearation in js


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
