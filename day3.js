function profitableGamble(prob, prize, pay) {
  const result = prob * prize > pay;

  return result;
}

// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));

function frames(f1, f2) {
  // const frames = 60 * f1;
  // const FPS = frames * f2;

  const FPS = f1 * f2 * 60;

  return FPS;
}

// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

function shouldServeDrinks(age, onBreak) {
  // const result = age >= 18 && !onBreak;
  const result = age >= 18 && onBreak !== true;

  return result;
}

// console.log(shouldServeDrinks(17, true));
// console.log(shouldServeDrinks(19, false));
// console.log(shouldServeDrinks(30, true));

function isEmpty(str) {
  const result = str.length === 0;

  return result;
}

// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));

function comp(str1, str2) {
  const result = str1.length === str2.length;

  return result;
}

// console.log(comp("AB", "CD"));
// console.log(comp("ABD", "DE"));
// console.log(comp("hello", "moien khan"));

function divisible(num) {
  const result = num % 100 === 0;
  return result;
}

// console.log(divisible(1));
// console.log(divisible(1000));
// console.log(divisible(100));

function divisibleByFive(num) {
  const result = num % 5 === 0;
  return result;
}

// console.log(divisibleByFive(5));
// console.log(divisibleByFive(-55));
// console.log(divisibleByFive(37));

let i = 0;

function length(str) {
  if (i > 50) {
    return;
  }
  i++;
  if (str.length < 1) return 0;
  return 1 + length(str.slice(1));
}

// console.log(length("apple"));
// console.log(length("make"));
// console.log(length("a"));
// console.log(length(""));

function stringInt(str) {
  // const result = +str;
  const result = parseInt(str);
  return result;
}

// console.log(stringInt("6"));
// console.log(stringInt("1000"));
// console.log(stringInt("12"));

function dividesEvenly(int1, int2) {
  const dividedResult = int1 / int2;

  const result = dividedResult === parseInt(dividedResult);
  // const result = int1 % int2 === 0;

  return result;
}

// console.log(dividesEvenly(98, 7));
// console.log(dividesEvenly(85, 4));
