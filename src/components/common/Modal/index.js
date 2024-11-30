import React from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

const Modal = ({ children }) => {
  return (
    <>{createPortal(<ModalContent children={children} />, document.body)}</>
  );
};

export default Modal;
