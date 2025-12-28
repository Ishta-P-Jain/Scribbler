function openSignUp() {
    document.getElementById("signupModal").style.display = "block";
}

function closeSignUp() {
    document.getElementById("signupModal").style.display = "none";
}

function openSignIn() {
    document.getElementById("signinModal").style.display = "block";
}

function closeSignIn() {
    document.getElementById("signinModal").style.display = "none";
}

function switchToSignUp() {
    closeSignIn();
    openSignUp();
}
function switchToSignIn() {
    closeSignUp();
    openSignIn();
}           

// Create Post modal handlers
function openCreatePost() {
    var modal = document.getElementById("createPostModal");
    if (modal) modal.style.display = "block";
}

function closeCreatePost() {
    var modal = document.getElementById("createPostModal");
    if (modal) modal.style.display = "none";
}
