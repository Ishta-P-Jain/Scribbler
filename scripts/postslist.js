// Load posts when the page opens
document.addEventListener("DOMContentLoaded", loadPosts);

function loadPosts() {
    const container = document.getElementById("postsContainer");
    if (!container) return;

    // Clear existing posts
    container.innerHTML = "";

    // Get posts from localStorage
    const posts = JSON.parse(localStorage.getItem("scribbler_posts") || "[]");

    // If no posts, do nothing
    if (posts.length === 0) {
        return;
    }

    // Create a card for each post
    posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "post-card";

        card.innerHTML = `
            <div class="post-author">
                ${post.author || "Anonymous"}
            </div>

            <div class="post-content">
                <i class="fa fa-trash delete"
                   title="Delete post"
                   onclick="deletePost(${post.id})"></i>

                <h3>${post.title}</h3>

                <p>${post.content}</p>

                <i class="fa fa-ellipsis-h more"
                   title="Open post"
                   onclick="openPost(${post.id})"></i>
            </div>
        `;

        container.appendChild(card);
    });
}

// Delete a post
function deletePost(id) {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    let posts = JSON.parse(localStorage.getItem("scribbler_posts") || "[]");
    posts = posts.filter(post => post.id !== id);

    localStorage.setItem("scribbler_posts", JSON.stringify(posts));

    loadPosts(); // refresh UI
}

// Open a single post page
function openPost(id) {
    localStorage.setItem("current_post_id", id);
    window.location.href = "post.html";
}
