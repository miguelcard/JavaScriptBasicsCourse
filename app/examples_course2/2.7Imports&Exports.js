/* styling */
require('styles/main.scss');
/* js */
import $, { valHooks } from 'jquery';
import { log, logTitle } from 'logger';
import { useDebugValue } from 'react';
/* your imports */
logTitle('Import / Export code blocks / Functions');
/* coding examples */

// Old "required was used"
// new: use "import"

// Ex TO IMPORT:
// import { functionName } from "./file_on_same_dir";
// functionName(bla);

// Import everything from a file:
// import * as whateverName from "capitalizeStrings";

// EX TO EXPORT:
export const capitalizeString = (str) => {
  return str.charAt(0).toUppercase() + str.slice(1);
};
// Also export differently:
const capitalizeString2 = (str) => {
  return str.charAt(0).toUppercase() + str.slice(1);
};

export { capitalizeString2 };
// and export vars:
export const pi = 3.1416;
export const certificate = "2893r4f83479g4r378g2g7g/GSsssef";

// export default functOrvar  // this the fallback, the one thing we are going to export from this file
// to impport a default export just do it without curly braces {}
// import substract from "math_functions";  // in this case "substract" is a default export 