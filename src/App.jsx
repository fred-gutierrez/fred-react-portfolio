import React, { useRef, useState } from "react";
import { AboutMe } from "./components/About/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Contact/Footer";
import { Home } from "./components/Home/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Offerings } from "./components/About/Offerings";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/About/Skills";
import { ArrowBelow } from "./components/Home/ArrowBelow";

export function App() {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const aboutRef = useRef(null);

  function checkBackground() {
    const aboutRefCurrent = aboutRef.current;
    if (!aboutRefCurrent) return false;

    const aboutSection = aboutRefCurrent.getBoundingClientRect();
    const isAboutOnScreen = aboutSection.top <= 0 && aboutSection.bottom > 0;
    return isAboutOnScreen;
  }

  window.addEventListener("scroll", function () {
    setIsWhiteBackground(checkBackground());
  });

  return (
    <div
      className="bg-black"
      data-bs-spy="scroll"
      data-bs-target="#navbar"
      data-bs-offset="0"
    >
      <NavigationBar isWhiteBackground={isWhiteBackground} />
      <section className="vh-100" id="home">
        <Home />
        <ArrowBelow />
      </section>
      <div className="spacer white-black-wave"></div>
      <section id="about" ref={aboutRef}>
        <Offerings />
        <div className="container pb-5">
          <div className="row pb-5">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </section>
      <div className="spacer orange-red-wave"></div>
      <section id="projects">
        <Projects />
      </section>
      <div className="spacer orange-red-down-wave"></div>
      <section className="vh-100" id="contact">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
