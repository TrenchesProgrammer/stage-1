const time = new Date().getTime();
const timeElement = document.getElementById("time");
if (timeElement) {
  timeElement.innerHTML = time;
}

const home = document.querySelector(".home");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");

let pathname = window.location.pathname;

if (pathname.includes("index.html") || pathname === "/" || pathname.endsWith("/")) {
  home?.classList.add("active-link");
} else if (pathname.includes("about")) {
  about?.classList.add("active-link");
} 