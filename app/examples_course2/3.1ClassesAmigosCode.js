/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('ES6 Classes');
/* coding examples */

class Animal {
  constructor(name, age) {
    log(`ctor: ${name} is an animal and was created`);
    this.name = name;
    this.age = age;
  }
  
  // STATIC METHOD: can be called without having instace of a class
  // Only callabe on class (not on instances)
  static aStaticMethod(){
    log(`I am a static method!! `);
  }

  eat(){
    log(`${this.name} animal is eating`);
  }

  sleep(){
    log(`${this.name} is sleeping`);
  }

  logAge(){
    log(`${this.name} is ${this.age} years old`);
  }
}

// Inheritance:
class Dog extends Animal {
  constructor(name, age, breed){
    super(name, age);
    this.breed = breed;
  }

  logBreed(){
    log(` this dog called ${this.name} is of breed: ${this.breed}`);
  }

  //just to show you can call methods from superclass:
  // logAgeFromDog(){
  //   super.logAge();
  // }
}

Animal.aStaticMethod();

const bruno = new Dog('Bruno', 5, 'Doberman');
bruno.logBreed();
bruno.logAge();

//create obj
const bobby = new Animal("Bobby", 2);
bobby.eat();
bobby.sleep();
bobby.logAge();