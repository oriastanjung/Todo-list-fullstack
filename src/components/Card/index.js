import React from "react";
import editIcon from '../../assets/editIcon.png';
import markDoneIcon from '../../assets/markDoneIcon.png';
function Card(props) {
  return (
    <div className="card">
      <div className="card-info">
        <h4>Make Food</h4> 
        <p className="card-desc">Make food for family gathering, don’t forget buy vegetables first</p>
        <p>Finish it before 20 July 2022, at 23.59</p>
      </div>
      <div className="icons-card">
        <div className="icon">
            <img src={editIcon} alt="" />
        </div>
        <div className="icon">
            <img src={markDoneIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
