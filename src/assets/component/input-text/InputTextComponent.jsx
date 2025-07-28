import React from "react";

const InputTextComponent = ({ placeholder, className, onChange }) => {
  return (
    <input
      name="text"
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputTextComponent;
