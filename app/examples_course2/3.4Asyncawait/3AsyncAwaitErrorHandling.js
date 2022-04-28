/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Async Await Handle errors');
/* coding examples */


/* Async Fcn with an error in fetch path:
  Just use TRY CATCH blocks
*/

const getAsyncRandomUsers = async (number) => {
  try {
    const fetchUsers = await fetch(`wrongpath.me/api/?results=${number}`);
    const data = await fetchUsers.json(); // here error is thrown  // we use await also here because .json(); returns a Promise! 
    // data.results.forEach(user => {    // just to print data
    //   const {gender, email} = user;
    //   log(`async: ${gender} -  ${email}`);
    // });
    return data;
  } catch (error) {
    log(error);
  }
}

getAsyncRandomUsers(3); // then use Promise with .then() to read its results normally