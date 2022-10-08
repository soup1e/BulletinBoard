import '../auth/user.js';

import { createPost, uploadImage } from '../fetch-utils.js';

const form = document.getElementById('compose');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('preview');

const errorDisplay = document.getElementById('error-display');

let error = [];

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '/assets/alchemy-favicon.png';
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const imageFile = formData.get('image');

    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `post/${randomFolder}/${imageFile.name}`;
    const url = await uploadImage('images', imagePath, imageFile);

    const post = {
        title: formData.get('title'),
        description: formData.get('text'),
        image_url: url,
    };

    // Stops no image posts from creating error
    // probably an easier way but idk
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
