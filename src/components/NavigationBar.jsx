import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useBlink } from "../hooks/useBlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavigationBar(props) {
  function terminalBlink() {
    const isVisible = useBlink(900);

    return (
      <FontAwesomeIcon
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        id="terminal-icon"
        icon={["fas", "terminal"]}
        className={`${props.isWhiteBackground ? "black-active" : "text-white"}`}
      />
    );
  }

  function toggleBackground() {
    const navbarContainer = document.getElementsByClassName("navbar");
    for (var i = 0; i < navbarContainer.length; i++) {
      navbarContainer[i].classList.toggle("navbar-background");
    }
  }

  //TODO: On > md - the navbar background should have a brighter color

  return (
    <Navbar id="navbar" className={`fixed-top navbar-dark px-4`} expand="md">
      <Navbar.Brand>{terminalBlink()}</Navbar.Brand>
      <Navbar.Toggle
        onClick={toggleBackground}
        className="border-0 fs-2 bg-transparent"
        type="button"
        data-bs-target="#navbarToggler"
        aria-controls="navbarScroll"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon
          icon={["fas", "bars-staggered"]}
          className={`${
            props.isWhiteBackground ? "black-active" : "text-white"
          } border-0`}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto" navbarScroll>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link
            href="#about"
            className={`${props.isWhiteBackground && "black-active"}`}
          >
            About
          </Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

//TODO: Fix navbar scroll not working on Safari/Mobile
