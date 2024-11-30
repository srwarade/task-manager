import { useEffect, useState } from "react";
import TasksContext from "../context/TasksContext";

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [deletedTasks, setDeletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("deletedTasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  return (
    <TasksContext.Provider
      value={{
        taskList: tasks,
        setTaskList: setTasks,
        deletedTasksList: deletedTasks,
        setDeletedTasksList: setDeletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
