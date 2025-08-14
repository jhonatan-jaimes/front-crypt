import React from "react";
import InputTextComponent from "../input-text/InputTextComponent";

const FormQrComponent = ({ value, placeholder, className, onChange }) => {
  return (
    <div>
      <InputTextComponent
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};

export default FormQrComponent;
