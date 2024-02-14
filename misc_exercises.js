function sum(...values) {
  // values = Array.prototype.slice.call(arguments);

  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(fullName[0], fullName[1], fullName[2]));
// logs: Kirk, James T.

console.log(formatName(...fullName));
