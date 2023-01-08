import React from "react";
import { AboutMe } from "./components/About/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Contact/Footer";
import { Home } from "./components/Home/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Offerings } from "./components/About/Offerings";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/About/Skills";
import "./css/postcss/main.css";

export function App() {
  return (
    <div className="bg-black">
      <NavigationBar />
      <section className="vh-100 text-focus-in2" id="home">
        <Home />
      </section>
      <div className="spacer white-black-wave"></div>
      <section id="about">
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
      <div className="spacer layer2"></div>
      <section className="vh-100" id="contact">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

// TODO: Fix the navbar active scroll not being positioned correctly
