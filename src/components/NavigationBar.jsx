import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
    <Navbar id="navbar" className="fixed-top navbar-dark px-4" expand="md">
      <Navbar.Brand>{terminalBlink()}</Navbar.Brand>
      <Navbar.Toggle
        onClick={toggleBackground}
        className="border-0 fs-2 bg-transparent"
        type="button"
        data-bs-target="#navbarToggler"
        aria-controls="navbarScroll"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars-staggered text-white border-0"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto" navbarScroll>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

//TODO: Fix navbar scroll not working on Safari/Mobile

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
