// * Skills
// import sassLogo from "/src/images/skills/sass-logo.webp";
import typeScriptLogo from "/src/images/skills/frontend/typescript.svg";
// import bootstrapLogo from "/src/images/skills/frontend/bootstrap-logo.svg";
// import wordPressLogo from "/src/images/skills/frontend/wordpress-logo.svg";
import reactLogo from "/src/images/skills/frontend/react-icon.png";
import tailwind from "/src/images/skills/frontend/tailwind-logo.webp";
import nodejs from "/src/images/skills/backend/nodejs.png";
import greensock from "/src/images/skills/other/greensock-logo.png";
import nextjsLogo from "/src/images/skills/frontend/next-js-icon-white.png";

// * Tools
import vite from "/src/images/skills/other/vite-logo.png";

// * Previews
// import ecommercePreview from "/src/images/projects/ecommerce-website-preview.png";
// import feMediaPreview from "/src/images/projects/femediapreview.png";
import ekaBienesRaicesPreview from "/src/images/projects/ekabienesraicespreview.png";

// * Technologies
const REACT = <span className="react-color fw-bold">React</span>;
// const WORDPRESS = <span className="wordpress-color fw-bold">WordPress</span>;
const TYPESCRIPT = <span className="typescript-color fw-bold">TypeScript</span>;
// const JAVASCRIPT = <span className="javascript-color fw-bold">JavaScript</span>;
const NODEJS = <span className="nodejs-color fw-bold">Node.js</span>;

// * Stack
let nextImg = {
  alt: "Next.js",
  img: nextjsLogo,
};
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
  alt: "Node.js",
  img: nodejs,
};
let greensockImg = {
  alt: "Greensock",
  img: greensock,
};
// let wordpressImg = {
//   alt: "WordPress",
//   img: wordPressLogo,
// };
// let bootstrapImg = {
//   alt: "Bootstrap",
//   img: bootstrapLogo,
// };
// let sassImg = {
//   alt: "Sass",
//   img: sassLogo,
// };

export default [
  {
    title: "Eka Bienes Raíces",
    imgUrl: ekaBienesRaicesPreview,
    description: (
      <div>
        The project's objective was to create a user-friendly webpage for a
        Realtor's properties, accommodating her limited technical expertise. It
        utilized {NODEJS}, {TYPESCRIPT}, and {REACT} for long-term
        maintainability. The solution harnessed <b>Next.js</b> for server-side
        rendering and SEO, {NODEJS} for logic, and Facebook's Graph API to efficiently
        display the Realtor's Facebook posts on the webpage. This amalgamation
        of technologies ensures a responsive platform for potential clients to
        explore the property listings.
      </div>
    ),
    stack: [
      nextImg,
      reactImg,
      tailwindImg,
      viteImg,
      typescriptImg,
      nodejsImg,
      greensockImg,
    ],
    link: "https://ekabienesraices.vercel.app/",
    codeLink: "https://github.com/fred-gutierrez/eka-facebook-api-next",
  },
  // {
  //   title: "Fé Media",
  //   imgUrl: feMediaPreview,
  //   description: (
  //     <div>
  //       Undertaken for an advertising company, this project allowed me to refine
  //       my {WORDPRESS} skills. I crafted a first-rate website using {WORDPRESS}
  //       's base editor, avoiding templates, and integrated key plugins,
  //       Greenshift and Gutenberg, to enhance functionality and user experience.
  //       This experience significantly bolstered my expertise in {WORDPRESS}{" "}
  //       website development.
  //     </div>
  //   ),
  //   stack: [wordpressImg],
  //   link: "https://femedia.xyz/",
  //   codeLink: false,
  // },
];
