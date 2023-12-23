function addOddToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

// console.log(addOddToN(5));
// console.log(addOddToN(13));
// console.log(addOddToN(47));

function holloween(date) {
  const fullDate = new Date(date);
  const result =
    fullDate.getMonth() + 1 === 10 && fullDate.getDate() === 31
      ? "Bonfire toffee"
      : "toffee";
  return result;
}

// console.log(holloween("2013/10/31"));
// console.log(holloween("2012/07/31"));
// console.log(holloween("2011/10/12"));

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const calculator = new Calculator();

// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(10, 5));
// console.log(calculator.divide(10, 5));

// function limitNumber(...input) {
//   const arr = [...input].sort((a, b) => a - b);
//   return arr[Math.floor(arr.length / 2)];
// }

function limitNumber(input, min, max) {
  if (input > min && input < max) {
    return input;
  } else if (input < min) {
    return min;
  } else {
    return max;
  }
}

// console.log(limitNumber(5, 1, 10));
// console.log(limitNumber(-3, 1, 10));
// console.log(limitNumber(14, 1, 10));
// console.log(limitNumber(4.6, 1, 10));

function skipTooMuchSugarDrinks(arr) {
  const result = arr.filter((drink) => {
    if (drink === "cola" || drink === "fanta") return;
    return drink;
  });
  return result;
}

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

function addUpTo(n) {
  // const nthArr = new Array(n).fill(1);
  // let sum = 0;
  // nthArr.forEach((el, i) => {
  //   sum += i + 1;
  // });

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(addUpTo(3));
// console.log(addUpTo(10));
// console.log(addUpTo(7));

function checkEnding(str1, str2) {
  const result = str1.endsWith(str2);
  return result;
}

// console.log(checkEnding("abc", "bc"));
// console.log(checkEnding("abc", "d"));
// console.log(checkEnding("samurai", "zi"));
// console.log(checkEnding("feminine", "nine"));
// console.log(checkEnding("convention", "tio"));

function checkAllEven(arr) {
  return arr.every((x) => x % 2 === 0);
}

// console.log(checkAllEven([1, 2, 3, 4]));
// console.log(checkAllEven([2, 4, 6]));
// console.log(checkAllEven([5, 6, 8, 10]));
// console.log(checkAllEven([-2, 2, -2, 2]));

function removeNull(arr) {
  const result = arr.filter((el) => el !== null);
  return result;
}

// console.log(removeNull(["a", null, "b", null]));
// console.log(removeNull([null, null, null, null, null]));
// console.log(removeNull([7, 8, null, 9]));

function integerBoolean(str) {
  const arr = str.split("");
  const result = arr.map((el) => Boolean(+el));
  return result;
}

// console.log(integerBoolean("100101"));
// console.log(integerBoolean("10"));
// console.log(integerBoolean("001"));

function modifyLast(str, num) {
  const length = str.length - 1;
  const result = str.padEnd(length + num, str[length]);
  return result;
}

// console.log(modifyLast("Hello", 3));
// console.log(modifyLast("hey", 6));
// console.log(modifyLast("excuse me what?", 5));
