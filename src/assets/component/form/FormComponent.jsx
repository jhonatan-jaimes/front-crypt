import BotonComponent from "../boton/BotonComponent";
import InputTextComponent from "../input-text/InputTextComponent";
import TextAreaComponent from "../area-text/TextAreaComponent";
import styles from "./Form.module.css";
import ImgComponent from "../img-qr/ImgComponent";
import { useState } from "react";

const FormComponent = ({ handleSubmit }) => {
  const [mode, setMode] = useState("Encode");
  const [text, setText] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({ [name]: value });
  };
  const clickSubmit = () => {
    handleSubmit(mode.toLowerCase(), text);
    console.log(text);
  };
  const handleMode = (modo) => {
    return mode === modo ? styles.botonSelect : styles.botonSe;
  };
  console.log(text);
  return (
    <section className={styles.general}>
      <div className={styles.contain}>
        <div className={styles.divBotones}>
          <BotonComponent
            nameButton={"Encode"}
            className={handleMode("Encode")}
            onClick={() => setMode("Encode")}
          />
          <BotonComponent
            nameButton={"Decode"}
            className={handleMode("Decode")}
            onClick={() => setMode("Decode")}
          />
        </div>
        <InputTextComponent
          placeholder={`Ingrese el texto a ${mode.toLowerCase()}`}
          className={styles.inputText}
          onChange={handleChange}
        />
        <BotonComponent
          nameButton={mode}
          className={styles.botonSubmit}
          onClick={() => clickSubmit()}
        />
        <TextAreaComponent
          className={styles.textArea}
          placeholder={`Aqui ira el codigo ${mode.toLowerCase()}`}
        />
      </div>
      <div className={styles.imgDiv}>
        <ImgComponent className={styles.imgQr} />
        <BotonComponent
          nameButton={"Descargar QR"}
          className={styles.botonQr}
        />
      </div>
    </section>
  );
};

export default FormComponent;
