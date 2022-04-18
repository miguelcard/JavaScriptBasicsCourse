/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Variables var, let, const')
/* coding examples */

// with var you can devlare the value globally various times
var varVar = 100;
var varVar = 200; 

// but let is only specific to its scope, and you can declare it only once
let letVar = 1;
// let letVar = 2;   // Error: letVar was already assigned

for(let i = 0; i < 10; i++){
  // do something
}
// log(i);  // ERROR: i is not defined

// const for read-only variables:
const COLOR = "red";

for(let i = 0; i < 10; i++){
  // COLOR = "blue";  // not possible
  const SPEED = 800;
}
//  print(COLOR + SPEED);  // SPEED is not defined in this scope

// YOU CAN MUTATE AN ARRAY WITH CONST
const arr = [1,2,3];
arr[1] = 5;
log(arr); //[1,5,3]

// PROTECT an OBJ or ARRAY from mutation:
const MATH_CONSTANTS = {
  "pi": 3.141,
  "gravityAcceleration": 9.8
};

try {
  MATH_CONSTANTS.pi = 999; // you can still change obj properties

  Object.freeze(MATH_CONSTANTS); // But after this ...
  MATH_CONSTANTS.pi = 666; // ... changing a property gives an error
} catch (error) {
  log(error);
}
log(MATH_CONSTANTS.pi);