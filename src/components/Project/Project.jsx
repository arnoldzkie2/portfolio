import React, { useState, useEffect } from "react";
import ProjectData from "./ProjectData";
import Modal from "../Modal/Modal";
import AOS from "aos";
import "aos/dist/aos.css";
import "./project.scss";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState();

  const handleModal = (data) => {
    console.log(data);
    setModalData(data);
    setModalStatus(true);
  };
  const demoProject = (project) => {
    window.open(project, "_blank");
  };
  const projectElements = ProjectData.map((item) => {
    return (
      <div className="project" key={item.id} id="project" data-aos="fade-up">
        <img
          src={item.images}
          alt={item.title}
          onClick={() => handleModal(item)}
        />
        <div className="description">
          <h1>
            <span>{item.id}</span>
            {item.title}
          </h1>
          <p>{item.description}</p>
          <h5>{item.used}</h5>
          <a href={item.appLink} target="_blank">
            <i className="fa-solid fa-link"></i> {item.appLink}
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
    <div className="project-container" id="projects">
      {modalStatus && <Modal setModal={setModalStatus} modalData={modalData} />}
      <div className="project-header">
        <h1>CREATIONS</h1>
        <img src="/image/images.png" alt="" />
      </div>
      <div className="project-div">{projectElements}</div>
    </div>
  );
};

export default Project;

// import { React, useState, useEffect } from "react";
// import ProjectData from "./ProjectData";
// import Modal from "../Modal/Modal";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./project.scss";
// const Project = () => {
//   useEffect(() => {
//     AOS.init({ duration: 400 });
//   }, []);

//   const [modalStatus, setModalStatus] = useState(false);
//   const [modalData, setModalDAta] = useState();
//   const handleModal = (data) => {
//     setModalDAta(data);
//     setModalStatus(true);
//   };

//   const demoProject = (project) => {
//     window.open(project, "_blank");
//   };
//   const projectElements = ProjectData.map((project) => {
//     return (
//       <div className="project" key={project.id} id="project" data-aos="fade-up">
//         <img
//           src={project.images}
//           alt="Home"
//           onClick={() => handleModal(project)}
//         />
//         <div className="description">
//           <h1>
//             <span>{project.id}</span>
//             {project.title}
//           </h1>
//           <p>{project.description}</p>
//           <h5>{project.used}</h5>
//           <a href={project.appLink} target="_blank">
//             <i className="fa-solid fa-link"></i> {project.appLink}
//           </a>
//           <div className="project-buttons">
//             <button onClick={() => demoProject(project.appLink)}>
//               Demo <i className="fa-solid fa-play fa-beat"></i>
//             </button>
//             <button onClick={() => demoProject(project.sourceLink)}>
//               Source <i className="fa-solid fa-code"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div
//       className="project-container"
//       id="projects"
//       onScroll={() => console.log("scrolled")}
//     >
//       {modalStatus && <Modal setModal={setModalStatus} modalData={modalData} />}
//       <div className="project-header">
//       <h1>CREATIONS</h1>
//       <img src="/image/images.png" alt="" />
//       </div>
//       <div className="project-div">{projectElements}</div>
//     </div>
//   );
// };

// export default Project;
