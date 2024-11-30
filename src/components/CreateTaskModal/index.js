import React, { useContext, useEffect, useRef } from "react";
import Modal from "../common/Modal";
import TasksContext from "../../common/context/TasksContext";
import {
  checkIfDetailsExists,
  generateRandomId,
} from "../../common/utils/common";

import "./create-task.scss";

const CreateTaskModal = ({
  showModal,
  setShowModal,
  isEditing = false,
  taskDetails,
  setIsEditing,
}) => {
  const { taskList, setTaskList } = useContext(TasksContext);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  const handleCreateTask = () => {
    if (
      !checkIfDetailsExists(titleRef.current.value, dueDateRef.current.value)
    ) {
      return;
    }
    const newTask = {
      id: generateRandomId(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      status: statusRef.current.value,
      dueDate: dueDateRef.current.value,
      priority: priorityRef.current.value,
    };
    setTaskList([...taskList, newTask]);
    setShowModal(false);
  };

  useEffect(() => {
    if (dueDateRef.current) {
      const now = new Date();
      const formattedNow = now.toISOString().slice(0, 16);
      dueDateRef.current.min = formattedNow;
    }
  });

  useEffect(() => {
    if (isEditing) {
      titleRef.current.value = taskDetails.title;
      descriptionRef.current.value = taskDetails.description;
      statusRef.current.value = taskDetails.status;
      dueDateRef.current.value = taskDetails.dueDate;
      priorityRef.current.value = taskDetails.priority;
    }
  }, [isEditing, taskDetails]);

  const handleTaskEditing = () => {
    if (
      !checkIfDetailsExists(titleRef.current.value, dueDateRef.current.value)
    ) {
      return;
    }
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskDetails.id) {
        return {
          ...task,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          status: statusRef.current.value,
          dueDate: dueDateRef.current.value,
          priority: priorityRef.current.value,
        };
      }
      return task;
    });
    setTaskList(updatedTaskList);
    setShowModal(false);
    setIsEditing && setIsEditing(false);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <div className="create-task-container">
            <div className="create-heading">
              {isEditing ? "Update task" : "Add Task"}
            </div>
            <div className="input-groups">
              <div className="input-wrapper">
                <label htmlFor="task-title"> Title</label>
                <input type="text" id="task-title" ref={titleRef} required />
              </div>
              <div className="input-wrapper">
                <label htmlFor="task-description">Description</label>
                <input type="text" id="task-description" ref={descriptionRef} />
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="task-due-date">Due date</label>
              <input
                type="datetime-local"
                id="task-due-date"
                ref={dueDateRef}
                required
              />
            </div>
            <div className="input-groups">
              <div className="input-wrapper">
                <label htmlFor="task-status">Status</label>
                <select ref={statusRef} id="task-status">
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label htmlFor="task-priority">Priority</label>
                <select ref={priorityRef} id="task-priority">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="highest">Highest</option>
                </select>
              </div>
            </div>
            <div className="cta-container">
              <button
                className="cancel-button"
                onClick={() => {
                  setShowModal(false);
                  setIsEditing && setIsEditing(false);
                }}
              >
                Cancel
              </button>
              <button
                className="create-task-button"
                onClick={isEditing ? handleTaskEditing : handleCreateTask}
              >
                {isEditing ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CreateTaskModal;
