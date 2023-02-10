// ------------------ <IMAGES> ------------------ //

import sassLogo from "/src/images/skills/sass-logo.webp";
import typeScriptLogo from "/src/images/skills/typescript.svg";
import bootstrapLogo from "/src/images/skills/bootstrap-logo.svg";
import wordPressLogo from "/src/images/skills/wordpress-logo.svg";
import reactLogo from "/src/images/skills/react-icon.png";
import tailwindLogo from "/src/images/skills/tailwind-logo.webp";
import greenSockLogo from "/src/images/skills/gsap-greensock.svg";
import gatsbyLogo from "/src/images/skills/gatsby-js-icon.svg";
import postCSSLogo from "/src/images/skills/postcss-logo.png";

// ------------------ </IMAGES> ------------------ //

// ------------------ <PREVIEWS> ------------------ //

import ecommercePreview from "/src/images/projects/ecommerce-website-preview.png";
import feMediaPreview from "/src/images/projects/femediapreview.png";
import tenziesGamePreview from "/src/images/projects/tenziesgamepreview.png";

// ------------------ </PREVIEWS> ------------------ //

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
    stack: [reactLogo, bootstrapLogo, typeScriptLogo],
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
    stack: [reactLogo, sassLogo],
    link: "https://fredtenziesgame.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/tenzies-game",
  },
];

//TODO: Add tool icons (FontAwesome, Heroicons, Vite, etc)
