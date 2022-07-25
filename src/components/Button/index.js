import React from "react";
import style from "./index.module.css";

function Button(props) {
  
  return (
    <button
      className={`${style.btn} ${props.isLarge && style["btn-lg"]} ${
        props.isMed && style["btn-md"]
      }`}
      {...props}
    >
      {" "}
      {props.children}
    </button>
  );
}

export default Button;
