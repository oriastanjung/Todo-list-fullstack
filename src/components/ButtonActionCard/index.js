import React from 'react'
import editIcon from "../../assets/editIcon.png";
import markDoneIcon from "../../assets/markDoneIcon.png";


function ButtonActionCard(props) {
  return (
    <button onClick={props.action}>
        {props.isEdit && <img src={editIcon}/>}
        {props.isDone && <img src={markDoneIcon}/>}
    </button>
  )
}

export default ButtonActionCard