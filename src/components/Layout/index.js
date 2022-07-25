import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";
function Layout(props) {
  return (
    <>
      <Header onClickButton={props.onClickButton} className={`header`}></Header>
      {props.showModal && (
        <Modal onClose={props.onCloseModal}>
          <div>ini Modal</div>
        </Modal>
      )}
      <main className={props.className}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
