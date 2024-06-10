document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOMContentLoaded event fired');

  const newPostForm = document.getElementById('new-post-form');
  console.log('newPostForm:', newPostForm);

  const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    console.log('Form Submitted:', { title, content });

    if (title && content) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        console.log('Fetch response:', response);

        if (response.ok) {
          document.location.replace('/profile');
        } else {
          const errorMessage = await response.json();
          console.error('Failed to create post:', errorMessage);
          alert('Failed to create post.');
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Failed to create post.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  if (newPostForm) {
    newPostForm.addEventListener('submit', newFormHandler);
  } else {
    console.error('new-post-form not found in DOM');
  }
});
