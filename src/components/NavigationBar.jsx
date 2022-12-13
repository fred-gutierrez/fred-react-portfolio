import React from "react";

var blinkSpeed = 900; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
  var ele = document.getElementById("terminal-icon");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blinkSpeed);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classNameList.remove("active");
    if (a.classNameList.contains(current)) {
      a.classNameList.add("active");
    }
  });
});

export function NavigationBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark px-4">
        <a className="navbar-brand">
          <i id="terminal-icon" className="fa-solid fa-terminal text-white"></i>
        </a>
        <button
          className="navbar-toggler border-0 fs-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered text-white border-0"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
