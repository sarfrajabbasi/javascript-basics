// Begin the world of Javscript

// this is comments goes here :) :|

// document.write('hey brain are workingor not?');




//  Variables:--

var x = "hello anonymus men \n";
var x_hello = "hello Humans \n 'asda'";
var js = false;
var n = null
var tuna = -20.58659659;
var name = "Sarfraj"
var age = 23;

// Prints :--
// document.write(x);
// document.write(x_hello);
// document.write(js);
// document.write(n);
// document.write(tuna);
// document.write("\n");
// document.write(name + " is my name " + " and my age is" + age);

// function
 
function hello(){
// alert("Hello Mr." + name)
var bg  = document.getElementById('hello');
if(bg){
    console.log(bg)
    bg.classList.toggle('card');
    bg.style.display = "block"
    bg.style.visibility = "visible"
}

}

function apples(one,two){
    document.write(one + " is better than " + two + "</br>")
}

apples("sarfraj","sarfraz");
apples("apple","orange");
apples("Qhawa","Tea");

