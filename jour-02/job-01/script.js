let html = document.querySelector("html");

function myChangeBackGroundColor() {
  if (window.innerWidth >= 1337) {
    html.style.backgroundColor = "#ffb703";
  } else if (window.innerWidth <= 1336 && window.innerWidth >= 505) {
    html.style.backgroundColor = "#d90429";
  } else if (window.innerWidth <= 504) {
    html.style.backgroundColor = "#003049";
  }
}

myChangeBackGroundColor();

window.addEventListener("resize", myChangeBackGroundColor);
