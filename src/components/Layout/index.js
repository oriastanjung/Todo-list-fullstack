import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import Button from "../Button";
import {useNavigate} from 'react-router-dom'
import NewTodoModal from "../NewTodoModal";



function Layout(props) {
  const [showNewTodoModal , setShowNewTodoModal] = useState(false)
  const navigate = useNavigate();

  const onClickBackdropToDashboard = (e) => {
    e.preventDefault();
    navigate('/');
    setShowNewTodoModal(false)
  }
  const onClickNewTodoHandler = (e) => {

    e.preventDefault();

    navigate('/new-todo');
    setShowNewTodoModal(true)
    // console.log('new-todo');
  }


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
