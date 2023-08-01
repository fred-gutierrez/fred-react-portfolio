// * Skills
// import sassLogo from "/src/images/skills/sass-logo.webp";
import typeScriptLogo from "/src/images/skills/typescript.svg";
import bootstrapLogo from "/src/images/skills/bootstrap-logo.svg";
import wordPressLogo from "/src/images/skills/wordpress-logo.svg";
import reactLogo from "/src/images/skills/react-icon.png";
import tailwind from "/src/images/skills/tailwind-logo.webp";
import nodejs from "/src/images/skills/nodejs.png";

// * Tools
// import heroIcons from "/src/images/tools/heroicons.png";
import fontAwesome from "/src/images/tools/fontawesome.png";
import vite from "/src/images/tools/vite.png";

// * Previews
import ecommercePreview from "/src/images/projects/ecommerce-website-preview.png";
import feMediaPreview from "/src/images/projects/femediapreview.png";
import ekaBienesRaicesPreview from "/src/images/projects/ekabienesraicespreview.png";

// * Technologies
const REACT = <span className="react-color fw-bold">React</span>;
const WORDPRESS = <span className="wordpress-color fw-bold">WordPress</span>;
const TYPESCRIPT = <span className="typescript-color fw-bold">TypeScript</span>;
const JAVASCRIPT = <span className="javascript-color fw-bold">JavaScript</span>;
const NODEJS = <span className="nodejs-color fw-bold">NodeJS</span>;

// * Stack
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
let wordpressImg = {
  alt: "WordPress",
  img: wordPressLogo,
};
let bootstrapImg = {
  alt: "Bootstrap",
  img: bootstrapLogo,
};
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
        This project aimed to display a Realtor's properties on a webpage. To
        overcome her lack of technical expertise, a solution was developed to
        fetch, filter, and exhibit her Facebook posts directly on the webpage,
        using {NODEJS} and Facebook's Graph API. {TYPESCRIPT} and {REACT} were
        chosen for long-term maintainability.
      </div>
    ),
    stack: [reactImg, tailwindImg, viteImg, typescriptImg, nodejsImg],
    link: "https://ekabienesraices.netlify.app/",
    codeLink: "https://github.com/fred-gutierrez/Eka-Facebook-API",
  },
  {
    title: "Fé Media",
    imgUrl: feMediaPreview,
    description: (
      <div>
        Undertaken for an advertising company, this project allowed me to refine
        my {WORDPRESS} skills. I crafted a first-rate website using {WORDPRESS}
        's base editor, avoiding templates, and integrated key plugins,
        Greenshift and Gutenberg, to enhance functionality and user experience.
        This experience significantly bolstered my expertise in {WORDPRESS}{" "}
        website development.
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
];
