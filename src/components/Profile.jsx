import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
const Profile = () => {

  useEffect(() => {
    AOS.init({duration: 700})
  },[])

  const email = "arnoldzkie22@gmail.com"
  const contactNumber = "+639481636290"
  const copy = (value) => {
    navigator.clipboard.writeText(value)
    alert(`You copied ${value}`)
  }
  return (
  <div className="profile-container" id="profile">
     <h1>
      <Link to="profile" smooth={true} duration={500}>
        <i className="fa-solid fa-arrow-down fa-bounce"></i>
      </Link> PROJECTS 
      <Link to="profile" smooth={true} duration={500} >
        <i className="fa-solid fa-arrow-down fa-bounce"></i>
      </Link>
      </h1>
    <div className="profile-wrapper">
        
        <div className="profile-card" data-aos="fade-right">
            <h4>Skills</h4>
            <div className="row">
                <li><i className="fa-brands fa-html5"></i></li>
                <li><i className="fa-brands fa-css3-alt"></i></li>
            </div>
            <div className="row">
                <li><i className="fa-brands fa-js"></i></li>
                <li><i className="fa-brands fa-react"></i></li>
            </div>
        </div>
        <div className="profile" data-aos="fade-up">
            <img src="/image/profile.jpg" alt="Home"/>
            <h3>Arnold Nillas</h3>
            <h4>Front-End Developer</h4>
        </div>
       <div className="profile-card"data-aos="fade-left" >
           <h4>Social Media</h4>
           <nav className='social-media'>
            <div className="row">
                   <li><a href="https://www.facebook.com/arnoldzkie2" target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
                   <li><a href="https://github.com/arnoldzkie2" target="_blank"><i className="fa-brands fa-github"></i></a></li>
            </div>
            <div className="row">
                   <li><a href="https://www.instagram.com/nnoolldd/" target="_blank"><i className="fa-brands fa-instagram instagram"></i></a></li>
                   <li><a href="https://www.linkedin.com/in/arnold-nillas-924132268/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
            </div>
           </nav>
       </div>
    </div>
  </div>
  )
}

export default Profile;
