import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { config } from "../../configs";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Link } from "react-router-dom";
import InputWithLabel from "../InputWithLabel";

function LoginModal(props) {
  const navigate = useNavigate();
  let token;
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${config.api_url}/api/users/signin/`,
        form
      );
      token = result.data.data.token;
      localStorage.setItem("token", token);
      window.location.reload();
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Credentials',
      })
    }
  };

  return (
    <form className="modal-page">
      <h5>Login</h5>
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
      </div>
      <div className="modal-action">
        <div className="actions-btn">
          <div>
            <Button onClick={props.onClose} isModal isModalCancel>
              Cancel
            </Button>

            <Button type={"submit"} onClick={onSubmitHandler} isModal>
              Login
            </Button>
          </div>
        </div>
        <div className="link">
          <Link to={"/signup"}>Create account here</Link>
        </div>
      </div>
    </form>
  );
}

export default LoginModal;
