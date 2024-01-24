

function updateDateTime() {
    var currentDateTime = new Date();
    var formattedDateTime = currentDateTime.toLocaleString();
    document.getElementById('datetime').innerHTML = 'Current Date and Time: ' + formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);

alert('Welcome to My Webpage!');

function showIntroduction() {
    var introductionContainer = document.getElementById('introduction-container');
    var introductionText = "Welcome to My Awesome Webpage!";

    var introductionParagraph = document.createElement('p');
    introductionParagraph.textContent = introductionText;


    introductionContainer.appendChild(introductionParagraph);
}

showIntroduction();

function addString() {
    var outputContainer = document.getElementById('output-container');
    var myString = "This is a dynamic string added using JavaScript.";

    
    outputContainer.textContent = myString;
}


addString();

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeText() {
    var textContainer = document.getElementById('textContainer');
    var newText = "Text changed!";
    textContainer.textContent = newText;
}
document.getElementById('changeTextButton').addEventListener('click', changeText);

let rchie = "";

rchie = () => {
  document.getElementById("demo").innerHTML += "rchie";
}

// The window object calls the function:
window.addEventListener("load", rchie);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", rchie);