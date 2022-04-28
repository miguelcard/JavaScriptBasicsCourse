/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Callbacks')
/* coding examples */

// Callback is function inside of another function, and then it gets executed at some point 

// Example:
// This:
function callBackEx(name, funct) {
    log(funct(name));
}

var callbackFcn = function (name) {
    return "Hola " + name;  
}

callBackEx("Alberto", callbackFcn);

// is the same as this, but we just define the Fcn as an argument:__________________________
function callBackEx(name, funct) {
    log(funct(name));
}

callBackEx("Alberto", function (name) {
    return "Hola " + name;
});














// function callbackExample(name, callback) {
//   log(callback(name));
// }

// var callback = function(name) {
//   return "Hola " + name;
// }

// callbackExample("Abel Mohammado", function(name) {
//   return "Hola " + name;
// });
