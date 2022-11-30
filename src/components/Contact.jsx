import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div class="container vh-50 gs_reveal">
      <div class="flex-row col-12 px-5 text-white pt-5 mt-5">
        <h2 class="col-12 fw-bold">Contact</h2>
        <p class="col-12">
          You can contact me if you want us to work together!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
