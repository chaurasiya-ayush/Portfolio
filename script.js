let box = document.querySelector("#show");

box.addEventListener("click",() =>{
document.getElementById("show").innerText ="DBL click to show less";
document.querySelector("#photo1").style.display = "unset";
document.querySelector("#photo2").style.display = "unset";
document.querySelector("#photo3").style.display = "unset";
// document.querySelector("#show").style.border = "orange";
console.log("clicked");
});
box.addEventListener("dblclick",() =>{
document.getElementById("show").innerText ="Show more";
document.querySelector("#photo1").style.display = "none";
document.querySelector("#photo2").style.display = "none";
document.querySelector("#photo3").style.display ="none";
document.querySelector("#show").style.backgroundColor = "#8a9998";
console.log("clicked");
})

// JavaScript to toggle the navbar on mobile view
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
