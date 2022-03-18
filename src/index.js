const toggleBtn =  document.getElementById("toggle-btn")
const navLink = document.getElementById("nav-link")
let first = document.getElementById("toggle-btn").firstElementChild
let last = document.getElementById("toggle-btn").lastElementChild
const middle = document.querySelector(".middle")

console.log(first)

//Toggle menu

toggleBtn.addEventListener("click", function() {
    navLink.classList.toggle("open")
    first.classList.toggle("top")
    last.classList.toggle("down")
    middle.classList.toggle("inmiddle")

})