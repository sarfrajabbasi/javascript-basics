// Event-Handlers

function touchMe(){
    console.log("hello");
}

// onMouseOver & onLoad
const val = document.getElementById('value');
const submit = document.getElementById('submit');
const img = document.getElementById('img');

submit.addEventListener('click',function(){
    let currVal = val.value;
    img.src= `https://source.unsplash.com/random/300x300/?${currVal}`
})

function changes(){

}