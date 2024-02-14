// let foo = "hello";
//
// echoFoo();
//
// function echoFoo() {
//   console.log(foo);
// }

// Practice problems: hoisting and the var statement
//
// 1. Error: can't declare a variable that's already been declared. will occur
//    on line 5.
//    WRONG! the `var` declaration will be discarded, so check out the below:

// foo();
//
// var foo = function() {
//   console.log("Bye");
// };
//
// function foo() {
//   console.log("Hello");
// }
//
// foo();

// 2. undefined
//    Hello
//    Bye
//    Bye
//    1
//    WRONG!, Should be:
//    undefined
//    Hello
//    Bye
//    2
//
// 3. Change bar to a function declaration on line 3, i.e.:
//    ```
//    bar();
//
//    function bar() {
//      console.log("foo!");
//    };
//    ```
//
//    `
// 4. 40
//    WRONG!!
//    NaN
//    I forgot that `var` has function scope
//
// 5. See below:
//
// function foo(condition) {
//   let bar; // don't need `= undefined`
//   console.log(bar);
//
//   let qux = 0.5772;
//
//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;
//
//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };
//
//     console.log(qux);
//     console.log(xyzzy());
//   }
//
//   qux = 42;
//   console.log(qux);
// }
//
// foo(true);
// // undefined
// // 3.1415
// // 42
// foo(false);
// // undefined
// // 0.5772
// // 2.7183
// // undefined
// // 42

// 6. 
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
// WRONG!! Forgot that only the class name gets "hoisted" but the definition 
// doesn't happen until it gets executed;
