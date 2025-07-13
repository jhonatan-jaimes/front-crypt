import BotonComponent from "../boton/BotonComponent";
import InputTextComponent from "../input-text/InputTextComponent";
import TextAreaComponent from "../area-text/TextAreaComponent";
import styles from "./Form.module.css";

const FormComponent = () => {
  return (
    <section className={styles.contain}>
      <div>
        <BotonComponent nameButton={"Encode"} />
        <BotonComponent nameButton={"Decode"} />
      </div>
      <InputTextComponent
        placeholder={"Ingrese el texto a "}
        className={styles.inputText}
      />
      <BotonComponent nameButton={"Encode"} className={styles.botonSubmit} />
      <TextAreaComponent />
    </section>
  );
};

export default FormComponent;
