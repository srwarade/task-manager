import React, { useContext, useRef, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskCard from "../TaskCard";
import TasksContext from "../../common/context/TasksContext";

import "./task-view.scss";

const TaskView = () => {
  const { taskList } = useContext(TasksContext);
  const [filterOption, setFilterOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const dragCard = useRef(0);
  const dragOverCard = useRef(0);

  const filteredList = filterOption
    ? taskList.filter((task) => task.status === filterOption)
    : taskList;

  const filteredListBySearch = filteredList.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedList = filteredListBySearch.sort((a, b) => {
    if (sortBy === "ascending") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if (sortBy === "descending") {
      return new Date(b.dueDate) - new Date(a.dueDate);
    }
    return 0;
  });

  return (
    <>
      <TaskHeader
        setFilterOption={setFilterOption}
        setSearchTerm={setSearchTerm}
        setSortBy={setSortBy}
      />
      <section className="task-list-container">
        {sortedList.length > 0 ? (
          sortedList?.map((task) => (
            <TaskCard
              taskDetails={task}
              key={task.id}
              dragCard={dragCard}
              dragOverCard={dragOverCard}
            />
          ))
        ) : (
          <div className="no-tasks">No task found</div>
        )}
      </section>
    </>
  );
};

export default TaskView;
