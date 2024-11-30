import React from "react";
import { Outlet } from "react-router-dom";

import "./main-container.scss";

const MainContainer = () => {
  return (
    <section className="main-container">
      <Outlet />
    </section>
  );
};

export default MainContainer;
