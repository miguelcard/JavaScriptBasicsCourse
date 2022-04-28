/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Generators');
/* coding examples */

/*
Generator is a function that can be paused
allows code in ASYNC fashion

Syntax:
(*) after the function keyword
(yield) after the value expected to be yield (resolved or returned for whatever computation) 
i.e Yield returns a value only once, and the next time you call the same function it will move on to the next yield statement.
*/

function* numbersGen(){
  const numOne = yield 1;
  const numTwo = yield 2;
  const numThree = yield 3;
}

// setup values:
const genIterator = numbersGen();
// call values: 
genIterator.next(); // returns an object, executes first yield
genIterator.next().value; // returns YIELDED values of fcn
genIterator.next().done; // boolean, generator finished?


// Example 2:________________________________
log("Example 2:")

 const getThings = function* () {
   yield 33;
   yield " My Name is";
   yield {"name": "Alex", "last_name": "the Hammer"};
   yield true;
   return
 }
let thingsGenIterator = getThings(); // here nothing happens because this fcn must be traversed line by line, just returns generator
//  console.log(getThings().next()); // if you od this multiple times the function will return the generator from first value each time (33)
 console.log(thingsGenIterator.next());
 console.log(thingsGenIterator.next());
 console.log(thingsGenIterator.next());
 console.log(thingsGenIterator.next());

 // getting generator again:
 thingsGenIterator = getThings();
 log(thingsGenIterator.next().value);
 log(thingsGenIterator.next().value);
 log(JSON.stringify(thingsGenIterator.next().value));
 log(thingsGenIterator.next().value);

 /* _________________________________________________
 Example 3:
 create a get numbers generator
 call each value with next();
 */log("Example 3:")

 const getNumbers = function* (numbers) {
    for(let i = 0; i < numbers.length; i++){
      yield numbers[i];
    }
 }

 let numbersGenIterator = getNumbers([1,2,3,4,5,6]);

 const interval = setInterval(() => {  // repeatedly calls a function or executes a code snippet
   const nextYield =  numbersGenIterator.next();
   if(nextYield.done){
     log("generator done, it has iterated over all the values");
      clearInterval(interval);  // cancels the interval
   } else {
     log(nextYield.value);
   }
 }, 1000);


/* The question still is: WHY are generators needed? in which situations are they used?  -> see next lesson */