function afterNSeconds(callback, n) {
  setTimeout(callback, n * 1000);
}

// g()
// f()
// d()
// z()
// n()
// s()
// q()

function startCounting() {
  let i = 0;
  return setInterval(() => console.log(i += 1), 1000);
}

let counter = startCounting();

function stopCounting(counter) {
  clearInterval(counter);
}

setTimeout(() => stopCounting(counter), 20 * 1000);
