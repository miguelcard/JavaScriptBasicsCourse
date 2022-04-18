/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Objects')
/* coding examples */

log("JavaScript has no Classes, although JavaScript is object-oriented language, it isn't a class-based language—it's a prototype-based language. There are differences between these two approaches, but since it is possible to use JavaScript like a class-based language, many people (including myself) often simply refer to the constructor functions as \"classes\"");
log(" ");

//  JSON
var dogObj = {
    "name": "Bruno",
    "breed": "Golden Retriever",
    "legs": 4,
    "age": 5,
    "friends": ["many!"],
    "family name": "Bruno Casas de la Torre",
};

// accessing props:
var dogName = dogObj.name;
var dogFriends = dogObj.friends;
// accessing a prop with spaces:
var familyName = dogObj['family name']; // when obj property has spaces, HAVE to access it with brackets!

var grades = {
    1: "Excellent",
    3: "Mediocre",
    5: "Really Bad"
};
var goodGrade = 1;
var gradeText = grades[goodGrade]; // passed prop name of object in the variable

// Assign Object properties
dogObj.name = "Ernesto";
// Add a new property
dogObj.newProp = "this is a description of the dog";
dogObj['bark'] = " guau guau!";
log(dogObj.newProp);
// delete obj prop
delete dogObj.newProp;
// you can use object just to store key value pairs too ...

// Check if an object has a property:
log("object has property \"newProp\": " + dogObj.hasOwnProperty("newProp")); // returns false

// Array of objects:
var people = [
    {
        "name": "Pepe",
        "last_name": "Perez",
        "pets" : [
            "fish",
            "turtle"
        ]
    },
    {
        "name": "Karl",
        "last_name": "Fucks",
        "pets" : [
            "dog"
        ]
    }
];

log("Pepes first pet is: " + people[0].pets[0]);
