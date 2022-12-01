import React from "react";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Offerings } from "./components/Offerings";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./styles/index.min.css";
import "./styles/mediaquerys.min.css";
import "./styles/animations.min.css";

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

export function App() {
  return (
    <div className="bg-black">
      <header className="vh-100" id="home">
        <NavigationBar />
        <Home />
      </header>
      <section id="about">
        <Offerings />
        <div className="container">
          <div className="row">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section className="vh-100" id="contact">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
