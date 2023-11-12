
// Begin the world of Javscript Introduction

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

}

}

function apples(one,two){
    document.write(one + " is better than " + two + "</br>")
}

// apples("sarfraj","sarfraz");
// apples("apple","orange");
// apples("Qhawa","Tea");

function tooeasy(){
return "GameTime"
}

function addNumbers(a,b){
    var c = a + b;
    return c;
}

document.write("<br>");
document.write("<br>",tooeasy());
document.write("<br>");
document.write("<br>",addNumbers(10,18));

// function call form another function

var count = 7
 function doFirst(){
    count++
    console.log("I am first bo!");
    doSecond();
    if(count === 10){
        console.log("end3");
        return "end"
    }
 }

 function doSecond(){
    console.log("I am ohh no second");
    if(count === 10){
        console.log("end4");
        return "end"
    }
    doFirst();
    
 }

// doFirst()
