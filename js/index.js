function getAllPosts() {
    window.location.href= "./html/bloglist.html";
}

function openCreatePost() {
    document.getElementById('newPostModal').style.display='block';
}

function onCloseNewPost() {
    document.getElementById('newPostModal').style.display='none';
}

// // Get the modal fir sign up
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Get the modal
// var modal = document.getElementById('id02');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }