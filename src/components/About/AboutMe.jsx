import FredPhoto from "/src/images/fred-image2.webp";

export function AboutMe() {
  return (
    <div class="col-12 col-md-6 col-lg-6 text-center">
      <h2 className="fw-bold text-center mb-4">About me</h2>
      <div className="text-center p-4 rounded-5" id="paragraph2">
        <img
          class="wobble-hor-bottom my-4 rounded-circle"
          width="200px"
          height="200px"
          id="fred-photo"
          src={FredPhoto}
          alt="Fred's Photo"
        />
        <p>
          Welcome to my portfolio website! I'm Fred David, a Front-end Developer
          with a focus on <span className="react-color">React</span>. My
          expertise lies in creating clean, efficient, and visually appealing
          web designs that enhance user experience.
          <br />
          <br />
          With a keen eye for detail and a deep understanding of the latest
          trends in web development, I'm constantly learning and expanding my
          skill set to become a Full-stack Developer in the long run.
          <br />
          <br />
          Take a moment to browse through my latest projects, and let's discuss
          how we can collaborate to bring your vision to life. Whether you're
          looking to improve your website's user experience, or want to create a
          brand new design from scratch, I'm here to help. Let's work together
          and create something amazing!
        </p>
      </div>
    </div>
  );
}
