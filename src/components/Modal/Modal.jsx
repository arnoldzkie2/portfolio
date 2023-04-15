import React from "react";
import './modal.scss'
const Modal = ({modalData, setModal}) => {

  const demo = (url) => {
    console.log(url)
    window.open(url, '_blank')
  }
  return (
    <div className="modal" onClick={() => setModal(false)}>
      <div className="modal-container">
      <img src={modalData.modalImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
