/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Concise code: object literal declarations + Classes! ');
/* coding examples */

// EX: you can have a method like this create an obj:
const createPerson = (name, age, mail) => {
  return {
    name: name,
    age: age,
    mail: mail
  }
};

let juanito = createPerson("Juanito", 22, "j@gmail.com");
log(`${juanito.name} , ${juanito.age} , ${juanito.mail}`);


// But you can do the same better like this, JS knows that you are assigig thid fields in order
const createPersonBetter = (name, age, mail) => {name, age, mail};

let jose = createPerson("jose", 11, "j@gmail.com");
log(`${jose.name} , ${jose.age} , ${jose.mail}`);


// Declare a function inide object:
const bicycle = {
  gear: 2,

  // pretty stright forward
  incremetGear(){
    this.gear += 1;
  },

  // with an arg
  setGear(gear){
    this.gear = gear;
  }
};

bicycle.incremetGear();
log("Bike gear: " + bicycle.gear);


// CLASSES: 
// create objects using the class keyword
// the OLD way to crete objets was with a function:
var PersonOld = function(name) {
  this.name = name;
}
// client code:
let pepe = new PersonOld("Pepe Perez");

// The NEW and correct way: see: https://www.youtube.com/watch?v=h33Srr5J9nY
class Person {
  constructor(name){
    this.name = name;
  }
}

let pepeNew = new Person("Pepe Renovado");
log(pepeNew.name);

// another class example:
class Vegetable {
  constructor(price){
    this.price = price;
    this.sold = false;
  }

  sell(){
    this.sold = true;
  }
}

let v = new Vegetable(11);
log("was sold: " + v.sold);
v.sell();
log("wa sold:" + v.sold);

// GETTERS and SETTERS:
class Termostat{
  constructor(temp){
    this._temp = temp;
  }
  // converts it to celcious
  get temperature(){
    return this._temp*3;
  }
  // gets it in cels and saves it in fars
  set temperature(updatedTemp){
    this._temp = updatedTemp/3;
  }
}

let termo = new Termostat(25);
log(termo._temp); // pa que los getter, setters si esto sigue siendo publico???!!
log(termo.temperature); // calls getter
termo.temperature = 69; // calls setter
