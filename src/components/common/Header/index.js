import React, { useState } from "react";

import Navbar from "../Navbar";

import "./header.scss";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <a href="/" className="logo">
        <span className="title">Task Manager</span>
      </a>
      <img
        src="/images/menu.svg"
        alt="task"
        className="nav-icon"
        onClick={() => setIsNavOpen((prev) => !prev)}
      />
      {isNavOpen && (
        <div className="nav-bar-wrapper">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
