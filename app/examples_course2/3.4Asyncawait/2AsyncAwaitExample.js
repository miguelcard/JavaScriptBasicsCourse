/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Async Await Example');
/* coding examples */

/* Exercise: 
  Take the example from "GeneratorsAndPromises.js and write it in Async Await terms"
*/

//Old: 
import { coroutine as co } from 'bluebird';

const getRandomUsers2 = co(function* (number) {
  const data = yield fetch(`https://randomuser.me/api/?results=${number}`); // gives already the data var from above
  const dataJson = yield data.json();
  return dataJson;        // Important return! no next needed to be called (better at end to use return than yield: value/generator will  have the .value + .done to True
});

getRandomUsers2(2).then(jsonObjects => { // this function returns promise with JSON objects from return method! In the promise you can make the final verify
  jsonObjects.results.forEach(user => {
    const {gender, email} = user;
    log(gender + " - " + email);
  });
}).catch( err => log);


// Using Async Await:

const getAsyncRandomUsers = async (number) => {
  const data = await fetch(`https://randomuser.me/api/?results=${number}`);
  return await data.json();     // we use await also here because data.json(); returns a Promise!
}

getAsyncRandomUsers(3).then( response => {
  response.results.forEach(user => {
    const {gender, email} = user;
    log(`async: ${gender} -  ${email}`);
  });
});


// above is the same as this: 
const getAsyncRandomUsers2 = async function(number) {
}
//it can be even simplified to this (without pharentheses):
//const getAsyncRandomUsers = async number => {