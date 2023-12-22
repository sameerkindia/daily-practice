function starNumber(num) {
  const result = 6 * num * (num - 1) + 1;
  return result;
}

// console.log(starNumber(2));
// console.log(starNumber(3));
// console.log(starNumber(5));

function getCase(str) {
  const isUpperCase = str === str.toUpperCase();
  const isLowerCase = str === str.toLowerCase();

  if (isLowerCase) return "lower";
  if (isUpperCase) return "upperCase";

  return "mixed";
}

// console.log(getCase("whisper"));
// console.log(getCase("SHOUT"));
// console.log(getCase("Indoor Voice"));

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

const [trans1, trans2, [trans3, [trans4]]] = arr;

// console.log(trans1);
// console.log(trans2);
// console.log(trans3);
// console.log(trans4);

function programmers(arr) {
  const sort = arr.sort((a, b) => a - b);
  const result = sort[sort.length - 1] - sort[0];
  return result;
}

// console.log(programmers([147, 33, 526]));
// console.log(programmers([33, 72, 74]));
// console.log(programmers([1, 5, 9]));

function getSumOfItem(arr) {
  const result = arr.reduce((acc, el) => {
    return el + acc;
  }, 0);

  return result;
}

// console.log(getSumOfItem([2, 7, 4]));
// console.log(getSumOfItem([45, 3, 0]));
// console.log(getSumOfItem([-2, 84, 23]));

function spaceMeOut(str) {
  const result = str.replace(" ", "").split("").join(" ");
  return result;
}

// console.log(spaceMeOut("space"));
// console.log(spaceMeOut("far out"));
// console.log(spaceMeOut("elongated musk"));

function countClaps(claps) {
  const result = claps.split("").filter((el) => el == "C").length;
  return result;
}

// console.log(countClaps("ClaClaClaClap!"));
// console.log(countClaps("ClClClaClaClaClap!"));
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));

function filterArray(arr) {
  const result = arr.filter((el) => typeof el === "number");
  return result;
}

// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]));
// console.log(filterArray(["Nothing", "here"]));

function squaresSum(n) {
  // const arr = new Array(n);
  // const result = arr.reduce((acc, el, i) => {
  //   console.log(acc,el,i);
  // }, 0);
  // return result;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
}

// console.log(squaresSum(3));
// console.log(squaresSum(12));
// console.log(squaresSum(13));

function isInRange(num, obj) {
  const { min, max } = obj;
  const result = num >= min * 1 && num <= max * 1;
  return result;
}

// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));
// console.log(isInRange(5, { min: 5, max: 5 }));
// console.log(isInRange(5, { min: -5, max: "5" }));

function scoreCalculator(easy, medium, hard) {
  if (easy < 0 || medium < 0 || hard < 0) return "Invalid";

  const result = easy * 5 + medium * 10 + hard * 20;
  return result;
}

// console.log(scoreCalculator(1, 2, 3));
// console.log(scoreCalculator(1, 0, 10));
// console.log(scoreCalculator(5, 2, -6));
