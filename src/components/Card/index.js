import React, { useState } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../../configs";
import editIcon from "../../assets/editIcon.png";
import markDoneIcon from "../../assets/markDoneIcon.png";
import ButtonActionCard from "../ButtonActionCard";
import axios from "axios";
import Swal from "sweetalert2";

function Card(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const date = moment(props.dueTime).format("MMMM Do YYYY");
  const dateNow = new Date().getDate();
  const dateDueTime = new Date(props.dueTime).getDate();

  const onEditHandler = async (e) => {
    e.preventDefault();
    navigate(`/edit/${props.id}`);
  };
  const onDoneHandler = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Are You Sure to Make this Todo List as Done?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Mark As Done",
        denyButtonText: `Cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Todo Mark as Done!", "", "success");
          axios.delete(`${config.api_url}/api/todos/${props.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          navigate("/");
          setTimeout(() => {window.location.reload();}, 3000)
          
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-info">
        <h4>{props.title}</h4>
        <p className="card-desc">{props.description}</p>
        {dateNow > dateDueTime ? (
          <p style={{ color: "red" }}>
            Finish it before {date} {"[LOST]"}
          </p>
        ) : (
          <p>Finish it before {date}</p>
        )}
      </div>
      <div className="icons-card">
        <div className="icon">
          <ButtonActionCard isEdit action={onEditHandler} />
        </div>
        <div className="icon">
          <ButtonActionCard isDone action={onDoneHandler} />
        </div>
      </div>
    </div>
  );
}

export default Card;
