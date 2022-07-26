import React from "react";

function InputWithLabel(props) {
  return (
    <div className="input-group">
      <label>{props.label} :</label>
      <input
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        required
      />
    </div>
  );
}

export default InputWithLabel;
