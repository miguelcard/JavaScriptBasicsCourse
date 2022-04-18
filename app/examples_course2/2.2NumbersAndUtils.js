/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Numbers and Functions')
/* coding examples */

// Generate random numbers:

log("Random number between 0 and 1 : " + Math.random());
log("Random number between 0 and 20: " +  Math.random()*20);
log("Random WHOLE number between 0 and 20: " +  Math.floor(Math.random()*20));

// Generate whole numbers within a range:
// from 10 to 20
var i = 0;
while(i < 30){
  randomNumberRange(8, 10);
  i++;
}

function randomNumberRange(min, max){
  return min + Math.floor(Math.random()*(max-min+1));
}

// Parse string to int:
var i = parseInt("50");
log(i+1);
// parse binary to int
log(parseInt("10011",2)); // base 2, its 19!

// Nested ternary operator -> condition ? true : flase;
log(checkSign(-5));

// returns string "positive", "negative" or "zero"
function checkSign(number){
  return number < 0 ? "Negative" : number > 0 ? "Positive" : "Zero";
}
 
