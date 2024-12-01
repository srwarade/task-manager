import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import TasksContext from "../../common/context/TasksContext";

import "./task-view.scss";

const TaskView = () => {
  const { id } = useParams();
  const { taskList } = useContext(TasksContext);

  const taskData = taskList.find((task) => task.id === id);

  const date = new Date(taskData.dueDate);
  const formattedDate = `${date.toDateString()}`;

  return (
    <section className="task-view-wrapper">
      <span className="label">Title : </span>
      <div className="title">{taskData.title}</div>
      <span className="label">Description :</span>
      <div className="description">{taskData.description}</div>
      <span className="label">Priority: </span>
      <span className={`priority ${taskData.priority}`}>
        <img
          src={`/images/priority/${taskData.priority}.png`}
          alt={taskData.priority}
          className="priority-icon"
        />
        {taskData.priority}
      </span>
      <span className="label">Status:</span>
      <div className={`status ${taskData.status}`}>{taskData.status}</div>
      <span className="label">Due Date:</span>
      <div className="due-date">{formattedDate}</div>
    </section>
  );
};

export default TaskView;
