import React from "react";

const BotonComponent = ({ nameButton, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {nameButton}
    </button>
  );
};

export default BotonComponent;
