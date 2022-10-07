export function renderPost(post) {
    const li = document.createElement('li');
    li.classList.add('thread');
    const a = document.createElement('a');

    const div = document.createElement('div');
    div.textContent = post.category;

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.text;

    const img = document.createElement('img');
    img.src = post.image_url;

    if (post.image_url) {
        a.append(h3, div, img, p);
    } else {
        a.append(h3, div, p);
    }

    li.append('a');

    return li;
}
