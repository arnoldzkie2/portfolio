import { React, useState, useEffect } from "react";
import ProjectData from "./ProjectData";
import Modal from "./Modal";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  const [currentImage, setCurrentImage] = useState(
    Array(ProjectData.length).fill(0)
  );

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalDAta] = useState();
  const handleModal = (data) => {
    setModalDAta(data);
    setModalStatus(true);
  };

  const demoProject = (project) => {
    window.open(project, "_blank");
  };

  const projectElements = ProjectData.map((project, index) => {
    const currentImageIndex = currentImage[index];
    return (
      <div className="project" key={project.id} id="project" data-aos="fade-up">
        <div className="image">
          <img
            src={project.images[currentImageIndex]}
            alt="Home"
            onClick={() => handleModal(project)}
          />
        </div>
        <div className="description">
          <h1>
            <span>{project.id}</span>
            {project.title}
          </h1>
          <p>{project.description}</p>
          <h5>{project.used}</h5>
          <a href={project.appLink} target="_blank">
            <i className="fa-solid fa-link"></i> {project.appLink}
          </a>
          <div className="project-buttons">
            <button onClick={() => demoProject(project.appLink)}>
              Demo <i className="fa-solid fa-play fa-beat"></i>
            </button>
            <button onClick={() => demoProject(project.sourceLink)}>
              Source <i className="fa-solid fa-code"></i>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="project-container"
      id="projects"
      onScroll={() => console.log("scrolled")}
    >
      {modalStatus && <Modal setModal={setModalStatus} modalData={modalData} />}

      <h1>
      <Link to="projects" smooth={true} duration={500}>
        <i className="fa-solid fa-arrow-down fa-bounce"></i>
      </Link> PROJECTS 
      <Link to="projects" smooth={true} duration={500} >
        <i className="fa-solid fa-arrow-down fa-bounce"></i>
      </Link>
      </h1>

      <div className="project-div">{projectElements}</div>
    </div>
  );
};

export default Project;
