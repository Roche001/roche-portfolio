import React from "react";
import "./Contacts.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { MdMail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
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
    <section id="Contacts" className="container">
      <div className="row">
        <h2>Get In Touch</h2>
      </div>

      {/* <div className="container-a row"> */}
      <div className="row">
        <div className="col">
          <div className="contact-options">
            <div className="col-sm-2">
              <div class="contact-option">
                <MdMail />
                <h4>Email</h4>
                <h5>rocheharold13@gmail.com</h5>
                <a href="mailto:rocheharold13@gmail.com" target="blank">
                  Send a Message
                </a>
              </div>
            </div>
            <div className="col-sm-2 ">
              <div className="contact-option">
                <BsMessenger />
                <h4>Messenger</h4>
                <h5>Roche Harold</h5>
                <a
                  href="https:m.me/profile.php?id=100006045915802"
                  target="blank"
                >
                  {" "}
                  Send a Message
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="contact-option">
                <BsWhatsapp />
                <h4>WhatsApp</h4>
                <a
                  href="https://api.whatsapp.com/send?phone+254711229823"
                  target="blank"
                >
                  Send a Message
                </a>
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone+254718485502"
                  target="blank"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <form ref={form} onSubmit={sendEmail}>
            <div className="col-sm-2">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="col-sm-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-sm-2">
              <textarea
                name="message"
                rows="8"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit" class="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contacts;
