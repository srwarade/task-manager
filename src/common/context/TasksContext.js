import React from "react";

const TasksContext = React.createContext({
  taskList: [],
  setTaskList: () => {},
  deletedTasksList: [],
  setDeletedTasksList: () => {},
});

export default TasksContext;
