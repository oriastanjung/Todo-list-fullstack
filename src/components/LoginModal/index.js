import React,{useState} from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import InputWithLabel from "../InputWithLabel";

function LoginModal(props) {
  const [form, setForm] = useState({
      username : "",
      password : ""
  });

  const onChangeHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name] : e.target.value }
    })
  }

  const LoginHandler = () => {
    console.log(form.username);
  }
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
            <Button type={"submit"} onClick={LoginHandler} isModal>Login</Button>
          </div>
        </div>
        <div className="link">
          <Link to={'/signup'}>Create account here</Link>
        </div>
      </div>
    </form>
  );
}

export default LoginModal;
