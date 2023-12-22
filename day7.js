const obj = { two: 2 };

const { one, two } = obj;
// console.log(one);
// console.log(two);

function moodToday(str) {
  const result = `Today, I am feeling ${str || "neutral"}`;
  return result;
}

// console.log(moodToday("happy"));
// console.log(moodToday("sad"));
// console.log(moodToday());

function hasSameBread(sandwich1, sandwich2) {
  const result =
    sandwich1[0] === sandwich1[2] &&
    sandwich2[0] === sandwich2[2] &&
    sandwich1[0] === sandwich2[2];

  return result;
}

// console.log(
//   hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
//   )
// );
// console.log(
//   hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
//   )
// );
// console.log(
//   hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
// );

function nSidedShape(n) {
  switch (n) {
    case 1:
      return "circle";
    case 2:
      return "semi-circle";
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    case 9:
      return "nonagon";
    case 10:
      return "decagon";

    default:
      return "invaild input";
  }
}

// console.log(nSidedShape(3));
// console.log(nSidedShape(1));
// console.log(nSidedShape(9));

function getMultipliedArr(arr) {
  const result = arr.map((el) => el * 2);
  return result;
}

// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));

function longBurp(n = 1) {
  let str = "Bu";
  for (let i = 0; i < n; i++) {
    if (i === n - 1) {
      return (str += "rp");
    } else {
      str += "r";
    }
  }
}

// console.log(longBurp(3));
// console.log(longBurp(5));
// console.log(longBurp(9));

const obj1 = {
  name: "John",
  email: "john@example.com",
  city: "Phoenix",
  state: "AZ",
  country: "USA",
};

let { name, email, ...rest } = obj1;

// console.log(rest);

function ctoa(char) {
  const result = char.charCodeAt(char);
  return result;
}

// console.log(ctoa("A"));
// console.log(ctoa("m"));
// console.log(ctoa("["));

function totalCups(cups) {
  const result = Math.floor(cups / 6) + cups;

  return result;
}

// console.log(totalCups(6));
// console.log(totalCups(12));
// console.log(totalCups(213));

function wordLength(arr) {
  const result = arr.map((el) => el.length);
  return result;
}

// console.log(wordLength(["Halloween", "Thanksgiving", "Christmas"]));
// console.log(
//   wordLength(["She", "sells", "seashells", "down", "by", "the", "seashore"])
// );

function getFileName(filePath) {
  const index = filePath.lastIndexOf("/");

  const result = filePath.slice(index + 1);

  return result;
}

// console.log(getFileName("C:/Projects/pil_tests/ascii/edabit.txt"));
// console.log(getFileName("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
