import '../auth/user.js';

import { createPost } from '../fetch-utils.js';

const form = document.getElementById('compose');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('error-display');

const errorDisplay = document.getElementById('error-display');

let error = [];

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const post = {
        title: formData.get('title'),
        description: formData.get('text'),
    };

    // Stops no image posts from creating error
    // probably an easier way but idk

    const imageFile = formData.get('image');

    if (!imageFile.size) {
        post.image_url = ''; // makes null -> ""
    }

    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});

function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
