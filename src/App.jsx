import React from "react";
import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Offerings } from "./components/Offerings";
import { ResumeDownloadButton } from "./components/ResumeDownloadButton";
import { Skills } from "./components/Skills";
import "./styles/index.min.css";
import "./styles/mediaquerys.min.css";

export function App() {
  return (
    <div className="bg-black">
      <header className="vh-100" id="home">
        <NavigationBar />
        <Home />
        <ResumeDownloadButton />
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
    </div>
  );
}
