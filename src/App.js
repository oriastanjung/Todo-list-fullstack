import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [clickButton, setClickButton] = useState(false);

  const onClickedButtonHandler = () => {
    setClickButton(true);
  };

  const onCloseModalHandler = () => {
    setClickButton(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              inLoginModal
              onCloseModal={onCloseModalHandler}
              showModal={clickButton}
              onClickButton={onClickedButtonHandler}
              className="container"
            >
              <Card />
              <Card />
              <Card />
              <Card />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout
              inSignUpModal
              onCloseModal={onCloseModalHandler}
              showModal={clickButton}
              onClickButton={onClickedButtonHandler}
              className="container"
            >
              <Card />
              <Card />
              <Card />
              <Card />
            </Layout>
          }
        />
        <Route
          path="/new-todo"
          element={
            <Layout
              inNewTodoModal
              onCloseModal={onCloseModalHandler}
              showModal={clickButton}
              onClickButton={onClickedButtonHandler}
              className="container"
            ></Layout>
          }
        />
        <Route
          path="/:id"
          element={
            <Layout
              inEditTodoModal
              idTodo={''}
              onCloseModal={onCloseModalHandler}
              showModal={clickButton}
              onClickButton={onClickedButtonHandler}
              className="container"
            ></Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
