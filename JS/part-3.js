// Event-Handlers

function touchMe() {
  console.log("hello");
}

// onMouseOver & onLoad
const val = document.getElementById("value");
const submit = document.getElementById("submit");
const img = document.getElementById("img");

function changes() {
  let currVal = val.value;
  img.src = `https://source.unsplash.com/random/300x300/?${currVal}`;
}

// Object and creating objects(instance of objects)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const Emma = new Person("emma", 19);
const tylor = new Person("tylor", 29);
console.log(Emma.name);
console.log(tylor.age);

// Object Initializer

const sarfraj = {
  name: "sarfraj abbasi",
  age: 24,
  Intro: () => {
    console.log(
      "Hello, My name is sarfraj abbasi i am 24 year old and like to do programming"
    );
  },
};

const conner = {
  name: "conner ",
  age: 21,
  Intro: () => {
    console.log(
      "Hello, My name is conner i am 21 year old and like to do programming"
    );
  },
};

sarfraj.Intro();

// Adding methods to our Objects

function people(name, age) {
  this.name = name;
  this.age = age;
  this.yearsUntilRetire = yearsLeft;
}

function yearsLeft() {
  var numyears = 65 - this.age;
  return numyears;
}

var natalie = new people("romy", 34);
var bucky = new people("bukey protmen", 22);
console.log(natalie.yearsUntilRetire());

// Create Array
const myArr = [54, 23, 45, 78, 89, 18];
const myArr2 = ["sarfrj", "asif", "kim", "milliy", "mike"];

var things = new Array(3);

things[0] = "road";
things[1] = "traffic signal";
things[2] = "Zebra crossing";
things[3] = "jumper";

console.log(myArr[3]);
console.log(myArr2[3]);
console.log(things);

var stuff = new Array();
stuff[0] = "zero";
stuff[1] = "one";
stuff[2] = "two";
console.log(stuff);

// Array properties and methods

var dudes = new Array("leo", "jhon", "kinky", "pinky");
var chicks = new Array("Lisa", "Erin", "Hannah");

var people = dudes.concat(chicks);
console.log(dudes.length);
console.log(people[5]);

// join and pop
var movies = new Array(
  "Avaatar",
  "Good Will Hunt",
  "Vanilla sky",
  "fight club"
);
var pop = movies.pop();

var join = movies.join("---");
console.log(movies[3]);
console.log(join);
console.log(pop);

// Reverse,push,sort

var bp = new Array("head", "shoulders", "knees", "toes");

bp.reverse();
bp.push("finger");
bp.sort();
console.log(bp);
// var pie = prompt("Enter your name", "");
// document.write(`Hello ${pie}`);


// Add array elements using a loop
var crap = new Array(3);
console.log(crap);


for (let i = 0; i < crap.length; i++) {
    // crap[i] = prompt('add something to the ARRAY:',"");
}

document.write(crap[0] + crap[1] + crap[2])


// Cool Technique to Print Array

var me = new Array("Apples","pears","bacon","tuna","ham");

me.sort();
console.log(me);


for(let i=0;i< me.length;i++){
    console.log(me[i]);
}

// Associate Arrays
var bucky = new Array();
bucky["color"] = "blue";
bucky["food"] = "Hot Pockets";
console.log(bucky["color"]);
console.log(bucky["food"]);


// Math objects

console.log(Math.PI);
console.log(Math.E);

// var n = prompt('enter number');
var n = 16;
var ans = Math.sqrt(n);

console.log(ans);

// date objects
 

// setInterval(function(){
//     var now = new Date();
//     var hours = now.getHours();
//     var min = now.getMinutes();
//     var sec = now.getSeconds();
//     var time = `${hours}:${min}:${sec}`
//     console.log(time);
// },1000);

 
// Accessing forms and it's Elements

var x = document.forms[0].length;
console.log(x);

// var formsElement = document.forms[0].elements[1].value;

// form name access the element
var formsElement = document.sarfraj.elements[1].value;

console.log(formsElement);


// Validator

function validator(){
    if(document.sarfraj.thebox.checked){
        alert('Yes its checked')
    }else{
        alert("it's not checked!")
    }
}

