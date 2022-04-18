/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('String Arrays')
/* coding examples */

// Example ... LOOK AN ARRAY CAN HAVE VALUES OF MANY DATATYPES !!
var myArray = ["Migueluy", 25];
var anArray = ["Berto", 12];

// nested arrays:
var aNestedArray = [["Migueluy", 25], ["Berto", 12]];

// access data (just with indexes):
var numberArray = [ 10, 20, 40];
log(numberArray[0]) // is 10;

// modyfy values (just like java):
numberArray[0] = 5;
log(numberArray[0]) // is 5

// access multidimensional array (Inner arrays can have any dimension)
var mArray = [[1,2,3], [4,5,6], [[3,3,1], 8, 9]]
var element = mArray[1][2] //secondArrayThirdElement = 6

// Array push() -> add to end of array, pop() -> remove last element, and return it
var pets = [["Dog", 7], ["Cat", 3]];
pets.push(["Fish", 1]); // adds fish at the end
log(pets)
var removedFish = pets.pop(); // removes last element
log(pets)
log(removedFish);

var firstElementRemoved = pets.shift(); // shift() removes first element which is Dog
pets.unshift(["Fish", 1]) // adds fish at the beggining

// cntinue on 48:33