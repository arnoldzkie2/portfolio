import Header from "../components/Header";
import Main from "../components/Main";
import Project from "../components/Project";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [senderData, setSender] = useState([]);
  return (
    <>
      <Header />
      <Main />
      <Project />
      <Profile />
      <Contact senderData={senderData} />
      <Footer />
    </>
  );
};

export default Home;
