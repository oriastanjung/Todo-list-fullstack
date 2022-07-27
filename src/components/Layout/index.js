import React, { useEffect, useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import Button from "../Button";
import { useNavigate, useParams } from "react-router-dom";
import NewTodoModal from "../NewTodoModal";
import EditTodoModal from "../EditTodoModal"
import Swal from "sweetalert2";

function Layout(props) {
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState(true);
  const [checkToken, setCheckToken] = useState(false);

  const navigate = useNavigate();

  const onClickBackdropToDashboard = (e) => {
    e.preventDefault();
    navigate("/");
    setShowNewTodoModal(false);
  };

  useEffect(() => {
    localStorage.getItem("token") ? setCheckToken(true) : setCheckToken(false);
  });

  const onClickNewTodoHandler = (e) => {
    e.preventDefault();
    if (checkToken) {
      navigate("/new-todo");
      setShowNewTodoModal(true);

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Have to Login first!",
      });
      navigate("/");
    }
  };

  return (
    <>
      <Header onClickButton={props.onClickButton} className={`header`}></Header>

      {props.showModal && props.inLoginModal && (
        <Modal onClose={props.onCloseModal}>
          <LoginModal onClose={props.onCloseModal} />
        </Modal>
      )}

      {props.showModal && props.inSignUpModal && (
        <Modal onClose={onClickBackdropToDashboard}>
          <SignUpModal onClose={onClickBackdropToDashboard} />
        </Modal>
      )}

      {showNewTodoModal && props.inNewTodoModal && (
        <Modal onClose={onClickBackdropToDashboard}>
          <NewTodoModal onClose={onClickBackdropToDashboard} />
        </Modal>
      )}

      {showEditTodoModal && props.inEditTodoModal && (
        <Modal onClose={onClickBackdropToDashboard}>
          <EditTodoModal onClose={onClickBackdropToDashboard} />
        </Modal>
      )}

      <span className="btn-main">
        <Button onClick={onClickNewTodoHandler} isMed>
          + New Todo
        </Button>
      </span>

      <main className={props.className}>{props.children}</main>

      <Footer />
    </>
  );
}

export default Layout;
