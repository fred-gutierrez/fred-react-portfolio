export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/b97417cbbf645cc7a42a069a69b7dd50"
      method="POST"
      id="contact-form"
      className="lh-lg"
    >
      <input
        placeholder="Name"
        type="text"
        name="name"
        required=""
        class="col-12 ps-3"
      />
      <input
        placeholder="Enter email"
        type="email"
        name="email"
        required=""
        class="col-12 ps-3"
        id="email"
      />
      <textarea
        placeholder="Your Message"
        name="message"
        class="col-12 ps-3"
      ></textarea>
      <input id="submit" class="button" type="submit" value="SUBMIT" />
    </form>
  );
}
