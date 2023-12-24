function findBob(arr) {
  const result = arr.findIndex((el) => el === "Bob");
  return result;
}

// console.log(findBob(["Jimmy", "Layla", "Bob"]));
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));
// console.log(findBob(["Jimmy", "Layla", "James"]));

function negate(arr) {
  const result = arr.map((el) => {
    if (el < 0) {
      return +el * 2 - el;
    }
    return -el;
  });

  return result;
}

// console.log(negate([1, 2, 3, 4]));
// console.log(negate([-1, 2, -3, 4]));
// console.log(negate([]));

function go(n) {
  let result = String().padStart(n, "-");
  return result;
}

// console.log(go(1));
// console.log(go(5));
// console.log(go(3));

function addEnding(arr, str) {
  const result = arr.map((el) => el + str);

  return result;
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
// console.log(addEnding(["new", "pander", "scoop"], "er"));
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));

function reverse(value) {
  const result = typeof value === "boolean" ? !value : "boolean expected";

  return result;
}

// console.log(reverse(true));
// console.log(reverse(false));
// console.log(reverse(0));
// console.log(reverse(null));

function isFourLetters(arr) {
  const result = arr.filter((el) => el.length === 4);
  return result;
}

// console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));

function nameShuffle(name) {
  const result = name.split(" ").reverse().join(" ");
  return result;
}

// console.log(nameShuffle("Donald Trump"));
// console.log(nameShuffle("Rosie O'Donnell"));
// console.log(nameShuffle("Seymour Butts"));

class BasicPlan {
  constructor() {
    this.canStram = true;
    this.canDownload = true;
    this.hasSD = true;
    this.hasHD = false;
    this.hasUHD = false;
    this.numOfDevices = 1;
    this.price = "$8.99";
  }
}

class StandardPlan extends BasicPlan {
  constructor() {
    super();
    this.hasSD = true;
    this.numOfDevices = 2;
    this.price = " $12.99";
  }
}

class PremiumPlan extends StandardPlan {
  constructor() {
    super();
    this.hasUHD = true;
    this.numOfDevices = 4;
    this.price = "$15.99";
  }
}

const basicPlan = new BasicPlan();
const standardPlan = new StandardPlan();
const premiumPlan = new PremiumPlan();

// console.log(basicPlan.hasSD);
// console.log(premiumPlan.hasSD);
// console.log(basicPlan.hasUHD);
// console.log(basicPlan.price);
// console.log(premiumPlan.numOfDevices);

function missingAngle(angle1, angle2) {
  const deg = 180 - (angle1 + angle2);
  if (deg < 90) {
    return "acute";
  } else if (deg === 90) {
    return "right";
  } else if (deg > 90 && deg < 180) {
    return "obtuse";
  } else {
    return "invalid";
  }
  // console.log(deg < 90);
  // let result;
  // switch (deg) {
  //   case deg < 90:
  //     console.log(deg);
  //     result = "acute";
  //     break;
  //   case deg === 90:
  //     result = "right";
  //     break;
  //   case deg > 90 && deg < 180:
  //     result = "obtuse";
  //     break;
  //   default:
  //     result = "Invalid";
  // }
  // return result;
}

// console.log(missingAngle(27, 59));
// console.log(missingAngle(135, 11));
// console.log(missingAngle(45, 45));

function retrieveMajor(version) {
  const result = version[0];
  return result;
}
function retrieveMinor(version) {
  const result = version[2];
  return result;
}
function retrievePatch(version) {
  const result = version[4];
  return result;
}
// 6.1.9
// console.log(retrieveMajor("6.1.9"));
// console.log(retrieveMinor("6.1.9"));
// console.log(retrievePatch("6.1.9"));
// 2.1.0
// console.log(retrieveMajor("2.1.0"));
// console.log(retrieveMinor("2.1.0"));
// console.log(retrievePatch("2.1.0"));

function alphabetSoup(str) {
  const result = str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  return result;
}

// console.log(alphabetSoup("hello"));
// console.log(alphabetSoup("edabit"));
// console.log(alphabetSoup("hacker"));
// console.log(alphabetSoup("geek"));
// console.log(alphabetSoup("javascript"));
