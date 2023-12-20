function acceptIntoMovie(age, isSupervised) {
  const result = age >= 15 || isSupervised;
  return result;
}

// console.log(acceptIntoMovie(14, true));
// console.log(acceptIntoMovie(14, false));
// console.log(acceptIntoMovie(16, false));

function eq(value) {
  // const result = value;
  // let newValue = [];
  // for (let i = 0; i < value.length; i++) {
  //   newValue.push(value.charCodeAt(i));
  // }
  // const re = String.fromCharCode(newValue[1]);
  return eval(value);
}

// console.log(eq("1+2"));
// console.log(eq("6/(9-7)"));
// console.log(eq("3+2-4"));

function concatName(fName, lName) {
  // const result = lName + " , " + fName;
  const result = `${lName} , ${fName}`;

  return result;
}

// console.log(concatName("First", "Last"));
// console.log(concatName("John", "Doe"));
// console.log(concatName("Mary", "Jane"));

function posCom(switchs) {
  // const result = Math.pow(2, switchs);
  const result = 2 ** switchs;

  return result;
}

// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));

function areaShape(base, height, type) {
  let result;
  if (type === "triangle") {
    result = (1 / 2) * base * height;
  } else {
    result = base * height;
  }
  return result;
}

// console.log(areaShape(2, 3, "triangle"));
// console.log(areaShape(8, 6, "parallelogram"));
// console.log(areaShape(2.9, 1.3, "parallelogram"));

function reverse(arr) {
  // const result = arr.reverse();

  const result = [];
  // for (let i = arr.length; i > 0; i--) {
  //   result.push(arr[i - 1]);
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   result.push(arr[arr.length - 1 - i]);
  // }

  while (arr.length > 0) {
    const currentEle = arr.pop();
    result.push(currentEle);
  }
  return result;
}

// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

// const [a, b] = [1, 2, 3, 4, 5, 6];

// console.log(a, b);

function yeah_nope(bool) {
  const result = bool ? "yeah" : "nope";

  return result;
}

// console.log(yeah_nope(true));
// console.log(yeah_nope(false));

function arrayToString(arr) {
  // const result = arr.join("");

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

function getLastItem(arr) {
  // const result = arr[arr.length - 1];
  const result = arr.at(-1);
  return result;
}

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));
