function addition(a, b) {
  return +a + +b;
  // return Number(a) + Number(b);
  // return a / 1 + b / 1;
  // return a * 1 + b * 1;
}

// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));
// console.log(addition("7", "3"));
// console.log(addition("7", 3));

function convert(hour) {
  return 60 * hour;
}

// convert(5)
//   convert(3)
//   convert(2)
//   convert('2')

function addition(num) {
  return 1 + +num;
}

// console.log(addition(0));
// console.log(addition(9));
// console.log(addition(-3));

function giveMeSomething(str) {
  const result = `Something ${str}`;
  return result;
  // return "Something " + str;
}

// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

function triArea(numA, numB) {
  const result = (numA * numB) / 2;
  return result;
}

// console.log(triArea(3, 2));
// console.log(triArea(7, 4));
// console.log(triArea(10, 10));

function howManySeconds(hours) {
  const result = hours * 60 * 60;
  return result;
}

// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(24));

function getFirstValue(arr) {
  const firstValue = arr[0];
  return firstValue;
}

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

function nextEdge(a, b) {
  const value = a + b - 1;
  return value;
}

// console.log(nextEdge(8, 10));
// console.log(nextEdge(5, 7));
// console.log(nextEdge(9, 2));

function findPerimeter(width, height) {
  const result = (width + height) * 2;
  return result;
}

// console.log(findPerimeter(6, 7));
// console.log(findPerimeter(20, 10));
// console.log(findPerimeter(2, 9));

function remainder(num1, num2) {
  const result = num1 % num2;
  return result;
}

// console.log(remainder(1, 3));
// console.log(remainder(3, 4));
// console.log(remainder(-9, 45));
// console.log(remainder(5, 5));
