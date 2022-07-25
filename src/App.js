import React, {useState} from "react";

import "./App.css";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Card from "./components/Card";
function App() {
  const [clickButton, setClickButton] = useState(false);
  const onClickedButtonHandler = () => {
    setClickButton(true);
  }
  const onCloseModalHandler = () => {
    setClickButton(false)
  }
  return (
   <Layout onCloseModal={onCloseModalHandler} showModal={clickButton} onClickButton={onClickedButtonHandler} className="container">
      <span className="btn-main"><Button isMed>+ New Todo</Button></span>
  
      <Card />
      <Card />
      <Card />
      <Card />
   </Layout>
  );
}

export default App;
