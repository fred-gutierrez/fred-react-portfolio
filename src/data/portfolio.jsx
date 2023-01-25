import { nanoid } from "nanoid";

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

const newJSXelement = (
  <a href="https://scrimba.com/learn/learnreact" target="_blank">
    Learn React for free
  </a>
);

export default [
  {
    title: "Fé Media Website",
    imgUrl: "images/projects/femediapreview.png",
    description: `This project is based on my advertising startup, with it,
      I was able to improve my WordPress skills, I created this website with
      the base editor from WordPress and without a layout template.
      The main plugins I used were Greenshift and Gutenberg.`,
    stack: [wordPressLogo],
    link: "https://femedia.xyz/",
    codeLink: false,
  },
  {
    title: "React Shopping Cart",
    imgUrl: "images/projects/ecommerce-website-preview.png",
    description: `This is a working project that I will keep updating from
    time to time to make it a fully working e-commerce page based on React. 
    This project helped me fully understand React props, components, and how to
    use TypeScript rather than regular JavaScript.`,
    stack: [reactLogo, bootstrapLogo, typeScriptLogo],
    link: "https://fred-ecommerce-website.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/ecommerce-website",
  },
  {
    title: "Tenzies Game",
    imgUrl: "images/projects/tenziesgamepreview.png",
    description: `This is the final Capstone Project for a React course
    that teached me a lot about React, everything from props, state, making API calls, useEffects,
    React forms, and more!`,
    stack: [reactLogo, sassLogo],
    link: "https://fredtenziesgame.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/tenzies-game",
  },
  {
    title: "Old Portfolio Website",
    imgUrl: "images/projects/oldportfoliopreview.png",
    description: `This was my first considerable project that allowed
    me to comprehend and sharpen my skills in CSS3, SASS, HTML5, and Bootstrap 4.
    The design for this page is mostly the same but the reasoning behind doing a new portfolio
    page was due to the chaos I did with the code back then, which lead to performance,
    maintainability, and re-usability issues. Therefore this portfolio is made with React props,
    components, and more.`,
    stack: [sassLogo, bootstrapLogo],
    link: "https://fredwilliams.netlify.app/",
    codeLink:
      "https://github.com/fred-gutierrez/Fred-David-Solis-Gutierrez-Portfolio",
  },
];

// https://scrimba.com/learn/learnreact
// TODO: Add color to the skills like WordPress, React, Bootstrap and add class names to them
// TODO: Search how to add HTML elements like spans and "a's" to a string within an object of an array.
