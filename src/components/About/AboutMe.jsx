import FredPhoto from "/src/images/fred-image2.webp";

export function AboutMe() {
  return (
    <div class="col-12 col-md-6 col-lg-6 text-center">
      <h2 className="fw-bold mb-4">About me</h2>
      <div className="p-4 rounded-5" id="paragraph2">
        <img
          class="wobble-hor-bottom my-4 rounded-circle"
          width="200px"
          height="200px"
          id="fred-photo"
          src={FredPhoto}
          alt="Fred's Photo"
        />
        <p>
          Welcome to my portfolio website! I'm Fred David, a Front-end Engineer
          specialized on{" "}
          <span className="javascript-color text-black-outline fw-bold">
            JavaScript
          </span>
          . I excel at crafting clean, efficient, and visually appealing web
          designs that enhance user experience.
          <br />
          <br />
          With a keen eye for detail and up-to-date with the latest web
          development trends, I'm constantly learning to become a Full-stack
          Developer.
          <br />
          <br />
          Browse my latest projects and let's discuss collaboration to bring
          your vision to life. Whether it's enhancing user experience or
          creating a new design from scratch, I'm here to help. Let's work
          together and create something amazing!
        </p>
      </div>
    </div>
  );
}
