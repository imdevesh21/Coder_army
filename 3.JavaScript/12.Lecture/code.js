// foreach, filter, reducer, map, set


// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr1 = [ 8, 9];
// // arr.forEach((element, index) => {
// //   console.log(element, index);
// // });


// arr.forEach(function(element){
//   arr1.push(element);
// })
// console.log(arr1.sort())
// console.log(arr);

// // calculating the square of every element

// let item = [4, 6];
// let squareOf = [];
// item.forEach(function(el){
//   squareOf.push(el * el);
// })
// console.log(squareOf);

// let colors = ["Red", "green", "blue"];
// colors.forEach((Element, index)=>{
//   console.log(`Index: ${index}, Name: ${Element}`);
// })
// // filter

// let nums = [1, 2, 3, 4, 5, 6, 7];

// let ans = nums.filter((number)=> number > 3);
// console.log(ans);


// // make custom method available for future proof 

// let newArr = [1, 3, 54, 5, 6];
// const newarr = newArr.filtering((num)=>num > 5);
// console.log(newarr);


// mapping

// const arr = [10, 20, 30, 5, 90, 87];

// const res = arr.map((num)=>num*2);

// console.log(res);


const items = [
  {
    id: 1,
    name: "Apple iPhone 15",
    category: "Electronics",
    price: 79999,
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 74999,
    inStock: false,
  },
  {
    id: 3,
    name: "Levi's Slim Fit Jeans",
    category: "Fashion",
    price: 2999,
    inStock: true,
  },
  {
    id: 4,
    name: "Nike Air Force 1",
    category: "Fashion",
    price: 7999,
    inStock: true,
  },
  {
    id: 5,
    name: "Broccoli (1 kg)",
    category: "Groceries",
    price: 120,
    inStock: true,
  },
  {
    id: 6,
    name: "Almonds (500g)",
    category: "Groceries",
    price: 450,
    inStock: false,
  },
  {
    id: 7,
    name: "Atomic Habits",
    category: "Books",
    price: 499,
    inStock: true,
  },
  {
    id: 8,
    name: "The Pragmatic Programmer",
    category: "Books",
    price: 799,
    inStock: true,
  },
  {
    id: 9,
    name: "Gaming Laptop",
    category: "Computers",
    price: 105000,
    inStock: true,
  },
  {
    id: 10,
    name: "Wireless Mouse",
    category: "Computers",
    price: 999,
    inStock: true,
  },
];

// const electronicsItems = items.filter((item) => {
  //   return item.category === "Electronics";
  // });
  
  // console.log(electronicsItems);
  
  // const groupProd = items.reduce((acc, item)=>{
//   acc[item.category] = acc[item.category] || [];
//   acc[item.category].push(item);
//   return acc;
// })

// console.log(groupProd);

// const itemPrice = items.filter((product)=>
  //   product.price > 2999
// ).sort((a,b)=>b.price-a.price)
// console.log(itemPrice);


// const ans = items.map((product)=>({name: product.name, price: product.price}));
// console.log(ans)

// ans.sort((a, b)=>b.price - a.price);
// console.log(ans);

// Array.prototype.filterItems = function(callback){
//   const res = [];
//   for(let i=0; i<this.length; i++){
//     if(callback(this[i], i, this)){
//       res.push(this[i]);
//     }
//   }
//   return res;
// }

// const itemFilter = items.filterItems((item)=>{
//   return item.price > 799;
// })
// // console.log(itemFilter)

// let sortPrice = itemFilter.sort((a, b)=> a.price - b.price);
// console.log(sortPrice)

// const inStockItem = items.filterItems(item => item.inStock === true);
// console.log(inStockItem);

// can make this more dynamic by passing property and value

// function filterByProp(arr, prop, value){
//   return arr.filterItems(items => items[prop] === value);
// }

// console.log(filterByProp(items, "category", "Electronics"))

// Array.prototype.mapping = function(callback){
//   let res = [];
//   for(let i=0; i<this.length; i++){
//     for (const element of this) {
//       if(callback(this[i], i, this)){
//         res.push(this[i]);
//       }
//     }
//   }
//   return res;
// }

// const fashionItems = items.mapping(item => item.category === "Fashion");
// console.log(fashionItems);

// reduce

// const price = items.reduce((accumulator, currentValue)=>{
//   return accumulator+currentValue.price;
// }, 0)

// console.log(price);

// let sum = 0;
// for (const element of items) {
//   sum += element.price;
// }
// console.log(sum)
// Array.prototype.customReduce = function(callback, initialValue) {
//   let acc = initialValue !== undefined ? initialValue : 0;
//   for(let i=0; i<this.length; i++){
//     acc = callback(acc, this[i], i, this);
//   }
//   return acc;
// }

// let newReduce = items.customReduce((acc, item)=> acc+item.price, 0);
// console.log(newReduce);


// set -- only unique value can be present

const arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8];

const s1 = new Set(arr);
// console.log(s1.add(19));


const email = ["dev@gm", "Dev@gm", "De@gm", "dev@gm"];

const uniqueEmail = [...new Set(email)];

// console.log(uniqueEmail);

for (const mail of uniqueEmail) {
  console.log(mail)
}

// map

const m1 = new Map([
  ["devesh", 21],
  ["dev", 22],
  [true, "software engineer"]
]);

// console.log(m1);

// m1.set({name: "debu", age: 21});
// // console.log(m1)
// // console.log(m1.get("devesh"));

// console.log(m1.has("devesh"));

// console.log(m1.delete("devesh"));
// console.log(m1)

// looping over a map

for (const [key, value] of m1) {
  console.log(key, value)
}
