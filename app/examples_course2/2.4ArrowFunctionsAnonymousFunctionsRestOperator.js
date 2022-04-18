/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Arrow functions = Anonymous functions, Rest Operator')
/* coding examples */

// Anonymous function is a function without a name, EX1:
var aDate = function() {
  return new Date();
};

// same as:
var aDate = () => {
  return new Date();
};

// same as:
var aDate = () => new Date();

// EX2:
var concatArr = function(arr1, arr2) {
  return arr1.concat(arr2);
};

// same as:
var concatArr = (arr1, arr2) => {
  return arr1.concat(arr2);
};

// same as:
var concatArr = (arr1, arr2) => arr1.concat(arr2);

log(concatArr([1,2], [1,2,3]));
log(concatArr([11,22], [11,22,33]));

// HIGHER Order arrow functions:
// create a function which takes only positive integers from an array and squares them then returns resulting array

const squarePositives = (arr) => {
   return arr.filter(num => num > 0 && Number.isInteger(num)).map(num => num*num);
};
// (I) whats inside filter() and map() are functions!! and easiest is to pass arrow functions!!
// Same as java but java is with -> and JS with =>

let realNumArray = [1, -2, 3.14, 5.5, 7, 3, -10, 2, -1];
let resultinArr = squarePositives(realNumArray);
log(resultinArr);

//____________________________________________________________
// SET a dafault value to a function in case none is passed

// this is what the guy had in the video 2:53 but I dont know what the F*ck that is, or why such complexity for such a simple function
// const increment = (() => {
//   return function increment(number, value = 1){
//     return number + value;
//   };
// })();

const increment = (num, value =1) => num+value;

log(increment(5, 2));
log(increment(5));


// reduce method in arrays = reduces all elements of array into a single value
// the single value can be any data type (int, tring, bool ...)
let anArray = [1,2,3];
// reduce takes a fuction and the initial value of the accoumulator, which in this case is Zero
// the acumulator automaticcally takes the last value returned by the function for each arrayValue
// the accumulator is similar to a sum bariable if you were doing it with a "forof" loop -> let sum =0; for(let n of array){ sum += n; }
// first "iteraion" is then 0 + 1 returns accumulator = 1
// second "iteraion" is then 1 + 2 returns accumulator = 3
let sum = anArray.reduce(
  (accumulator, arrayValue) => accumulator + arrayValue,    // funtion that rhappens for each arrValue & assigns the returned value to the accumulator (all implicit)
  0                                                         // initial value for accumulator
);
log("reduce sum 1: " + sum);

// if  no initial value is specified, the accumuator takes the default of the first element 
// first "iteraion" is then 1 + 2 returns accumulator = 3
sum = anArray.reduce(
  (accumulator, arrayValue) => accumulator + arrayValue
);
log("reduce sum 2: " + sum);

// Rest Operator  -> takes variable number of arguments: all passed to method call is put in an array!
const sumFunction = (...argsArr) => argsArr.reduce((accumulator, arrVal) => accumulator + arrVal);
log("sum function: " + sumFunction(1,2,3,4));

// This OPERATOR (...arr) can be also used to "give" the contents of an array:
let arr1 = ['JAN', 'FEB', 'MAR'];
let arr2;
arr2 = arr1;
arr1[0] = 'BLAAA';
log(arr2); // arr2 also has the change from arr1, both poit to the same object
// to copy it, copy just its contents:
arr1 = ['JAN', 'FEB', 'MAR'];
arr2 = [...arr1]; // ...arr1 is just the contents of arr1 = 'JAN', 'FEB', 'MAR'
arr1[0] = 'HELLLOO';
log(arr2);


// DIFFEREMCES BETWEEN ARROW FUNCTIONS AND NORMAL FUNCTIONS:

// 1. Arrow functions are ALWAYS anonymous (wich means have no name but you can assign them to a variable), normal functions can be anonymous or can have a name
// 2. Arrow functions can be called only after their declaration, normal functions can be called anytime (this is called Hoisting)
// 3. Arrow functioms dont have a variable called "this", its borrowed from outer scope i.e. the "this" is where function is defined, for normal functions the "this" is scope where fcn is called

// Modernally arrow functions are used a lot in JS, usally assigned to a const variable (see https://www.youtube.com/watch?v=h33Srr5J9nY)

// Example of 2.
const stats = {
    max: 40,
    min: 0,
    media: 34.5,
    mode: 11,
    avg: 'bla'
  };
  
  log(normalFunction(stats)); // works!
  log(arrowFunction(stats)); // Error: "Function is not defined", because is defined afterwards!
  
  const arrowFunction = (statsObj) => {
    return (statsObj.max + statsObj.min) / 2.0;
  };
  
  function normalFunction(statsObj) {
    return (statsObj.max + statsObj.min) / 2.0;
  }
  
  log(arrowFunction(stats)); // works!