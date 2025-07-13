import React from "react";

const TextAreaComponent = ({ text, className }) => {
  return <textarea value={text} className={className} readOnly />;
};

export default TextAreaComponent;
