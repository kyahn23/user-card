import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // html 컴포넌트가 아닌경우
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
