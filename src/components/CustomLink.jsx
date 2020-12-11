import React from "react";
import { Link } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <Link style={props.linkStyle} to={props.to}>
      {props.text}
    </Link>
  );
};

export default CustomLink;
