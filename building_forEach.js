"use strict;";

let arr = [1, 2, 3, 4];

function forEach(arr, callbackFn, thisArg) {
  for (let index = 0; index < arr.length; index += 1) {
      callbackFn.call(thisArg, arr[index], index, arr);
  }
}

// Array.prototype.forEach
arr.forEach((value) => console.log(value * value));

// Our forEach function
forEach(arr, (value) => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");

forEach([1, 2, 3], foo.showItem, foo);
