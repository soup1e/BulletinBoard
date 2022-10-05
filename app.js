/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const catogorySelect = document.getElementById('catogory-select');
const form = document.getElementById('compose');
const addPostButton = document.getElementById('add');
const errorDisplay = document.getElementById('error');
/* State */
let error = null;
/* Events */

/* Display Functions */
function displayError() {
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
