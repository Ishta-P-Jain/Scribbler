// Create post handler: validate, save to localStorage, close modal
function createPost() {
	var modal = document.getElementById('createPostModal');
	if (!modal) return;

	var titleInput = modal.querySelector('input[type="text"]');
	var textarea = modal.querySelector('textarea');
	var title = titleInput ? titleInput.value.trim() : '';
	var content = textarea ? textarea.value.trim() : '';

	if (!title || !content) {
		alert('Please enter both a title and content for your post.');
		return;
	}

	// simple persistence using localStorage
	try {
		var posts = JSON.parse(localStorage.getItem('scribbler_posts') || '[]');
		posts.unshift({ id: Date.now(), title: title, content: content, author: 'You' });
		localStorage.setItem('scribbler_posts', JSON.stringify(posts));
	} catch (e) {
		console.error('Failed saving post', e);
	}

	// reset and close modal
	if (titleInput) titleInput.value = '';
	if (textarea) textarea.value = '';
	modal.style.display = 'none';

	// optional feedback
	alert('Post created (saved locally).');
}

