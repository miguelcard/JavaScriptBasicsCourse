/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Functions')
/* coding examples */


var substraction = substract(10, 5);
log("substraction returned: " + substraction) // if no return in method, returns undefined
// like a method in java
function substract(a, b){
    log("function entered, a-b = " + (a-b));
    return a-b;
}

// Scope / visibility of variables

var myGlobal = 10; // all vars not definfed withhin a function are global
funct1();
funct2();


function funct1(){
    // alsoGlobal = 100; // without "var" -> global (in theory but here it says is undefined) -> gives error
    var localVar = 1; // with "var" -> NOT global
}

function funct2(){
    if(typeof alsoGlobal == "undefined"){
        log("alsoGlobal is undefined");
    }
    if(typeof notGlobal == "undefined"){
        log("notGLobal is undefined")
    }
}

// two variables (local and global can have the same name):
var sameName = 1;
myFunct();
function myFunct(){
    var sameName = 4;
    log(sameName); // prints local 4
}
log(sameName); // prints global 1