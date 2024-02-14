"use strict";
// function createIdGenerator() {
//   let id = 0;
//   return function() {
//     id +=1;
//     return id;
//   }
// }
//
// const idGenerator = createIdGenerator();
//
// Array(52).fill(null).forEach(_ => console.log(idGenerator()));

// # Practice Problems
//
// 1. 1\n2\n3\n4
// 2. 1\n1\n1\n1\n
// 3. 1\n2\n1\n2\n
// 4. 1\n2\n1\n2\n
// 5.

// function makeMultipleLister(n) {
//   let i = 0;
//   return function() {
//     i += 1;
//     return i * n;
//   }
// }
// let lister = makeMultipleLister(17);
// Array(5).fill(null).forEach(_ => console.log(lister()));

//    WRONG!! I didn't read the directions! Trying again:

function makeMultipleLister(n) {
  return () => {
    for (let i = 1; i < (100/n); i += 1) {
      console.log(i * n);
    }
  }
}
let lister = makeMultipleLister(17);
lister();

// 6. 

let runningTotal = 0;
function add(n) {
  runningTotal += n;
  console.log(runningTotal);
}
function subtract(n) {
  runningTotal -= n;
  console.log(runningTotal);
}
add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

// 7. result = 6
//    result += 24 = 30
//    result += 120 = 150
//    150
//
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// 8. 
function later (fn, arg) {
  return eval(`(function ${fn.name}Later () {fn(arg);})`);
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

console.log(logWarning.name);

// 9. 
function later2 (fn, arg) {
  return function (arg2) {
    fn(arg, arg2);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10.

function bind(obj, fn) {
  return _ => {fn.call(obj);};
}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

// # Closures and Private Data
//
// ## Practice Problems
// 1.

function makeCounterLogger(startingNum) {
  return function (targetNum) {
    let currentNum = startingNum;
    while (currentNum !== targetNum) {
      console.log(currentNum);
      currentNum += (currentNum < targetNum ? 1 : -1);
    }
    console.log(targetNum);
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
countlog(5);

// 2.

// function makeList() {
//   let myList = new Set();
//   return function (item) {
//     if (item === undefined) {
//       myList.forEach(item => console.log(item));
//     } else if (myList.has(item)) {
//       myList.delete(item);
//       console.log(item + ' removed!');
//     } else {
//       myList.add(item);
//       console.log(item + ' added!');
//     }
//   }
// }
//
// let list = makeList();
// list();
// // The list is empty.
//
// list("make breakfast");
// // make breakfast added!
//
// list("read book");
// // read book added!
//
// list();
// // make breakfast
// // read book
//
// list("make breakfast");
// // make breakfast removed!
//
// list();
// // read book

function makeList() {
  let myList = new Set();
  return {
    add(item) {
      myList.add(item);
      console.log(item + " added!");
    },
    remove(item) {
      myList.delete(item);
      console.log(item + " removed!");
    },
    list() {
      if (myList.size === 0) console.log("list is empty");
      myList.forEach(item => console.log(item));
    }
  }
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn


function Foo() {
  let mySet = new Set();
  this.add = Foo.prototype.makeAdder(mySet);
  this.remove = Foo.prototype.makeRemover(mySet);
  this.echo = Foo.prototype.makeEchoer(mySet);
}

Foo.prototype = {
  makeAdder(set) {
    return function(toAdd) {
      set.add(toAdd);
    };
  },
  makeRemover(set) {
    return function(toRemove) {
      set.delete(toRemove);
    };
  },
  makeEchoer(set) {
    return function() {
      set.forEach(val => console.log(val));
    };
  }
}

Foo.prototype.constructor = Foo;

let myList = new Foo();
myList.add("hello");
myList.add("goodbye");
myList.echo();
myList.remove("hello");
myList.echo();
