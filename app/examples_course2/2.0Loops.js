/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Iterating')
/* coding examples */

var array = [];
// populate till 4 with while loop:
var i = 1;

while(i <= 4) {
  array.push(i);
  i++;
}
log(array);

// do while
var m = 11;
do{
  log("do while entered!")
}while(m < 10);

// same with for loop
var arr2 = [];
for(var i = 1; i <=4 ; i++){
  arr2.push(i);
}
log(arr2);

// Incremet by even numbers for example
var evenArr = [];
for(var k = 2; k < 21; k += 2){
  evenArr.push(k);
}
log(evenArr);

// For loop counting backwards
var backwardsArray = [];
for(var i = 10; i > 0; i -= 2){
  backwardsArray.push(i);
}
log(backwardsArray);

// iteratin through array:
log("Iterating through array: ")
for(var i = 0; i < backwardsArray.length; i++){
  log(backwardsArray[i]);
}

// nesting for loops for multi dim array
var multiArr = [[1,2,3], [3,4], [5,6,7]];
log("multi arr multiplication product: " + multiplyAll(multiArr));

function multiplyAll(multiArr){
  var product = 1;

  for(var i = 0; i < multiArr.length; i ++){
    for(var k = 0; k < multiArr[i].length; k++){
      var element = multiArr[i][k];
      log("multi arr element: " + element);
      product *= element;
    }
  }
  return product;
}

// FOR OF (like for each):
let realNumArray = [1 ,2, 2, 4, -3, 6.6, -11.1];
for(let number of realNumArray){
  log(number);
}