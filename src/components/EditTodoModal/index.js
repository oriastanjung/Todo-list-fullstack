import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { config } from "../../configs";
import Swal from "sweetalert2";
import InputWithLabel from "../InputWithLabel";
import Button from "../Button";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTodoModal() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    dueTime: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${config.api_url}/api/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = result.data.data;
        const date = moment(data.dueTime).format("YYYY-MM-D");
        setForm({
          ...form,
          title: data.title,
          dueTime: date,
          description: data.description,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onChangeHandler = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onEditHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        `${config.api_url}/api/todos/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/");
      Swal.fire("Success!", "You Edit The Todo!", "success");
      setTimeout(() => {
        window.location.reload();
      },2000)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check the Data Again!",
      });
    }
  };

  const closeSignUpModal = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form className="modal-page">
      <h5>Edit Todo</h5>
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
          <textarea
            onChange={onChangeHandler}
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={form.description}
          ></textarea>
        </div>
      </div>
      <div className="modal-action">
        <div className="actions-btn">
          <div>
            <Button onClick={closeSignUpModal} isModal isModalCancel>
              Cancel
            </Button>
            <Button type={"submit"} onClick={onEditHandler} isModal>
              Edit Todo
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default EditTodoModal;
