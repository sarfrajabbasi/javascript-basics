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

// object

const color = {
    
}