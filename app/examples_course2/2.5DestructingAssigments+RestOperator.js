/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Destructing Assignments to assign variables from objects, Rest Operator')
/* coding examples */

// assign values comming from an object to a variable:
// OLD SCHOOL:
let obj = {
    x: 2.6,
    y: 5,
    z: 7.99
};
let x = obj.x;

// BETTER WAY WHEN MANY VARIABLES NEED TO BE ASSIGNED:
const { x:ex, y:wai, z:zet} =  obj; // then ex = 2.6, wai = 5, zet = 7.99
log(ex + ", " + ", " + wai + ", " + zet);

// Another example:
const AVG_TEMP = {
  march: 13,
  april: 16 
};
const {april:aprilTemp} = AVG_TEMP;
log(aprilTemp);

// Same for nested objects:
const LOCAL_FORECAST = {
  today: { min: 10, max: 16},
  tomorrow: {min: 12, max: 18}
};

const {today: {min:minToday}} = LOCAL_FORECAST;
log(minToday);

// Destructing arguments for ARRAYS: 
// it just goes in order:
let [a , b, , , c] = [1, 2, 3, 4, 5]; // a = 1, b = 2, c = 5 
log(c); 
let j = 8, k=9;   // assign two at once
[k, j] = [j, k];  //switches around the values of the vars

// EX: reassign array elements into variables: (using Rest Operator and Destructing Assignment)
let source = [100,0,3,4,5,6,7,8,9,10];
let [ h , g , ...anyname] = source;
log(anyname);
log(h + ", " + g);

// you can also set a default value if nothing is returned
let [first, second , third = 3] = [1,2];
log(third); // Logs , its the default, but its overrite if a tird element was in the array

// pass only SOME parameters of an object to a function.
const stats = {
  max: 40,
  min: 0,
  media: 34.5,
  mode: 11,
  avg: 'bla'
};

let halfValue = ({min, max}) => {
  return (max + min) / 2.0;
};

log("half value: " + halfValue(stats));