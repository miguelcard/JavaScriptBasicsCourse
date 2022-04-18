/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Datatypes and variables')
/* coding examples */

/* Data types:
undefined = not set to anything yet
null = value of nothing
boolean, string, number
symbol = immutable primitive value that is unique
object = stores key value pairs
... var keyword stores any of the data types above
*/ 

var myName = "Miguel";
myName = 9;

let somethingELse = "something else";

const pi = 3.14;

// console.log(pi)

/* Variables:
var -> can be uses throughout your whole program
let -> only in current scope
const -> a constant variable which can Not be changed
*/

// Adding / substracting / multipliyng, dividing = +, -, *, /
var addition = 3 + 4;
addition++; // incerements plus one
addition--;// decrements minus one

// shorcut 
var a = 5;
//increment a by 2
a += 2;
// decrement by 2
a -= 2;
// multiply by 2
a *= 2;
// divide by 2
a /= 2;

// decimals -> kust pu a point on them
var decimal = 2 * 2.5

// Remainder
var remainder;
remainder = 11 % 3; // 2
// Get type:
log(remainder + " is of type: " + typeof reminder);