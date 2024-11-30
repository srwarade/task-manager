import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sidebar from "../Sidebar";
import Header from "../common/Header";
import MainContainer from "../MainContainer";
import TaskView from "../TaskView";
import Dashboard from "../Dashboard";
import Trash from "../Trash";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tasks",
        element: <TaskView />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
    ],
  },
]);

const TaskManager = () => {
  return (
    <section>
      <Header />
      <Sidebar />
      <RouterProvider router={appRouter} />
    </section>
  );
};

export default TaskManager;
