import React from "react";
import { Link } from "react-router-dom";

function Title(props) {
  return (
    <h1 className={'title'}>
      {" "}
      <Link to={"/"}>Just Do It!</Link>
    </h1>
  );
}

export default Title;
