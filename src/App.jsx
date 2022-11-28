import React from "react";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { ResumeDownloadButton } from "./components/ResumeDownloadButton";
import "./styles/index.min.css";
import "./styles/mediaquerys.min.css";

export function App() {
  return (
    <div className="bg-black">
      <header className="vh-100">
        <NavigationBar />
        <Home />
        <ResumeDownloadButton />
      </header>
    </div>
  );
}
