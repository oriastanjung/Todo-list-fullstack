import React, { useState, useEffect } from "react";
import Title from "../Title";
import Button from "../Button";

function Header(props) {
  const [checkToken, setCheckToken] = useState(false);

  const removeToken = () => {
    localStorage.removeItem('token');
    setCheckToken(false);
  }

  useEffect(() => {
    let isTokenThere = localStorage.getItem("token") ? true : false;
    if (isTokenThere) {
      setCheckToken(true);
    } else {
      setCheckToken(false);
    }
  });
  return (
    <nav className={props.className}>
      <Title />
      {checkToken === false ? (
        <Button onClick={props.onClickButton} isLarge>
          Login
        </Button>
      ) : (
        <Button onClick={removeToken} isLarge>
          Sign Out
        </Button>
      )}
    </nav>
  );
}

export default Header;
