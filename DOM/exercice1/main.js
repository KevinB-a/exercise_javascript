//Insert the main title
var mainTitle = document.getElementById("mainTitle"); 
mainTitle.textContent = "le titre";
mainTitle.style.color = "green" // change the text color

//Insert the subtitle
var subTitle = document.getElementById("subTitle");
subTitle.textContent = "le sous-titre";

//Get all the contents elements and set a bleu background! 
var contents = document.getElementsByClassName("content");
//contents.style.backgroundColor = "blue"; // change the background color
var firstcontent = contents[0];
firstcontent.style.backgroundColor = "blue";
var secondcontent = contents[1];
secondcontent.style.backgroundColor = "blue";
var thirdcontent = contents[2];
thirdcontent.style.backgroundColor = "blue";
//Function to delete article on click
function deleteContent()
{
    document.querySelector("h3").remove();
    // document.getElementById("test").remove();
}