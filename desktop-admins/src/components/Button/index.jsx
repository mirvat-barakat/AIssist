import React from "react";
import "./styles.css";

function AppButton(props) {
  return (
    <button onClick={props.onClick} className="button">{props.button_name}</button>
  );
}

export default AppButton;