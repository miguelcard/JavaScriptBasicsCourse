/* styling */
require('styles/main.scss');
import { reject, resolve } from 'bluebird';
/* js */
import $, { data, valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Promises & Fetch API');
/* coding examples */


/*
from https://randomuser.me/ we can get random user data through APIs

Notice that Promies are not created by you, rather returned by the API just for use
fetch() -> calls API
data.json() -> cals JSON data, is another promise!
*/
const getRandomUsers = (number) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${number}`);    // this API returns a Pomise
  fetchRandomUsers.then(data => {
    data.json().then(jsonObjects => {
      jsonObjects.results.forEach(user => {    // in API docu "results" returns an array
        const {gender, email} = user;
        log(gender + " - " + email);
      });
        // const jsonString = JSON.stringify(jsonObject); No need to have the string
    })
  });
}

getRandomUsers(5);