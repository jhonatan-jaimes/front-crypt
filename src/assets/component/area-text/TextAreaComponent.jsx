import React from "react";

const TextAreaComponent = ({ value, className, placeholder }) => {
  return (
    <textarea
      value={value}
      className={className}
      readOnly
      placeholder={placeholder}
    />
  );
};

export default TextAreaComponent;
