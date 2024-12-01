import React from "react";

import { SIDEBAR_OPTIONS } from "../../../common/constants";

import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      {SIDEBAR_OPTIONS.map((option) => (
        <button
          className={`nav-button ${
            window.location.pathname == option.url ? "selected" : ""
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
    </>
  );
};

export default Navbar;
