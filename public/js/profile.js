document.addEventListener('DOMContentLoaded', (event) => {
  const newPostForm = document.getElementById('new-post-form');

  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();

      if (title && content) {
        try {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to create post.');
          }
        } catch (err) {
          console.error('Error:', err);
          alert('Failed to create post.');
        }
      } else {
        alert('Please fill out all fields.');
      }
    });
  }
});

  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
  