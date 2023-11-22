// * Skills
import typeScriptLogo from "/src/images/skills/frontend/typescript.svg";
import reactLogo from "/src/images/skills/frontend/react-icon.png";
import tailwind from "/src/images/skills/frontend/tailwind-logo.webp";
import nodejs from "/src/images/skills/backend/nodejs.png";
import greensock from "/src/images/skills/other/greensock-logo.png";
import nextjsLogo from "/src/images/skills/frontend/next-js-icon-white.png";

// * Tools
import vite from "/src/images/skills/other/vite-logo.png";

// * Previews
import ekaBienesRaicesPreview from "/src/images/projects/ekabienesraicespreview.png";
import snapNotePreview from "/src/images/projects/darkandlightmode-chrome.png";

// * Technologies
const REACT = <span className="react-color fw-bold">React</span>;
const TYPESCRIPT = <span className="typescript-color fw-bold">TypeScript</span>;
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
        rendering and SEO, {NODEJS} for logic, and Facebook's Graph API to
        efficiently display the Realtor's Facebook posts on the webpage. This
        amalgamation of technologies ensures a responsive platform for potential
        clients to explore the property listings.
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
  {
    title: "SnapNote",
    imgUrl: snapNotePreview,
    description: (
      <div>
        SnapNote is an open-source browser extension designed for lightning-fast
        note-taking during web browsing. Fueled by CRXJS, {REACT}, {TYPESCRIPT},
        Tailwind CSS, and Vite, it offers a modern interface with a primary
        focus on <b>speed</b>. Leveraging BlockNote, a block-based rich text editor,
        SnapNote includes features for downloading notes in Markdown and HTML
        formats, along with a convenient text-copying option.
      </div>
    ),
    stack: [reactImg, typescriptImg, tailwindImg, viteImg],
    link: "https://snapnote-demo.vercel.app/",
    codeLink: "https://github.com/fred-gutierrez/SnapNote",
    chromeDownload:
      "https://chromewebstore.google.com/detail/snapnote/gblgefagjalfolidiedaepbkacajaeng",
    fireFoxDownload: "https://addons.mozilla.org/en-US/firefox/addon/snapnote/",
  },
];
