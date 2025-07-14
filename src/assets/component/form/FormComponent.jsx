import BotonComponent from "../boton/BotonComponent";
import InputTextComponent from "../input-text/InputTextComponent";
import TextAreaComponent from "../area-text/TextAreaComponent";
import styles from "./Form.module.css";
import ImgComponent from "../img-qr/ImgComponent";

const FormComponent = () => {
  return (
    <section className={styles.general}>
      <div className={styles.contain}>
        <div className={styles.divBotones}>
          <BotonComponent nameButton={"Encode"} className={styles.botonSe} />
          <BotonComponent nameButton={"Decode"} className={styles.botonSe} />
        </div>
        <InputTextComponent
          placeholder={"Ingrese el texto a "}
          className={styles.inputText}
        />
        <BotonComponent nameButton={"Encode"} className={styles.botonSubmit} />
        <TextAreaComponent
          className={styles.textArea}
          placeholder={"Aqui ira el codigo ..."}
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
