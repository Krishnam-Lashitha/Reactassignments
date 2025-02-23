const data = {
    likes: 0
};

document.getElementById("totalLikes").innerText = data.likes;


document.getElementById("likebutton").addEventListener("click", function () {
     data.likes++; 
     document.getElementById("totalLikes").innerText = data.likes; 
 });