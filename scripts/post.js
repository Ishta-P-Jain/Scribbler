let likes = 0;
let isEditing = false;
let currentPost;

document.addEventListener("DOMContentLoaded", loadPost);

function loadPost() {
    const posts = JSON.parse(localStorage.getItem("scribbler_posts") || "[]");
    const postId = localStorage.getItem("current_post_id");

    currentPost = posts.find(p => p.id == postId);
    if (!currentPost) return;

    document.getElementById("title").innerText = currentPost.title;
    document.getElementById("author").innerText = currentPost.author || "Anonymous";
    document.getElementById("content").innerText = currentPost.content;
}

function toggleEdit() {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const btn = document.getElementById("editBtn");

    if (!isEditing) {
        title.contentEditable = true;
        content.contentEditable = true;
        title.style.border = "2px solid pink";
        content.style.border = "2px solid pink";
        btn.innerHTML = 'Save <i class="fa fa-save"></i>';
    } else {
        title.contentEditable = false;
        content.contentEditable = false;
        title.style.border = "none";
        content.style.border = "none";
        btn.innerHTML = 'Edit <i class="fa fa-edit"></i>';

        currentPost.title = title.innerText;
        currentPost.content = content.innerText;

        let posts = JSON.parse(localStorage.getItem("scribbler_posts"));
        posts = posts.map(p => p.id === currentPost.id ? currentPost : p);
        localStorage.setItem("scribbler_posts", JSON.stringify(posts));
    }

    isEditing = !isEditing;
}

function likePost() {
    likes++;
    document.getElementById("likeBtnText").innerText = "Liked!";
    document.getElementById("likes").innerText =
        likes === 1 ? "1 person likes this!" : `${likes} people like this!`;
}

function addComment() {
    const input = document.getElementById("commentInput");
    if (!input.value.trim()) return;

    const div = document.createElement("div");
    div.className = "comment";
    div.innerText = input.value;

    document.getElementById("comments").prepend(div);
    input.value = "";
}
