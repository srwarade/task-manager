import React, { useContext } from "react";
import TasksContext from "../../common/context/TasksContext";
import DeletedTask from "./DeletedTask";

const Trash = () => {
  const { deletedTasksList } = useContext(TasksContext);
  return (
    <section className="deleted-task-wrapper">
      <div className="deleted-task-heading">Deleted Tasks</div>
      {deletedTasksList.map((task) => (
        <DeletedTask key={task.id} taskDetails={task} />
      ))}
    </section>
  );
};

export default Trash;
