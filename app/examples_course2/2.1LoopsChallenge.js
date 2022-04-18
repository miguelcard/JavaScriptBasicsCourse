/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Loops Challenge')
/* coding examples */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

log(lookUpProfile("Akira", "likes"));

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(var i = 0; i < contacts.length; i++){
    var contact = contacts[i];
    if(contact.firstName === name){
      return contact[prop] || "No such property"; //better than -> contact.hasOwnProperty(prop) ? contact[prop] : "No such property";
    }
  }
  return "No such contact";
}
