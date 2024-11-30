import React, { useContext } from "react";
import TasksContext from "../../common/context/TasksContext";
import Card from "../common/Card";

import "./dashboard.scss";

const Dashboard = () => {
  const { taskList } = useContext(TasksContext);
  const pendingTasks = taskList.filter((task) => task.status === "pending");
  const completedTasks = taskList.filter((task) => task.status === "completed");
  const inProgressTasks = taskList.filter(
    (task) => task.status === "in-progress"
  );

  return (
    <div className="dashboard">
      <Card className="dashboard-task-card">
        <div className="task-status-heading">Total Tasks</div>
        <div className="count-and-sign">
          <span className="task-count">{taskList.length}</span>
          <span className="task-color"></span>
        </div>
      </Card>
      <Card className="dashboard-task-card">
        <div className="task-status-heading">Pending Tasks</div>
        <div className="count-and-sign">
          <span className="task-count">{pendingTasks.length}</span>
          <span className="task-color pending"></span>
        </div>
      </Card>
      <Card className="dashboard-task-card">
        <div className="task-status-heading">Completed Tasks</div>
        <div className="count-and-sign">
          <span className="task-count">{completedTasks.length}</span>
          <span className="task-color completed"></span>
        </div>
      </Card>
      <Card className="dashboard-task-card">
        <div className="task-status-heading">Tasks In Progress</div>
        <div className="count-and-sign">
          <span className="task-count">{inProgressTasks.length}</span>
          <span className="task-color in-progress"></span>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
