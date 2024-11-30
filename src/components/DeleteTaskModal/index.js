import React, { useContext } from "react";
import Modal from "../common/Modal";

import TasksContext from "../../common/context/TasksContext";

import "./delete-task.scss";

const DeleteTaskModal = ({ showModal, setShowModal, handleDelete }) => {
  return (
    <>
      {showModal && (
        <Modal>
          <div className="delete-confirmation-modal">
            <span>Are you sure you want to delete this task?</span>
            <div className="delete-confirmation-actions">
              <button
                className="cancel-button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="confirm-button"
                onClick={() => {
                  handleDelete();
                  setShowModal(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteTaskModal;
