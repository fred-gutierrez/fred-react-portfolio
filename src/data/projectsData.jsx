// Skills

import sassLogo from "/src/images/skills/sass-logo.webp";
import typeScriptLogo from "/src/images/skills/typescript.svg";
import bootstrapLogo from "/src/images/skills/bootstrap-logo.svg";
import wordPressLogo from "/src/images/skills/wordpress-logo.svg";
import reactLogo from "/src/images/skills/react-icon.png";
import tailwind from "/src/images/skills/tailwind-logo.webp";
import nodejs from "/src/images/skills/nodejs.png";

// Tools

import heroIcons from "/src/images/tools/heroicons.png";
import fontAwesome from "/src/images/tools/fontawesome.png";
import vite from "/src/images/tools/vite.png";

// Previews

import ecommercePreview from "/src/images/projects/ecommerce-website-preview.png";
import feMediaPreview from "/src/images/projects/femediapreview.png";
import tenziesGamePreview from "/src/images/projects/tenziesgamepreview.png";
import notesAppPreview from "/src/images/projects/notesapppreview.png";
import ekaBienesRaicesPreview from "/src/images/projects/ekabienesraicespreview.png";

// Technologies

const REACT = <span className="react-color fw-bold">React</span>;
const WORDPRESS = <span className="wordpress-color fw-bold">WordPress</span>;
const TYPESCRIPT = <span className="typescript-color fw-bold">TypeScript</span>;
const JAVASCRIPT = <span className="javascript-color fw-bold">JavaScript</span>;
const NODEJS = <span className="nodejs-color fw-bold">NodeJS</span>;

let reactImg = {
  alt: "React",
  img: reactLogo,
};
let tailwindImg = {
  alt: "TailwindCSS",
  img: tailwind,
};
let viteImg = {
  alt: "Vite",
  img: vite,
};
let typescriptImg = {
  alt: "TypeScript",
  img: typeScriptLogo,
};
let nodejsImg = {
  alt: "NodeJS",
  img: nodejs,
};
let fontAwesomeImg = {
  alt: "FontAwesome",
  img: fontAwesome,
};
let wordpressImg = {
  alt: "WordPress",
  img: wordPressLogo,
};
let bootstrapImg = {
  alt: "Bootstrap",
  img: bootstrapLogo,
};
let sassImg = {
  alt: "Sass",
  img: sassLogo,
};
let heroIconsImg = {
  alt: "HeroIcons",
  img: heroIcons,
};

export default [
  {
    title: "Eka Bienes Raíces",
    imgUrl: ekaBienesRaicesPreview,
    description: (
      <div>
        This project aimed to display a Realtor's properties on a webpage. To
        overcome her lack of technical expertise, a solution was developed to
        fetch, filter, and exhibit her Facebook posts directly on the webpage,
        using {NODEJS} and Facebook's Graph API. {TYPESCRIPT} and {REACT} were
        chosen for long-term maintainability.
      </div>
    ),
    stack: [
      reactImg,
      tailwindImg,
      viteImg,
      typescriptImg,
      nodejsImg,
      fontAwesomeImg,
    ],
    link: "https://ekabienesraices.netlify.app/",
    codeLink: false,
  },
  {
    title: "Fé Media",
    imgUrl: feMediaPreview,
    description: (
      <div>
        This project is based on my advertising startup, with it, I was able to
        improve my {WORDPRESS} skills, I created this website with the base
        editor from {WORDPRESS} and without a layout template. The main plugins
        I used were Greenshift and Gutenberg.
      </div>
    ),
    stack: [wordpressImg],
    link: "https://femedia.xyz/",
    codeLink: false,
  },
  {
    title: "React Shopping Cart",
    imgUrl: ecommercePreview,
    description: (
      <div>
        This is a working project that I will keep updating from time to time to
        make it a fully working e-commerce page based on {REACT}. This project
        helped me fully understand {REACT} props, components, and how to use{" "}
        {TYPESCRIPT} rather than regular {JAVASCRIPT}.
      </div>
    ),
    stack: [reactImg, bootstrapImg, typescriptImg, viteImg],
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
        that teached me a lot about {REACT}, everything from props, state,
        making API calls, useEffects, {REACT} forms, conditional rendering, and
        more!
      </div>
    ),
    stack: [reactImg, sassImg, fontAwesomeImg, viteImg],
    link: "https://fredtenziesgame.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/tenzies-game",
  },
  {
    title: "Notes/CRUD App",
    imgUrl: notesAppPreview,
    description: (
      <div>
        This is a project I decided to do in order to practice {REACT} hooks,
        useEffect, useState and more in order to create fully functioning CRUD
        type apps like this notes app, and I've included a hue and light/dark
        switcher.
      </div>
    ),
    stack: [reactImg, heroIconsImg, viteImg],
    link: "https://fred-notes-app.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/CRUD-Project",
  },
];

// TODO: Add an alt to each skill/tool img
