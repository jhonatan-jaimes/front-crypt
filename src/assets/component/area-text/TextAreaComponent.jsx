import React from "react";

const TextAreaComponent = ({ text, className, placeholder }) => {
  return (
    <textarea
      value={text}
      className={className}
      readOnly
      placeholder={placeholder}
    />
  );
};

export default TextAreaComponent;
