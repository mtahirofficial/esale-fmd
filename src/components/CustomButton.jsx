import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

function CustomButton(props) {
  return (
    <Button
      style={props.btnStyle}
      className="m-1"
      outline
      color={props.color}
      onClick={() => props.handleClick()}
    >
      <FontAwesomeIcon icon={props.icon} /> {props.text}
    </Button>
  );
}

export default CustomButton;
