import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "../common/Header";
import Sidebar from "../Sidebar";
import MainContainer from "../MainContainer";
import Dashboard from "../Dashboard";
import TaskList from "../TaskListing";
import TaskView from "../TaskView";
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
        element: <TaskList />,
      },
      {
        path: "/tasks/:id",
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
