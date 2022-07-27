import React, { useState } from "react";
import axios from "axios";
import {config} from "../../configs";
import Swal from "sweetalert2";
import InputWithLabel from "../InputWithLabel";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

function NewTodoModal(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    dueTime: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const CreateHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${config.api_url}/api/todos/`, form, {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
      })
      navigate("/");
      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check the data again!',
      })
    }
    // console.log(form.username);
    
  };

  const closeSignUpModal = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form className="modal-page">
      <h5>Add New Todo</h5>
      <div className="input">
        <InputWithLabel
          name={"title"}
          type={"text"}
          label={"Title"}
          placeholder={"Something To Do"}
          value={form.title}
          onChange={onChangeHandler}
        />
        <InputWithLabel
          name={"dueTime"}
          type={"date"}
          label={"Due Time"}
          value={form.dueTime}
          placeholder={"date"}
          onChange={onChangeHandler}
        />
        <div className="input-group">
          <textarea onChange={onChangeHandler} name="description" id="description" cols="30" rows="10" value={form.description}></textarea>
        </div>
      </div>
      <div className="modal-action">
        <div className="actions-btn">
          <div>
            <Button onClick={closeSignUpModal} isModal isModalCancel>
              Cancel
            </Button>
            <Button type={"submit"} onClick={CreateHandler} isModal>
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewTodoModal;
