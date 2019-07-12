// For getting all the posts page
function fullPost(){
  window.location.href="./post.html";
}

// On clicking Delete button 
function onDeletePost(){
  document.getElementById('deletePostPrompt').style.display='block';
}

// on clicking delete No 
function onCloseDeleteClicked() {
  document.getElementById('deletePostPrompt').style.display='none';
}
// on clicking dots on the bottom of page
var myPost;

myPost = [
          {
            author: "Ifrah", 
            title: "Hello there this is Post 1", 
            blogContent: "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music. [1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz."
          },
          {
            author: "Ifrah1", 
            title: "Hello1 there this is Post 1", 
            blogContent: "1Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music. [1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz." 	
            }
];

for (i=0; i<myPost.length; i++) {
	document.createElement('p');
}
