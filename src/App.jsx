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

export function App() {
  return (
    <div className="bg-black">
      <header className="vh-100" id="home">
        <NavigationBar />
        <Home />
      </header>
      <section id="about">
        <Offerings />
        <div className="container pb-5">
          <div className="row pb-5">
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
