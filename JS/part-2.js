function spit() {
  var girl = " Suman ";
  console.log(girl);
}

spit();
// console.log(girl);

var apples = 56 * 3;
console.log(apples);
var apples = 56 / 3;
console.log(apples);

var apples = 56 + 3;
console.log(apples);

var apples = 56 - 3;
console.log(apples);

var chops = 7;
chops++;
chops--;
console.log(chops);

// assigment operator
var bear = 23;
bear += 1;
bear -= 1;
bear %= 1;
bear *= 1;
bear /= 1;

// if statement

var apples = 33;
var hotdogs = 53;

if (apples <= hotdogs) {
  console.log("Yayyy it's worked!");
}
var test = 43;
var result;

// If/else statement

if (test === result) {
  console.log("I Love HotPockets");
} else {
  console.log("I Love Strawberries");
}

// Nested and Fridays

var firstName = "buckey";
var lastName = "roberts";

if (firstName === "buckey") {
  if (lastName === "roberts") {
    console.log(`Welcome ${firstName} ${lastName} !!!`);
  } else {
    console.log(`hello ${firstName} someone!!!`);
  }
}
if (firstName === "buckey" && lastName === "roberts") {
  console.log("hey good job buddy erhe filda nue ke");
}

if (firstName === "buckey" || lastName === "roberts") {
  console.log("now i'm bore");
}

// Switch statement

var superCar = "aut";

switch (superCar) {
  case "mustang":
    console.log("%cYess:)", "color:green");
    break;

  case "lamborgini":
    console.log("%cYess:)", "color:red");
    break;

  case "suprraaa":
    console.log("%cohh yeahh", "color:blue");
    break;
  case "auto":
    console.log("%cno:(", "color:HotPink");
    break;
  default:
    console.log("%cnoo-car", "color:red;font-size:24px;");
}

// Loops

// For

for (let i = 0; i < 5; i++) {
  console.log("theNewBoston is suck");
}

// While
var x = 1;

while (x < 5) {
  console.log(` ${x} again theNewBoston is more suck`);
  x++;
}

// Do-While

var x2 = 1;

do {
  console.log(x2 + " hooloo-hooloo");
  x2++;
} while (x2 <= 5);

