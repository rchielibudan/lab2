<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Page</title>
</head>
<body>

    <h1>This is the New Page</h1>

   
    <p id="demo">Loading...</p>

   
    <button id="btn">Click me</button>


    <div id="animate" style="width: 50px; height: 50px; background-color: red; position: relative;"></div>

    <script>
         
        
        let rchie = "";

        rchie = () => {
            document.getElementById("demo").innerHTML += "rchie";
        }

        window.addEventListener("load", rchie);

    
        document.getElementById("btn").addEventListener("click", rchie);

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

        const myCar = new Car("FERRARI", 2022);
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
  
    </script>
</body>
</html>