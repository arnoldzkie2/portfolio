import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({senderData}) => {

  useEffect(() => {
    AOS.init({duration: 700})
  }, [])
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied ${text}`);
  };

  const contactNumber = "+639481636290";
  const email = "arnoldzkie22@gmail.com";
  const address = "Misamis Oriental, Cagayan De Oro City, Iponan";
  const [allSender, setAllSender] = useState([])
  const [sender, setSender] = useState({
    name: "",
    email: "",
    msg: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setSender(oldValue => ({
      ...oldValue,
      [name]: value
    }))
  }

  const handleMessage =(e) => {
    e.preventDefault()
    const {name, email, msg} = sender
    if(!name || !email || !msg) return alert('Please Fill all inputs')
    
    const senderMEssage = {
      name: name,
      email: email,
      msg: msg
    }
    senderData.push(senderMEssage)
    alert(`Thankyou ${sender.name} for leaving a message.`)
    console.log(senderData)
    setSender({
    name: "",
    email: "",
    msg: ""
    })
  }

  return (
    <div className="contact-container">
      <div className="contact-bg">
        <img src="/image/contact-bg.png" alt="" />
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
          <i className="fa-regular fa-envelope" onClick={() => copy(email)}></i>
          <h3>Email Address</h3>
          <p>{email}</p>
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
        <form onSubmit={handleMessage}>
        <div className="field">
            <input type="text"name='name' placeholder="Name" value={sender.name} onChange={handleChange}/>
          <input type="text" placeholder="Email" name='email' value={sender.email} onChange={handleChange}/>
        </div>
        <div className="msg-area">
          <textarea placeholder="Message..." className="msg" name='msg' value={sender.msg}  onChange={handleChange}/>
          <button>Send</button>
        </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
