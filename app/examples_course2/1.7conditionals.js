/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Conditionals')
/* coding examples */

// Comparing value equallity
var number = 55;
var isValueEqual = (number == 55);
log(isValueEqual);

// Strict equallity -> 
// the equality operator (==) converts values to a commont type while the strict equality (===) does not, hence different types return false
log(55 == '55'); // true    opposite is != 
log(55 === '55'); // false  opposite is !==

 // Greather than, equal -> same a Java ( > , >= ...)

 // And / OR -> same as Java ( && , || )

 // if , else, else if -> same as java

 // switch statement (same as java):
 var value = 3;
 var answer;
 switch(value) {
    case 1:
        answer= "alpha";
        //break;
    case 2:
        answer= "beta";
        //break;
    case 3:
        answer= "gamma";
        //break;
    case 4:
        answer= "delta";
        //break;            withot break it gets here (value is 1 OR 2 OR 3 OR 4), once it enters one and itdoes not break, it enters all the following below
    }

 log("switch case ans: " + answer);

 // NOTE: The break statements are necessary because without them, statements in switch blocks fall through: 
 // All statements after the matching case label are executed in sequence, regardless of the expression of subsequent 
 // case labels, until a break statement is encountered. Ex:
 switch (value) {
     case 2:
         log("value is smaller than 3 ");
         break;
    case 3:
        log("value is 3");
        // NO BREAK
    case 4:
        log("value is 3 OR 4");
        break;
    default:
        log("default entered");
        break;
 }

 // Case where multiple inputs get the same output:
 var val2 = "car";
 switch (val2) {
     case "car": // no break, just goes to next automatically
     case "plane":
     case "train":
         log("value is a transport! ");
         break;
    case "fruit":
    case "hamburger":
    case "fetuccini":
        log("value is food!");
        break;
    case 1:                     // you can also have different data types
    case 2:
    case 3:
        log("val is  anumber!");
        break;
     default:
         log("Value is stuff");
         break;
 }