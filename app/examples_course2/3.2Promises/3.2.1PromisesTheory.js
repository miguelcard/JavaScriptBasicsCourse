/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Promises');
/* coding examples */

/* Promise object is used for asynchronus computations
Represents value, can be available (now, future or never)

Promise states:

Pending: initial, nothing fulfilled or rejected
Fullfilled: Operation completed successfully
Rejected: meaning that the operation failed

 use "then" and "catch" for fulfilled/ rejected promises
*/

const promise = new Promise((resolve, reject) => {

  //the setTimeots are just to dummy which method happens first
  setTimeout (() => {             // setTimeot takes(callback -> what gets executed after timeout, timeout time -> after when THIS method gets invoked
    resolve('data back from the server')
  }, 1000);

  setTimeout (() => { 
    reject('server did not return anything, there was an error')
  }, 2000);
}); // function inside ctor

// Call Above Promise:
promise.then(data => {
  log('Response: ' + data); // If resolve() method happens first this is called -> response holds data
}).catch(error => {
  log('Error: ' + error);  // and if reject() method happens first this is called -> error holds data
});


/* Promise.all ______________________________________________________________________________
Idea: to call various promises and get their data ONLY if ALL are resolved(), if any one fails you wont get any data at all!
Example:
Given two promisses, call both at the same time and get both responses together, or none, 
if the reject() of one happens first then none is returned (and error)
*/

const namesPromise = new Promise((resolve, reject) => {
  setTimeout (() => {
    resolve(['Ali', 'Miguel', 'Alberta', 'Marge']);
  }, 1000); // happens first

  setTimeout (() => { 
    reject('server did not return anything for Names, there was an error')
  }, 2000); // does not happen
});

const idsPromise = new Promise((resolve, reject) => {
  setTimeout (() => {
    resolve([1, 2, 3, 4]);
  }, 1000); // happens first

  setTimeout (() => { 
    reject('server did not return anything for IDs, there was an error')
  }, 2000); // does not happen
});

// Calling both and getting DATA from both TOGETHER!
Promise.all([namesPromise, idsPromise])
.then(data => {
  const[names, ids] = data;
  for(let i = 0; i < names.length; i++){
    log(`person id: ${ids[i]} has name: ${names[i]}`);
  }
}).catch(error => {
  log(error);
});