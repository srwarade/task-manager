import React, { useState } from "react";
import SearchContainer from "../common/SearchContainer";

import CreateTaskModal from "../CreateTaskModal";

import "./task-header.scss";

const TaskHeader = ({ setFilterOption, setSearchTerm }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="task-header-wrapper">
      <div className="header">
        <span className="task-heading">Tasks</span>
        <select
          onChange={(e) => {
            setFilterOption && setFilterOption(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
        </select>
        <SearchContainer setSearchTerm={setSearchTerm} />
      </div>
      <button className="create-task-button" onClick={() => setShowModal(true)}>
        + Create Task
      </button>
      <CreateTaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        key="createTask"
      />
    </div>
  );
};

export default TaskHeader;
