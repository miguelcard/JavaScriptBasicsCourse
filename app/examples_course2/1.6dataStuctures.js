/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Data Structures')
/* coding examples */

// There is no QUEUE datatype in JS!, but we can make it with an array:
var testArr = [5,4,3,2,1];

function nextInLine(arr, item){ //like a queue returning the next val
    testArr.unshift(item);
    return testArr.pop();
}

log(nextInLine(testArr, 6));
log(JSON.stringify(testArr));