console.log("js funcionando");

bars = document.querySelector(".bars");

bars.onclick = function () {
    navbar = document.querySelector(".navBar");
    navbar.classList.toggle("active");

}