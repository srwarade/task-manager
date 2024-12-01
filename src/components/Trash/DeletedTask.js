import React, { useContext, useState } from "react";
import Card from "../common/Card";
import DeleteTaskModal from "../DeleteTaskModal";
import TasksContext from "../../common/context/TasksContext";

import "./trash.scss";

const DeletedTask = ({ taskDetails }) => {
  const { setTaskList } = useContext(TasksContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { deletedTasksList, setDeletedTasksList } = useContext(TasksContext);

  const date = new Date(taskDetails.dueDate);
  const formattedDate = `${date.toDateString()}`;

  const handlePermanentDelete = () => {
    const updatedTaskList = deletedTasksList.filter(
      (task) => task.id !== taskDetails.id
    );
    setDeletedTasksList(updatedTaskList);
  };

  const handleRestore = () => {
    const updatedTaskList = deletedTasksList.filter(
      (task) => task.id !== taskDetails.id
    );
    const restoredTask = deletedTasksList.filter(
      (task) => task.id === taskDetails.id
    );
    setTaskList((prev) => [...prev, ...restoredTask]);
    setDeletedTasksList(updatedTaskList);
  };

  return (
    <>
      <Card className="deleted-task">
        <div className="details-conatiner">
          <div className={`task-color ${taskDetails.status}`}></div>
          <div className="task-details">
            <span className="task-title">{taskDetails.title}</span>
            <span className="task-date">{formattedDate}</span>
            <span className={`task-status ${taskDetails.status}`}>
              {taskDetails.status}
            </span>
          </div>
        </div>
        <div className="cta-container">
          <button className="restore-button" onClick={handleRestore}>
            <img
              src="/images/restore.png"
              alt="restore"
              className="restore-icon"
            />
            Restore
          </button>
          <button
            className="delete-button"
            onClick={() => setShowDeleteModal(true)}
          >
            <img
              src="/images/delete.svg"
              alt="delete"
              className="delete-icon"
            />
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
