// understading the scope


// >>> scope -> global scope, function scope, block scope

// const globalVar = "I am global";

// function someFunc(){
//   console.log(globalVar);
// }

// someFunc();

// console.log(globalVar);

// function scope

// function funcScope(){
//   let scope = "I am functional scope";
//   console.log(scope);
// }
// // console.log(scope);
// funcScope();

// block scope

// if(true){
//   let blockVar = "I'm in a block";
//   const alsoBlockvar = "me too";
//   var notBlockScope = "I'm different";
//   console.log(blockVar);
// }

// console.log(notBlockScope);
// console.log(blockVar);
// console.log(alsoBlockvar);


// let global = 30;

// function greet(){

//   let global = 40;

//   function meet(){
//     console.log(global);
//   }
//   meet();
// }

// greet();


// var is not blocked scope only function scope

// function testVar(){
//   if(true){
//     var x = 10;
//   }
//   console.log(x);
// }
// testVar();

// function testLet(){
//   if(true){
//     let y = 20;
//   }
//   console.log(y);
// }
// testLet();


// function createCounter(){
//   function increment(){
//     console.log("I am an increment function.")
//     // return 20;
//   }
//   return increment;
// }
// // createCounter();

// const count = createCounter();
// count();

// function createCounter(){
//   let count = 0;
//   function raiseCount(){
//     count++;
//     return count;
//   }
//   return raiseCount();
// }

// let counter = createCounter();
// // console.log(counter())

// console.log(counter);


// closure

// function outer(){
//   let name = "devesh";
//   function inner(){
//     console.log("Hello, " + name);
//   }
//   return inner();
// }

// const greet = outer();
// // greet;

// // lexical scope + closures

// function outer(){
//   let a = 10;
//   function inner(){
//     console.log(a);
//   }
//   inner();
// }
// outer();

// // real-life example counter
// // this is the perfect example which shows with closure we can make private variable which can only be tempered from inside of the variable
// function counter(){
//   let cnt = 0;
//   return function(){
//     cnt++;
//     console.log(cnt);
//   }
// };

// let inc = counter();
// inc();
// inc();
// inc();

// // private variable example

// console.log("------------------------------------");

// function makeBankAcc(){
//   let balance = 2911;
//   return {
//     deposit(amount){
//       balance += amount;
//       console.log(`Current balance: ${balance} and Deposit amount: ${amount}`);
//     },
//     withdraw(amount){
//       if(balance >= amount){
//         balance -= amount;
//         console.log(`After deduction balance: ${balance} and deducted amount: ${amount}`);
//       } else {
//         console.log("You're account have an Insufficient balance");
//       }
//     },
//   };
// }

// let account = makeBankAcc();
// account.deposit(1000);
// account.withdraw(100);
// // closures in loop

// for(var i=1; i<=3; i++){
//   setTimeout(()=>{
//     console.log(i);
//   }, 1000)
// };

// for(let i=1; i<=3; i++){
//   (function(x){
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   })(i)
// }

// for(let j= 1; j<=3; j++){
//   setTimeout(()=>{
//     console.log("value:", j, "time:", new Date().toLocaleTimeString())
//   }, 1000 * j)
// }

// example memoization using closures

// function memoization(){
//   let cache = {};
//   return function(num){
//     if(cache[num]){
//       console.log("From cache");
//       return cache[num];
//     } else {
//       console.log("calculating...");
//       let result = num + 20;
//       return result;
//     }
//   };
// }
// const add = memoization();
// console.log(add(100))

// let user = {
//   balance: 500,
//   deposit: function(amount){
//     if(typeof amount === "number" && amount > 0){
//       this.balance += amount;
//       return this.balance;
//     }
//   },
//   withdraw: function(amount){
//     if(this.balance >= amount){
//       this.balance -= amount;
//       return this.balance;
//     }
//   }, getBalance(){
//     return this.balance;
//   }
// }

// console.log(user.deposit(1999));
// console.log(user.withdraw(500));
// user.balance = "devesh";
// console.log(user.deposit(599))


function createBankAcc(){
  let balance  = 500;
  const user = {
    deposit: function(amount){
      if(typeof amount === "number" && amount > 0){
        balance += amount;
        return balance;
      }
    },
    withdraw: function(amount){
      if(balance >= amount){
        balance -= amount;
        return amount;
      }
    },
    getBalance: function(){
      return balance;
    }
  }
  return user;
}

const customer = createBankAcc();
console.log(customer);
// customer.balance = "devesh"; //dont have balance variable access
console.log(customer.deposit(500));
console.log(customer.withdraw(321));
console.log(customer.getBalance());

// closure inside closure example

function a(){
  let x = 10;
  function b(){
    let y = 20;
    function c(){
      console.log(x + y);
    }
    return c;
  }
  return b;
}
const funcB = a();
const funcC = funcB();
funcC();

// higher order function

const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(function(num){
  // console.log(num);
  return num * 2;
})
console.log(doubled);

// let n = 10
function repeat(n, action){
  for(let i=0; i<n; i++){
    action(i);
  }
}

repeat(3, function(i){
  console.log("Iteration:" + i)
})

