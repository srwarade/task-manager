import React, { useContext, useState } from "react";
import Card from "../common/Card";
import DeleteTaskModal from "../DeleteTaskModal";
import CreateTaskModal from "../CreateTaskModal";
import TasksContext from "../../common/context/TasksContext";

import "./task-card.scss";

const TaskCard = ({ taskDetails }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const date = new Date(taskDetails.dueDate);
  const formattedDate = `${date.toDateString()} ${
    date.toTimeString().split(" ")[0]
  }`;

  const { taskList, setTaskList, setDeletedTasksList } =
    useContext(TasksContext);

  const handleDeleteTask = () => {
    const updatedTaskList = taskList.filter(
      (task) => task.id !== taskDetails.id
    );
    const deletedTask = taskList.filter((task) => task.id === taskDetails.id);
    setDeletedTasksList((prev) => [...prev, ...deletedTask]);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <Card key={taskDetails.id} className="task-card">
        <div className="task-title">
          {taskDetails.title}
          <span className={`task-priority ${taskDetails.priority}`}>
            {taskDetails.priority}
          </span>
        </div>
        <div className="task-description">{taskDetails.description}</div>
        <div className={`task-status ${taskDetails.status}`}>
          {taskDetails.status}
        </div>
        <div className="task-due-date">{formattedDate}</div>

        <div className="cta-container">
          <button
            className="edit-task-button"
            onClick={() => {
              setShowEditModal(true);
              setIsEditing(true);
            }}
          >
            <img src="/images/edit.svg" alt="edit" className="edit-icon" />
            Edit
          </button>
          <button
            className="delete-task-button"
            onClick={() => setShowDeleteModal(true)}
          >
            <img src="/images/bin.svg" alt="delete" className="delete-icon" />
            Delete
          </button>
        </div>
      </Card>
      <CreateTaskModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        taskDetails={taskDetails}
        key={`editTask${taskDetails.id}`}
      />
      <DeleteTaskModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        handleDelete={handleDeleteTask}
      />
    </>
  );
};

export default TaskCard;
