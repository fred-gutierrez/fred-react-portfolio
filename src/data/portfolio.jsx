// ------------------ <IMAGES> ------------------ //

import sassLogo from "/images/skills/sass-logo.webp";
import typeScriptLogo from "/images/skills/typescript.svg";
import bootstrapLogo from "/images/skills/bootstrap-logo.svg";
import wordPressLogo from "/images/skills/wordpress-logo.svg";
import reactLogo from "/images/skills/react-icon.png";
import tailwindLogo from "/images/skills/tailwind-logo.webp";
import greenSockLogo from "/images/skills/gsap-greensock.svg";
import gatsbyLogo from "/images/skills/gatsby-js-icon.svg";
import postCSSLogo from "/images/skills/postcss-logo.png";

// ------------------ </IMAGES> ------------------ //

const React = <span className="react-color fw-bold">React</span>;
const WordPress = <span className="wordpress-color fw-bold">WordPress</span>;
const TypeScript = <span className="typescript-color fw-bold">TypeScript</span>;
const JavaScript = <span className="javascript-color fw-bold">JavaScript</span>;
const Sass = <span className="sass-color fw-bold">Sass</span>;
const CSS = <span className="css-color fw-bold">CSS</span>;
const HTML = <span className="html-color fw-bold">HTML5</span>;
const Bootstrap = <span className="bootstrap-color fw-bold">Bootstrap 4</span>;

export default [
  {
    title: "Fé Media Website",
    imgUrl: "images/projects/femediapreview.png",
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
    imgUrl: "images/projects/ecommerce-website-preview.png",
    description: (
      <div>
        This is a working project that I will keep updating from time to time to
        make it a fully working e-commerce page based on {React}. This project
        helped me fully understand {React} props, components, and how to use{" "}
        {TypeScript} rather than regular {JavaScript}.
      </div>
    ),
    stack: [reactLogo, bootstrapLogo, typeScriptLogo],
    link: "https://fred-ecommerce-website.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/ecommerce-website",
  },
  {
    title: "Tenzies Game",
    imgUrl: "images/projects/tenziesgamepreview.png",
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
        making API calls, useEffects, {React} forms, and more!
      </div>
    ),
    stack: [reactLogo, sassLogo],
    link: "https://fredtenziesgame.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/tenzies-game",
  },
  {
    title: "Old Portfolio Website",
    imgUrl: "images/projects/oldportfoliopreview.png",
    description: (
      <div>
        This was my first considerable project that allowed me to comprehend and
        sharpen my skills in {CSS}, {Sass}, {HTML}, and {Bootstrap}. The design
        for this page is mostly the same but the reasoning behind doing a new
        portfolio page was due to the chaos I did with the code back then, which
        lead to performance, maintainability, and re-usability issues. Therefore
        this portfolio is made with {React} props, components, and more.
      </div>
    ),
    stack: [sassLogo, bootstrapLogo],
    link: "https://fredwilliams.netlify.app/",
    codeLink:
      "https://github.com/fred-gutierrez/Fred-David-Solis-Gutierrez-Portfolio",
  },
];
