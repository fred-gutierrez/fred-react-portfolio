import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div class="container vh-75 contact-section">
      <div class="flex-row col-12 px-5 text-white">
        <h2 class="col-12 fw-bold">Contact</h2>
        <p class="col-12">
          You can contact me if you want us to work together!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
