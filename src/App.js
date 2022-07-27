import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { config } from "./configs";
import Layout from "./components/Layout";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [clickButton, setClickButton] = useState(false);
  const [todos, setTodos] = useState([]);
  let token = localStorage.getItem("token");
  const onClickedButtonHandler = () => {
    setClickButton(true);
  };

  const onCloseModalHandler = () => {
    setClickButton(false);
  };

  useEffect(() => {
    const fetchDataTodos = async () => {
      try {
        const result = await axios.get(`${config.api_url}/api/todos`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTodos(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataTodos();
  }, []);

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
              {!token && <p className='not-login'>Login First :{')'}</p>}
              {todos.map((item, idx) => {
                return (
                  <Card
                    key={idx}
                    id={item["_id"]}
                    title={item.title}
                    description={item.description}
                    dueTime={item.dueTime}
                  />
                );
              })}
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
              {!token && <p className='not-login'>Login First :{')'}</p>}
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
            >
              {!token && <p className='not-login'>Login First :{')'}</p>}
              {todos.map((item, idx) => {
                return (
                  <Card
                    key={idx}
                    id={item["_id"]}
                    title={item.title}
                    description={item.description}
                    dueTime={item.dueTime}
                  />
                );
              })}
            </Layout>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Layout
              inEditTodoModal
              idTodo={""}
              onCloseModal={onCloseModalHandler}
              showModal={clickButton}
              onClickButton={onClickedButtonHandler}
              className="container"
            >
              {!token && <p className='not-login'>Login First :{')'}</p>}
              {todos.map((item, idx) => {
                return (
                  <Card
                    key={idx}
                    id={item["_id"]}
                    title={item.title}
                    description={item.description}
                    dueTime={item.dueTime}
                  />
                );
              })}
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
