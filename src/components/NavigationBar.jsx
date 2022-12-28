import React from "react";

var blinkSpeed = 900; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
  var ele = document.getElementById("terminal-icon");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blinkSpeed);

window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll("nav ul li a");
  var sections = document.querySelectorAll("section");

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (
      window.scrollY >= section.offsetTop &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      elements[i].classList.add("active");
    } else {
      elements[i].classList.remove("active");
    }
  }
});

export function NavigationBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark px-4">
      <span className="navbar-brand">
        <i id="terminal-icon" className="fa-solid fa-terminal text-white"></i>
      </span>
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
            <a className="nav-link active" aria-current="page" href="#home">
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
  );
}
