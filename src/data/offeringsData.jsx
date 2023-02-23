import GoogleLighthouseLogo from "/src/images/tools/google-lighthouse.svg";

export default [
  {
    icon: <i className="fa-solid fa-eye fa-2x mt-3 blink-1"></i>,
    title: "Intuitive",
    description: `High inclination for the ease of use, intuitive UX/UI.`,
  },
  {
    icon: (
      <i className="fa-solid fa-gauge-high fa-2x mt-3 shake-horizontal"></i>
    ),
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
    icon: <i className="fa-solid fa-rocket fa-2x mt-3 vibrate-1"></i>,
    title: "Dynamic",
    description: `Websites don't have to be static, I love making pages come to life.`,
  },
  {
    icon: <i className="fa-solid fa-laptop-code fa-2x mt-3 heartbeat"></i>,
    title: "Responsive",
    description: `Mobile-first approach, my designs will work on any device/screen.`,
  },
];
