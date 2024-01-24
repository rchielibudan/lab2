

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

    let rchie = "";

    rchie = () => {
        document.getElementById("demo").innerHTML += "rchie";
    }

   
    window.addEventListener("load", rchie);

    // A button object calls the function:
    document.getElementById("newbtn").addEventListener("click", rchie);

    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age(x) {
            return x - this.year;
        }
    }

    const date = new Date();
    let currentYear = date.getFullYear();

    const myCar = new Car("Pink Lamborghini Aventador", 2022);
    document.getElementById("demo").innerHTML =
        "My name is Rchie, and my " + myCar.name + " is " + myCar.age(currentYear) + " years old.";

    setTimeout(function () { myFunction("you didn't see that!!!!!"); }, 3000);

    function myFunction(value) {
        document.getElementById("demo").innerHTML = value;
    }

    function moveSquare() {
        let id = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    function myFunction() {
        let text;
        let person = prompt("Please enter your name:", "Rchie");
        if (person == null || person == "") {
            text = "User cancelled the prompt.";
        } else {
            text = "Hello " + person + "! Reach me out for more details!";
        }
        document.getElementById("demo").innerHTML = text;
    }
;
