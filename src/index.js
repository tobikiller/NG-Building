const toggleBtn =  document.getElementById("toggle-btn")
const navLink = document.getElementById("nav-link")

//Toggle menu

toggleBtn.addEventListener("click", function() {
    navLink.classList.toggle("open")

})