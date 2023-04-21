import React from "react";
import "./styles.css";

function AppButton(props) {
  return (
    <button onClick={props.onClick} className={props.is_active}>{props.button_name}</button>
  );
}

export default AppButton;