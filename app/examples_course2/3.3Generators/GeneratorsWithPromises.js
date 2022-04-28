/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Generators + Promises');
/* coding examples */

/* The question still is: WHY are generators needed? in which situations are they used?

                      ~ Use generators with promisses: ~  (ASYNC AWAIT best sol, see next chapter)

  to do this you would need a library (bluebird or CO) because normally if a generator yields a promise, it doesn´t know what to do with it (because pomise has .then() and .catch())
  Use: in the "coroutine" method!
*/

// From "PromisesImplemented.js" we had:
const getRandomUsers = (number) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${number}`);    // API returns a Pomise
  fetchRandomUsers.then(data => { // "calback hell"
    data.json().then(jsonObjects => { // "callback hell"
      jsonObjects.results.forEach(user => {    // in API, "results" returns an array
        const {gender, email} = user;
        log(gender + " - " + email);
      });
    })
  });
}

// getRandomUsers(5);

// what we have above would be without Generators, and calling back a value takes some work to be done "callback hell" = calling the promise, .then() methods and .catch() manually OR/AND havinf deep (nested) operations just to get the value

/* Same but with coroutine() (from bluebird library):
 -> each segment until a "yield" would be executed and would not continue if .next() wasnt called
 -> BUT here we have a 'return' keyword, (so that is returned at the end even if it has to skip through 'yields') -> parentheses is what I think, maybe thats how it behaves with this bluebird library
*/
import { coroutine as co } from 'bluebird';

const getRandomUsers2 = co(function* (number) {
  const data = yield fetch(`https://randomuser.me/api/?results=${number}`); // gives already the data var from above
  const dataJson = yield data.json();
  return dataJson;        // Important return! no next needed to be called (better at end to use return than yield: value/generator will  have the .value + .done to True
});

getRandomUsers2(5).then(jsonObjects => { // this function returns promise with JSON objects from return method! In the promise you can make the final verify
  jsonObjects.results.forEach(user => {
    const {gender, email} = user;
    log(gender + " - " + email);
  });
}).catch( err => log);

/*
 IMPORTANT NOTE:
 this Bluebird coroutine function is not normally used, Because to use Generators & Promises JS comes already with somethig called:
        ASYNC AWAiT!
 ... see next chapter
*/