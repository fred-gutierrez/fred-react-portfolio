import React from "react";
import { Button, Nav, NavbarBrand, NavLink } from "react-bootstrap";
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

  function toggleBackground() {
    const navbarContainer = document.getElementsByClassName("navbar");
    for (var i = 0; i < navbarContainer.length; i++) {
      navbarContainer[i].classList.toggle("navbar-background");
    }
  }

  //TODO: When a white background is detected or the "About" section is on screen, change the nav item color to #000

  return (
    <Nav
      id="navbar"
      className="navbar fixed-top navbar-expand-md navbar-dark px-4"
    >
      <NavbarBrand className="navbar-brand">{terminalBlink()}</NavbarBrand>
      <Button
        onClick={toggleBackground}
        className="navbar-toggler border-0 fs-2 bg-transparent"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars-staggered text-white border-0"></i>
      </Button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ms-auto">
          <NavLink aria-current="page" href="#home">
            Home
          </NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>
      </div>
    </Nav>
  );
}

// window.addEventListener("scroll", function () {
//   var elements = document.querySelectorAll("nav ul li a");
//   var sections = document.querySelectorAll("section");

//   for (var i = 0; i < sections.length; i++) {
//     var section = sections[i];
//     if (
//       window.scrollY >= section.offsetTop &&
//       window.scrollY < section.offsetTop + section.offsetHeight
//     ) {
//       elements[i].classList.add("active");
//     } else {
//       elements[i].classList.remove("active");
//     }
//   }
