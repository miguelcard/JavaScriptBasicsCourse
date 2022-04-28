/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Async Await');
/* coding examples */

/* 
  Before we were using bluebird/coroutine to use Generators + Promises, 
  it turns out we DONT need that!, using plain JS we can use 'Async Await' for that!
*/ 

// 1. we can YIELD PROMISES using 'await'
// 2. we ALWAYS return a PROMISE on the return statement

// EX1 syntax: with 'async function'

async function logName(name){
  log(`name in function: ${name}`);
  return name;
}

logName('Fulanito'); // calls fcn

logName('Pepe').then(response => {  // returns Promise
  log(`This is the response returned in Promise: ${response}`)
});


log('-----------'); // Ex2

async function logColor(color) {

  const colorPromise = new Promise((resolve, reject) => {
    setTimeout(() => 
    resolve(color.toUpperCase()), 
    4000);
    });

  await colorPromise;         // waits until the Promise is returned in THIS method, then continues executing code (but code outside this method keeps on running)
  log(`color logged from function: ${color}`);
  return colorPromise;
}


logColor('blue').then(result => {
  log(`result returned from Promise: ${result}`)
});


log('Last line in code!'); // gets executed before promise is finished