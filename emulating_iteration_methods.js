"use strict;";

// // Implementing `filter`
// function filter(arr, fn, thisArg) {
//   let returnArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (fn.call(thisArg, arr[i], i, arr)) returnArray.push(arr[i]);
//   }
//   return returnArray;
// }
//
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// // Implementing `map`
// function map(arr, fn, thisArg) {
//   let returnArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     returnArr.push(fn.call(thisArg, arr[i], i, arr));
//   }
//   return returnArr;
// }
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// // Implementing `reduce`
// function reduce (arr, fn, initialValue) {
//   if (arr.length === 1 && initialValue === undefined) return arr[0];
//   if (arr.length === 0) return initialValue;
//   let acc = (initialValue === undefined ? arr[0] : initialValue);
//   let curr = (initialValue === undefined ? arr[1] : arr[0]);
//   return reduce(arr.slice(initialValue === undefined ? 2 : 1), fn, fn(acc, curr));
// }
//
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined
//
// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]
//
// console.log(reduce([1], (accum, number) => accum + number));
//
// console.log([1].reduce((accum, number) => accum + number));
// console.log([1].slice(2));
//
// const getMax = (a, b) => Math.max(a, b);
//
// // callback is invoked for each element in the array starting at index 0
// console.log(reduce([1, 100], getMax, 50)); // 100
// console.log(reduce([50], getMax, 10)); // 50
//
// // callback is invoked once for element at index 1
// console.log(reduce([1, 100], getMax)); // 100
//
// // callback is not invoked
// console.log(reduce([50], getMax)); // 50
// console.log(reduce([], getMax, 1)); // 1
//
// console.log(reduce([], getMax)); // TypeError

// Implementing `filter` using `reduce`

// function filter(arr, fn, thisArg) {
//   return arr
//     .reduce(
//       (acc, value, index, arr) =>
//         fn.call(thisArg, value, index, arr) ? acc.concat(value) : acc,
//       [],
//     );
// }
//
//
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]
//
class RandomBoolean {
  constructor(randomizerFunction) {
    this.randomizerFunction = randomizerFunction;
  }
  generateRandomBoolean() {
    return this.randomizerFunction();
  }
}

const foo = new RandomBoolean((_) => Math.random() < .5);
//
// console.log(filter([1, 2, 3, 4, 5], foo.generateRandomBoolean, foo));

// Implementing `map` using `reduce`
function map(arr, fn, thisArg) {
  return arr
    .reduce(
      (acc, value, index, arr) =>
        acc.concat(fn.call(thisArg, value, index, arr)),
      [],
    );
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, (value) => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

console.log(map(Array(10).fill(null), foo.generateRandomBoolean, foo));
