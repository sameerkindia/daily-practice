function squared(num) {
  // const result = num ** 2;
  const result = Math.pow(num, 2);
  return result;
}

// console.log(squared(5));
// console.log(squared(9));
// console.log(squared(100));

function and(a, b) {
  const result = a && b;
  return result;
}

// console.log(and(true, false));
// console.log(and(true, true));
// console.log(and(false, true));
// console.log(and(false, false));

function lessThanOrEqualToZero(number) {
  const result = number <= 0;
  return result;
}

// console.log(lessThanOrEqualToZero(5));
// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));

function lessThan100(number1, number2) {
  const result = 100 > number1 + number2;
  return result;
}
// console.log(lessThan100(22, 15));
// console.log(lessThan100(83, 34));

function footballPoints(wins, draws, losses) {
  const result = 3 * wins + draws;

  return result;
}
// console.log(footballPoints(3, 4, 2));
// console.log(footballPoints(5, 0, 2));
// console.log(footballPoints(0, 0, 1));

function isSameNum(num1, num2) {
  // const result = num1 === num2;
  const result = Object.is(num1, num2);
  return result;
}

// console.log(isSameNum(4, 8));
// console.log(isSameNum(2, 2));
// console.log(isSameNum(2, "2"));
// console.log(isSameNum(0, -0));

function isEven(num) {
  const result = num % 2 === 0;
  return result;
}

// console.log(isEven(2));
// console.log(isEven(3));

function animals(chickens, cows, pigs) {
  // const chickensLeg = 2 * chickens;
  // const cowsLeg = 4 * cows;
  // const pigsLeg = 4 * pigs;

  // const totalLegs = chickensLeg + cowsLeg + pigsLeg;

  const totalLegs = 2 * chickens + 4 * (cows + pigs);

  return totalLegs;
}

// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));
// console.log(animals(5, 2, 8));

function convert(hours, minutes) {
  // const hoursSec = 60 * 60 * hours;
  // const minutesSec = 60 * minutes;

  // const totalSec = hoursSec + minutesSec;

  const totalSec = 60 * (60 * hours + minutes);
  return totalSec;
}

// console.log(convert(1, 3));
// console.log(convert(2, 0));
// console.log(convert(0, 0));

function checkEquality(value1, value2) {
  // const result = value1 === value2;
  const result = Object.is(value1, value2);

  return result;
}

// console.log(checkEquality(1, true));
// console.log(checkEquality(0, "0"));
// console.log(checkEquality(1, 1));
// console.log(checkEquality(undefined, undefined));
// console.log(checkEquality(NaN, NaN));
