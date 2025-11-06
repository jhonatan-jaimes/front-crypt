import BotonComponent from "../boton/BotonComponent";
import InputTextComponent from "../input-text/InputTextComponent";
import TextAreaComponent from "../area-text/TextAreaComponent";
import styles from "./Form.module.css";
import { useState } from "react";

const FormComponent = ({ handleSubmit, message }) => {
  const [mode, setMode] = useState("Encode");
  const [inputValue, setInputValue] = useState(""); // Estado único para el input

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Actualiza directamente el estado
  };

  const clickSubmit = () => {
    handleSubmit(mode.toLowerCase(), { text: inputValue }); // Envía como objeto si es necesario
  };

  const handleMode = (modo) => {
    return mode === modo ? styles.botonSelect : styles.botonSe;
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setInputValue(""); // Resetea el input al cambiar modo
  };

  return (
    <section className={styles.general}>
      <div className={styles.contain}>
        <div className={styles.divBotones}>
          <BotonComponent
            nameButton={"Encode"}
            className={handleMode("Encode")}
            onClick={() => changeMode("Encode")}
          />
          <BotonComponent
            nameButton={"Decode"}
            className={handleMode("Decode")}
            onClick={() => changeMode("Decode")}
          />
        </div>

        <InputTextComponent
          value={inputValue}
          placeholder={`Ingrese el texto a ${mode.toLowerCase()}`}
          className={styles.inputText}
          onChange={handleInputChange} // Usa el manejador corregido
        />

        <BotonComponent
          nameButton={mode}
          className={styles.botonSubmit}
          onClick={() => clickSubmit()}
        />

        <TextAreaComponent
          value={message.text}
          className={styles.textArea}
          placeholder={`Aquí irá el código ${mode.toLowerCase()}`}
          readOnly // Asumo que es solo para visualización
        />
      </div>
    </section>
  );
};

export default FormComponent;
