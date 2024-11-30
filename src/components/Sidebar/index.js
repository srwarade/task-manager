import React from "react";

import { SIDEBAR_OPTIONS } from "../../common/constants";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <section className="sidebar-wrapper">
      {SIDEBAR_OPTIONS.map((option) => (
        <button
          className={`sidebar-button ${
            window.location.pathname == option.url && "selected"
          }`}
          type="button"
          key={option.url}
          onClick={() => {
            window.location.href = option.url;
          }}
        >
          <span>{option.label}</span>
        </button>
      ))}
    </section>
  );
};

export default Sidebar;
