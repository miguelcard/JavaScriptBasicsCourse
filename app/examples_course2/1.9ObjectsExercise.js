/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Objects Challenge')
/* coding examples */

// You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire record collection object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(value === ""){
        delete records[id][prop];
    } else if(prop !== "tracks"){
        records[id][prop] = value;
    } else if(!records[id].hasOwnProperty("tracks")){
        records[id].tracks = [value];
    } else {
        records[id].tracks.push(value);
    }
    return records;
  }
  
  // Solution by guy in the video:
  function updateRecordsVideoSol(records, id, prop, value) {
    if(value === ""){
        delete records[id][prop];
    } else if(prop === "tracks"){
        records[id][prop] = records[id][prop] || []; // (I) Means, if this prop exists just take its value, else take empty array!
        records[id][prop].push(value);              // This saves an if statement
    } else {
        records[id][prop] = value;
    }
    return records;
  }

  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439, 'tracks', 'Lalala Track');

    // first approach but above is refactored 
    // if(prop !== "tracks" && value !== ""){
    //     records[id][prop] = value;
    // } else if(!records[id].hasOwnProperty("tracks")){
    //     records[id].tracks = [value];
    // } else if (value !== "") {
    //     records[id].tracks.push(value);
    // } else {
    //     delete records[id][prop];
    // }
    // return records;

    // cont 2:10