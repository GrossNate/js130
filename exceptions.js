class DivideByZeroError extends Error {
  constructor(message, numerator, denominator) {
    super(message);
    this.numerator = numerator;
    this.denominator = denominator;
  }
}

function div(numerator, denominator) {
  if (denominator === 0) {
    throw new DivideByZeroError(
      "Attempt to divide by zero!",
      numerator,
      denominator,
    );
  }
}

// let quotient;

try {
  var quotient = div(3, 0);
} catch (error) {
  if (error instanceof DivideByZeroError) {
    console.log(`${error.message} ignored. The numerator was ${error.numerator}.`);
  } else {
    throw error;
  }
}

console.log(quotient);
