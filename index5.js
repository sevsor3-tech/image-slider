var lessThan = document.querySelector(".fa-less-than");
lessThan.style.visibility = "visible";
var images = document.querySelector(".slide");
var greaterThan = document.querySelector(".fa-greater-than");
var container = document.querySelector("div");
var distance = 0;
greaterThan.addEventListener("click", function() {
    images.style.transform = `translateX(${distance}px)`;
    images.style.transition = "transform 0.5s ease-in";
    distance = distance - 60;
});
lessThan.addEventListener("click", function() {
    images.style.transform = `translateX(${distance}px)`;
    images.style.transition = "transform 0.5s ease-in";
     if (distance > 0) distance = 0;
     distance = distance + 60;
});