import React, { useContext, useState } from "react";
import Card from "../common/Card";
import DeleteTaskModal from "../DeleteTaskModal";
import CreateTaskModal from "../CreateTaskModal";
import TasksContext from "../../common/context/TasksContext";

import "./task-card.scss";

const TaskCard = ({ taskDetails, dragCard, dragOverCard }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const date = new Date(taskDetails.dueDate);
  const formattedDate = `${date.toDateString()}`;

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

  const handleDragStart = () => {
    dragCard.current = taskDetails.id;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dragOverCard.current = taskDetails.id;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedTaskId = dragCard.current;
    const overTaskId = dragOverCard.current;

    const draggedTask = taskList.find((task) => task.id === draggedTaskId);
    const overTask = taskList.find((task) => task.id === overTaskId);

    const updatedTaskList = taskList.filter(
      (task) => task.id !== draggedTaskId
    );

    const overTaskIndex = taskList.indexOf(overTask);
    updatedTaskList.splice(overTaskIndex, 0, draggedTask);

    setTaskList(updatedTaskList);
  };

  return (
    <>
      <a
        href={`/tasks/${taskDetails.id}`}
        className="task-anchor"
        id={taskDetails.id}
      >
        <Card
          key={taskDetails.id}
          className="task-card"
          draggable
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="task-title">
            {taskDetails.title}
            <span className={`task-status ${taskDetails.status}`}>
              {taskDetails.status}
            </span>
          </div>
          <div className="task-status-date">
            <span className={`task-priority ${taskDetails.priority}`}>
              <img
                src={`/images/priority/${taskDetails.priority}.png`}
                alt="priority"
                className="priority-icon"
              />
              {taskDetails.priority}
            </span>
            <div className="task-due-date">{formattedDate}</div>
          </div>
          <div className="task-description" title={taskDetails.description}>
            {taskDetails.description}
          </div>

          <div className="cta-container">
            <button
              className="edit-task-button"
              onClick={(e) => {
                e.preventDefault();
                setShowEditModal(true);
                setIsEditing(true);
              }}
            >
              <img src="/images/edit.svg" alt="edit" className="edit-icon" />
              Edit
            </button>
            <button
              className="delete-task-button"
              onClick={(e) => {
                e.preventDefault();
                setShowDeleteModal(true);
              }}
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
      </a>
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
