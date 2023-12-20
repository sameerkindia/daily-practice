function isOdd(num) {
  // const result = num % 2 !== 0;
  const result = !!(num % 2);
  return result;
}

// console.log(isOdd(-5));
// console.log(isOdd(25));
// console.log(isOdd(0));

function flipBaloon(bool) {
  const result = Boolean(bool);
  // const result = +bool;
  return result;
}

// console.log(flipBaloon(true));
// console.log(flipBaloon(false));
// console.log(flipBaloon(1));
// console.log(flipBaloon(0));

function kineticEnergy(m, v) {
  const result = 0.5 * m * Math.pow(v, 2);

  return result;
}

// console.log(kineticEnergy(60, 3));
// console.log(kineticEnergy(45, 10));
// console.log(kineticEnergy(63.5, 7.35));

const fun = (str) => `hii ${str}`;

// console.log(fun("Gerald"));
// console.log(fun("Tiffany"));
// console.log(fun("Ed"));

const calculteExponent = (num1, num2) => num1 ** num2;

// console.log(calculteExponent(5, 5));
// console.log(calculteExponent(10, 10));
// console.log(calculteExponent(3, 3));

const newWord = (str) => str.slice(1);

// console.log(newWord("apple"));
// console.log(newWord("cherry"));
// console.log(newWord("plum"));

const concat = (arr1, arr2) => arr1.concat(arr2);

// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

function search(arr, find) {
  const result = arr.indexOf(find);

  return result;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === find) {
  //     return i;
  //   }
  // }
  // return -1;
}

// console.log(search([1, 5, 3], 5));
// console.log(search([9, 8, 3], 3));
// console.log(search([1, 2, 3], 4));
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"));

function howManyStickers(num) {
  const result = Math.pow(num, 3) * 6;

  return result;
}

// console.log(howManyStickers(1));
// console.log(howManyStickers(2));
// console.log(howManyStickers(3));

function check(arr, value) {
  // const result = arr.includes(value);
  // return result;

  if (arr.length <= 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));
