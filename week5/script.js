function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



function updateDateTime() {
    var currentDateTime = new Date();
    var formattedDateTime = currentDateTime.toLocaleString();
    document.getElementById('datetime').innerHTML = 'Current Date and Time: ' + formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);

alert('Welcome to My Webpage!');