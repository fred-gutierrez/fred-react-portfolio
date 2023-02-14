// Skills

import sassLogo from "/src/images/skills/sass-logo.webp";
import typeScriptLogo from "/src/images/skills/typescript.svg";
import bootstrapLogo from "/src/images/skills/bootstrap-logo.svg";
import wordPressLogo from "/src/images/skills/wordpress-logo.svg";
import reactLogo from "/src/images/skills/react-icon.png";

// Tools

import heroIcons from "/src/images/tools/heroicons.png";
import fontAwesome from "/src/images/tools/fontawesome.png";
import vite from "/src/images/tools/vite.png";

// Previews

import ecommercePreview from "/src/images/projects/ecommerce-website-preview.png";
import feMediaPreview from "/src/images/projects/femediapreview.png";
import tenziesGamePreview from "/src/images/projects/tenziesgamepreview.png";
import notesAppPreview from "/src/images/projects/notesapppreview.png";

// Technologies

const React = <span className="react-color fw-bold">React</span>;
const WordPress = <span className="wordpress-color fw-bold">WordPress</span>;
const TypeScript = <span className="typescript-color fw-bold">TypeScript</span>;
const JavaScript = <span className="javascript-color fw-bold">JavaScript</span>;

export default [
  {
    title: "Fé Media Website",
    imgUrl: feMediaPreview,
    description: (
      <div>
        This project is based on my advertising startup, with it, I was able to
        improve my {WordPress} skills, I created this website with the base
        editor from {WordPress} and without a layout template. The main plugins
        I used were Greenshift and Gutenberg.
      </div>
    ),
    stack: [wordPressLogo],
    link: "https://femedia.xyz/",
    codeLink: false,
  },
  {
    title: "React Shopping Cart",
    imgUrl: ecommercePreview,
    description: (
      <div>
        This is a working project that I will keep updating from time to time to
        make it a fully working e-commerce page based on {React}. This project
        helped me fully understand {React} props, components, and how to use{" "}
        {TypeScript} rather than regular {JavaScript}.
      </div>
    ),
    stack: [reactLogo, bootstrapLogo, typeScriptLogo, vite],
    link: "https://fred-ecommerce-website.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/ecommerce-website",
  },
  {
    title: "Tenzies Game",
    imgUrl: tenziesGamePreview,
    description: (
      <div>
        This is the final Capstone Project for{" "}
        <a
          href="https://scrimba.com/learn/learnreact"
          className="link-secondary"
          target="_blank"
        >
          Learn React for free
        </a>{" "}
        that teached me a lot about {React}, everything from props, state,
        making API calls, useEffects, {React} forms, conditional rendering, and
        more!
      </div>
    ),
    stack: [reactLogo, sassLogo, fontAwesome, vite],
    link: "https://fredtenziesgame.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/tenzies-game",
  },
  {
    title: "Notes/CRUD App",
    imgUrl: notesAppPreview,
    description: (
      <div>
        This is a project I decided to do in order to practice {React} hooks,
        useEffect, useState and more in order to create fully functioning CRUD
        type apps like this notes app, and I've included a hue and light/dark
        switcher.
      </div>
    ),
    stack: [reactLogo, heroIcons, vite],
    link: "https://fred-notes-app.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/CRUD-Project",
  },
];

// TODO: Add an alt to each skill/tool img
