

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

var newpagebutton = document.getElementById("newpagebutton");

newpagebutton.addEventListener("click", function () {
    window.location.href = "new.html";
});

