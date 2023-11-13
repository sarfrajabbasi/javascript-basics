// Event-Handlers

function touchMe(){
    console.log("hello");
}

// onMouseOver & onLoad
const val = document.getElementById('value');
const submit = document.getElementById('submit');
const img = document.getElementById('img');

function changes(){
    let currVal = val.value;
    img.src= `https://source.unsplash.com/random/300x300/?${currVal}`
}


// Object and creating objects(instance of objects)

function Person(name,age){
    this.name =name;
    this.age =age;

}

const Emma = new Person('emma',19);
const tylor = new Person('tylor',29);
console.log(Emma.name);
console.log(tylor.age);

// Object Initializer

const sarfraj = {
    name:"sarfraj abbasi",
    age:24,
    Intro:()=>{
        console.log("Hello, My name is sarfraj abbasi i am 24 year old and like to do programming");
    }
};

const conner = {
    name:"conner ",
    age:21,
    Intro:()=>{
        console.log("Hello, My name is conner i am 21 year old and like to do programming");
    }
};

sarfraj.Intro();

