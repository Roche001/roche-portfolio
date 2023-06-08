import React from "react";
import "./Contacts.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { MdMail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a89q6u8",
        "template_qpgd31a",
        form.current,
        "Yeer2eAqyEmQoqgcd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="Contacts" className="container-fluid">
      <div className=" cont row">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact container">
        <div className="contact-options">
          <div className="contact-option">
            <h3>
              <MdMail />
            </h3>
            <h3>Mail</h3>
            <h6>rocheharold13@gmail.com</h6>
            <a href="mailto:rocheharold13@gmail.com" target="blank">
              Send a Message
            </a>
          </div>

          <div className="contact-option ">
            <h3>
              <AiFillPhone />
            </h3>
            <h6> +254723703121</h6>
          </div>

          <div className="contact-option">
            <h3>
              <BsWhatsapp />
            </h3>
            <h3>WhatsApp</h3>

            <a
              href="https://wa.me/254723703121?text=Hello%2C%20thanks%20for%20contacting%20Roche%20Harold"
              target="blank"
            >
              Send a Message
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder=" Full Name" required />

          <input type="email" name="email" placeholder=" E-Mail" required />

          <textarea
            name="message"
            rows="8"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" class="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
