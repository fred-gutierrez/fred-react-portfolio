import React from "react";

var blink_speed = 900; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
  var ele = document.getElementById("terminal-icon");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// TODO: THE SHIT BREAKS AS SOON AS IT ENTERS MOBILE MODE!!! FIX THIS!!!

export function NavigationBar() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-sm navbar-dark">
        <a class="navbar-brand">
          <i
            id="terminal-icon"
            class="fa-solid fa-terminal text-white ps-3"
          ></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item home active">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item about">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item projects">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item contact">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
