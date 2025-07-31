import React from "react";

const InputTextComponent = ({ value, placeholder, className, onChange }) => {
  return (
    <input
      name="text"
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputTextComponent;
