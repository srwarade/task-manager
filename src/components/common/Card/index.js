import React from "react";

import "./card.scss";

const Card = ({ children, className }) => {
  return (
    <article className={`card ${className}`} draggable>
      {children}
    </article>
  );
};

export default Card;
