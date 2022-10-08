export function renderPost(post) {
    const li = document.createElement('li');
    li.classList.add('thread');

    const a = document.createElement('a');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.description;

    const img = document.createElement('img');
    img.src = post.image_url;

    // doesnt create a blank img for imageless posts
    if (post.image_url) {
        a.append(h3, p, img);
    } else {
        a.append(h3, p);
    }
    li.append(a);

    return li;
}
