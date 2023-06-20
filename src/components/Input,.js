import React from "react";

const Input = ({ id, label, placeholder, type, register }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
    </div>
  );
};

export default Input;
