function hasSpaces(str) {
  // const result = str.includes(' ')
  // return result;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}

// console.log(hasSpaces("hello"));
// console.log(hasSpaces("hello, world"));
// console.log(hasSpaces(" "));
// console.log(hasSpaces(""));
// console.log(hasSpaces(",./!@#"));

function getContainer(item) {
  switch (item) {
    case "Bread":
      return "bag";
    case "Beer":
      return "bottle";
    case "Candy":
      return "plastic";
    default:
      return null;
  }
}

// console.log(getContainer("Bread"));
// console.log(getContainer("Beer"));
// console.log(getContainer("Candy"));
// console.log(getContainer("Cheese"));

function numberArgs(...arg) {
  const result = arg.length;
  return result;
}

// console.log(numberArgs("a", "b", "c"));
// console.log(numberArgs(10, 20, 30, 40, 50));
// console.log(numberArgs("x", "y"));
// console.log(numberArgs());

function cityFacts(city) {
  const result = `${city.name} has a population of ${city.population} ${
    city.continent ? `and is situated in ${city.continent}` : ""
  }`;
  return result;
}

// console.log(
//   cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   })
// );
// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "13,140,526",
//     continent: "Asia",
//   })
// );
// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "2,140,526",
//   })
// );

function volumeOfBox(sizes) {
  const result = sizes.width * sizes.length * sizes.height;
  return result;
}

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));

function stutter(word) {
  const result = `${word.slice(0, 2)}... ${word.slice(0, 3)}... ${word}?`;
  return result;
}

// console.log(stutter("incredible"));
// console.log(stutter("enthusiastic"));
// console.log(stutter("outstanding"));

function isPlural(str) {
  const result = str.slice(-2) === "es";
  return result;
}

// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));
// console.log(isPlural("magic"));

function carsNeeded(passengers) {
  const result = passengers;
  return result;
}

// console.log(carsNeeded(5));
// console.log(carsNeeded(11));
// console.log(carsNeeded(0));

let [head, ...tail] = [1, 2, 3, 4];

// console.log(head);
// console.log(tail);

const arr = ["eyes", "nose", "lips", "ears"];

let [eyes, nose, , ears] = arr;
