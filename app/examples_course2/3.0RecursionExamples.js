/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Recursion exercise to create COuntdown');
/* coding examples */

/* Note: Recursive functions mus have a base case when they return without calling the function again (like n<=0) */


// EX 1: multiply elements from index 0 to n (inclusive) of an array:
let arr = [2,2,2,2];
let n = 2;
log("for loop: " + getProduct(arr, n)); // == log(getProduct(arr, n-1)*arr[n]);

function getProduct(arr, n) {
  let product = arr[0];
  for(let i = 1; i <= n; i++){
    product *= arr[i];
  }
  return product;
}
// Notice that:  getProduct(arr, n) == arr[n] * getProduct(arr, n-1)  (top value times all the values before multiplied)  
log("comparison: " + arr[n] * getProduct(arr, n-1));

// So you can write it RECURSIVELY! :
log("recursive: " + getProductRecursive(arr, n));

function getProductRecursive(arr, n) {
  if(n <= 0){         // base case
    return arr[0];
  } else {
    return arr[n]*getProductRecursive(arr, n-1);
  }
}

/* EX2: Write a recursive function sum(arr,n) that returns the sum of the elements from 0 - n (inclusive) in array */
 log(`Sum until index ${n} of array [${arr}] = ${sum(arr, n)}`)

function sum(arr, n) {
  if(n <= 0){
    return arr[0];
  } else {
    return arr[n] + sum(arr, n-1);
  }
}


/* EX3: function that returns an array of consecutive integers starting with 1 through the number passed to the function.
For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1] */
log(countdown(5));

function countdown(n) {
  if(n <= 0){
    return [];
  } else {
    let arr = countdown(n-1);
    arr.unshift(n);
    return arr;
  }
}

/* EX4: The function should return an array of integers which begins with a number represented by the startNum parameter 
and ends with a number represented by the endNum, also work for cases where both startNum and endNum are the same. 
ex: rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5]. */
log(rangeOfNumbers(6,9));

function rangeOfNumbers(startNum, endNum) {
  if(startNum >= endNum){
    return [startNum];
  } else {
    let arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }
}


