import React, { useEffect, useState } from "react";

import "./search-container.scss";

const SearchContainer = ({ setSearchTerm }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   if (searchTerm) {
  //     searchList && searchList(searchTerm);
  //   }
  // }, [searchTerm]);

  return (
    <div className="search-container">
      <input
        className="search-box"
        placeholder="Search task"
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchContainer;
