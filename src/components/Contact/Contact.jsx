import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";
import "./contact.scss";
const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied ${text}`);
  };
  const contactNumber = "+639481636290";
  const emailAddress = "arnoldzkie22@gmail.com";
  const address = "Misamis Oriental, Cagayan De Oro City, Iponan";

  const [sender, setSender] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSender((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    const { name, email, message } = sender;
    if (!name || !email || !message) return alert("Please Fill all inputs");
    try {
      await emailjs.sendForm(
        "service_sjpkc98",
        "template_b21qj3h",
        form.current,
        "vENwA7F2JdRLPDsq5"
      );
      alert(`Thankyou ${name} for leaving a message.`);
      setSender({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1>Hey there!</h1>
        <h2>Thanks for visiting my portfolio website.</h2>
        <p>
          If you're interested in working together or have any questions, feel
          free to leave me a message using the form below. I'd love to hear from
          you!
        </p>
      </div>
      <div className="contact-wrap">
        <div className="contact" data-aos="flip-right">
          <h1>Contact Details</h1>
          <div className="contact-wrapper">
            <i
              className="fa-solid fa-phone"
              onClick={() => copy(contactNumber)}
            ></i>
            <h3>Phone</h3>
            <p>{contactNumber}</p>
          </div>
          <div className="contact-wrapper">
            <i
              className="fa-regular fa-envelope"
              onClick={() => copy(emailAddress)}
            ></i>
            <h3>Email Address</h3>
            <p>{emailAddress}</p>
          </div>
          <div className="contact-wrapper">
            <i
              className="fa-solid fa-location-dot"
              onClick={() => copy(address)}
            ></i>
            <h3>Address</h3>
            <p>{address}</p>
          </div>
        </div>
        <div className="message" data-aos="flip-left">
          <h1>Leave a Message</h1>
          <form onSubmit={handleMessage} ref={form}>
            <div className="field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={sender.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={sender.email}
                onChange={handleChange}
              />
            </div>
            <div className="msg-area">
              <textarea
                placeholder="Message..."
                className="msg"
                name="message"
                value={sender.message}
                onChange={handleChange}
              />
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
