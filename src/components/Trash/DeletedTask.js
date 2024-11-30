import React, { useContext, useState } from "react";
import Card from "../common/Card";
import DeleteTaskModal from "../DeleteTaskModal";
import TasksContext from "../../common/context/TasksContext";

import "./trash.scss";

const DeletedTask = ({ taskDetails }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { deletedTasksList, setDeletedTasksList } = useContext(TasksContext);

  const handlePermanentDelete = () => {
    const updatedTaskList = deletedTasksList.filter(
      (task) => task.id !== taskDetails.id
    );
    setDeletedTasksList(updatedTaskList);
  };

  return (
    <>
      <Card className="deleted-task">
        <div className="task-details">
          <span className={`task-color ${taskDetails.status}`}></span>
          <div className="task-title">{taskDetails.title}</div>
          <div className="task-description">{taskDetails.description}</div>
        </div>
        <div className="cta-container">
          <button
            className="confirm-button"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
        </div>
      </Card>
      <DeleteTaskModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        handleDelete={handlePermanentDelete}
      />
    </>
  );
};

export default DeletedTask;