import GoogleLighthouseLogo from "/src/images/skills/tools/google-lighthouse.svg";

export default [
  {
    icon: "eye",
    title: "Intuitive",
    description: `High inclination for the ease of use, intuitive UX/UI.`,
  },
  {
    icon: "gauge-high",
    title: "Fast",
    description: (
      <span>
        Quick load times accompanied with smooth interactivity. I use{" "}
        {
          <img
            width={20}
            src={GoogleLighthouseLogo}
            alt="Google Lighthouse Logo"
          />
        }{" "}
        Google Lighthouse to ensure this.
      </span>
    ),
  },
  {
    icon: "rocket",
    title: "Dynamic",
    description: `Websites don't have to be static, I love making pages come to life.`,
  },
  {
    icon: "laptop-code",
    title: "Responsive",
    description: `Mobile-first approach, my designs will work on any device/screen.`,
  },
];
