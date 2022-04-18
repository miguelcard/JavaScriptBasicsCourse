/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('String scaping')
/* coding examples */

// Strings are immutable

// escape qutes with \ symbol
log("Hola \"trivi\"")

// or use single quotes outside instead
log('Hola "trivi"') 

// you can also use single quotes and double quites both within the String with ` outside
log(` this string has 'both single quotes' and "double quotes"`)

/* Ecape examples 
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
\'	Single quote
\"	Double quote
\\	Backslash
*/

// concatenate strings:s
var concatenated = "start string " + " end string";
concatenated += ". dot at the end :)";
// find lenth 
var length = concatenated.length;
// find first char:
var firstLetterOfConcatenated = concatenated[0] //should be: "s"
// find last char:
var lastChar = concatenated[concatenated.length-1]

// Strings are immutable, so you can not change a letter for example:
// concatenated[0] = "X"

