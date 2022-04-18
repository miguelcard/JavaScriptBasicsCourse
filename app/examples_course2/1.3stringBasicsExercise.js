/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('String scaping')
/* coding examples */

// pass words to a function and make a sentence

function wordBlanks(noun, adjective, verb, adverb) {
    var result = "The " + adjective + " " + noun + " " + verb + " " + adverb;
    return result;
}

log(wordBlanks("cat", "smart", "climbed", "quickly"))
log(wordBlanks("dog", "dumb", "fell", "quickly"))


// BETTER SOLUTION = CREATE A STRING USING TEMPLATE LITERALS: 
// With the ` ` you can put variables inside, create new lines, etc...
// Example:
const person = { name: "Rosa", age: 23};

let greeting = `Hello my name is ${person.name}
... and I am ${person.age} years old`;

log(greeting);

// Example / Challenge:
// given an object with an array of messages for each situation:
const messages = {
  success: ["max-length", "no-amd", "prefer-arrow-fuctions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
}

log(makeHTMLList(messages.success));

// based on array passed to function, parse it so that each element looks like an html list
function makeHTMLList(arr) {
  let formatedArr = [];
  for(let message of arr){
    formatedArr.push(`<li class="text-warning">${message}</li>`);
  }
  return formatedArr;
}
