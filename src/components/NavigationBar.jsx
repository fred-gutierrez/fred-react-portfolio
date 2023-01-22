import React from "react";
import { useBlink } from "../hooks/useBlink";

export function NavigationBar() {
  function terminalBlink() {
    const isVisible = useBlink(900);

    return (
      <i
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        id="terminal-icon"
        className="fa-solid fa-terminal text-white"
      ></i>
    );
  }

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
  function toggleBackground() {
    const navbarContainer = document.getElementsByClassName("navbar");
    for (var i = 0; i < navbarContainer.length; i++) {
      navbarContainer[i].classList.toggle("navbar-background");
    }
  }
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark px-4">
      <span className="navbar-brand">{terminalBlink()}</span>
      <button
        onClick={toggleBackground}
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
