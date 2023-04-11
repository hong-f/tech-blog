// post button
const createPostButtonHandler = async (event) => {
    event.preventDefault();

    document.location.replace('/dashboard/new');
};

// new post
const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-contents').value.trim();

    if (title && contents) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

if (document.querySelector('.create-post-button')) {
    document
        .querySelector('.create-post-button')
        .addEventListener('click', createPostButtonHandler);
};

if (document.querySelector('.new-post-form')) {
    document
        .querySelector('.new-post-form')
        .addEventListener('submit', newPostFormHandler);
};