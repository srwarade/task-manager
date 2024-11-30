import React from "react";

import "./modal.scss";

const ModalContent = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default ModalContent;
