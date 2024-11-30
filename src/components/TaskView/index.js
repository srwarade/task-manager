import React, { useContext, useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskCard from "../TaskCard";
import TasksContext from "../../common/context/TasksContext";

const TaskView = () => {
  const { taskList } = useContext(TasksContext);
  const [filterOption, setFilterOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = filterOption
    ? taskList.filter((task) => task.status === filterOption)
    : taskList;

  const filteredListBySearch = filteredList.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TaskHeader
        setFilterOption={setFilterOption}
        setSearchTerm={setSearchTerm}
      />
      <section className="task-list-container">
        {filteredListBySearch?.map((task) => (
          <TaskCard taskDetails={task} key={task.id} />
        ))}
      </section>
    </>
  );
};

export default TaskView;
