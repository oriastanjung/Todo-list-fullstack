import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { config } from "../../configs";
import InputWithLabel from "../InputWithLabel";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

function SignUpModal(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    no_telp: "",
  });

  const onChangeHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${config.api_url}/api/users/signup/`,
        form
      );
      
      navigate(-1)

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check the Form, Invalid Data Input',
      })
    }
  };

  const closeSignUpModal = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form className="modal-page">
      <h5>Create New Account</h5>
      <div className="input">
        <InputWithLabel
          name={"username"}
          type={"text"}
          label={"Username"}
          placeholder={"username"}
          value={form.username}
          onChange={onChangeHandler}
        />
        <InputWithLabel
          name={"password"}
          type={"password"}
          label={"Password"}
          value={form.password}
          placeholder={"***********"}
          onChange={onChangeHandler}
        />
        <InputWithLabel
          name={"email"}
          type={"email"}
          label={"Email"}
          value={form.email}
          placeholder={"example@gmail.com"}
          onChange={onChangeHandler}
        />
        <InputWithLabel
          name={"no_telp"}
          type={"tel"}
          label={"No Telephone"}
          value={form.no_telp}
          placeholder={"082263xxxxxxx"}
          onChange={onChangeHandler}
        />
      </div>
      <div className="modal-action">
        <div className="actions-btn">
          <div>
            <Button onClick={closeSignUpModal} isModal isModalCancel>
              Cancel
            </Button>
            <Button type={"submit"} onClick={LoginHandler} isModal>
              Create
            </Button>
          </div>
        </div>
        <div className="link">
          <Link to="/">Login instead</Link>
        </div>
      </div>
    </form>
  );
}

export default SignUpModal;
