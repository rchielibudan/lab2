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
	
	<?php
    $txt1 = "Guess my Age";
		$txt2 = "my birth year is 2003";
		$x = 2024;
		$y = 2003;

		echo "<p>" . $txt1 . "</p>";
		echo "Study PHP at " . $txt2 . "<br>";
		echo $x - $y;
		
	function myMessage() {
  echo "Hello";
}

myMessage();

		$brands = array("Hermes", "Coach", "CharlesandKeith");
echo count($brands);
?>

	
		
	

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