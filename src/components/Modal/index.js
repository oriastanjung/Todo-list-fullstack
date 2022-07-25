import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "../Backdrop";
import ModalOverlay from "../ModalOverlay";

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
