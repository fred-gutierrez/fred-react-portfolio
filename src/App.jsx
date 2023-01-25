import React from "react";
import { AboutMe } from "./components/About/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Contact/Footer";
import { Home } from "./components/Home/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Offerings } from "./components/About/Offerings";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/About/Skills";
import "./styles/postcss/main.css";
import { ArrowBelow } from "./components/Home/ArrowBelow";

export function App() {
  return (
    <div className="bg-black">
      <NavigationBar />
      <section>
        <div className="vh-100" id="home">
          <Home />
          <ArrowBelow />
        </div>
      </section>
      <section>
        <div className="spacer white-black-wave"></div>
        <div id="about">
          <Offerings />
          <div className="container pb-5">
            <div className="row pb-5">
              <AboutMe />
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="spacer orange-red-wave"></div>
        <div id="projects">
          <Projects />
        </div>
      </section>
      <section>
        <div className="spacer orange-red-down-wave"></div>
        <div className="vh-100" id="contact">
          <Contact />
          <Footer />
        </div>
      </section>
    </div>
  );
}
