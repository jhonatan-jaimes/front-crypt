import React from "react";
import styles from "../form/Form.module.css";
import ImgComponent from "../img-qr/ImgComponent";
import BotonComponent from "../boton/BotonComponent";
import FormQrComponent from "../form-qr/FormQrComponent";
import InputTextComponent from "../input-text/InputTextComponent";

const QrComponent = ({ imgQr, value, placeholder, className, onChange }) => {
  return (
    <section>
      <div className={styles.imgDiv}>
        <InputTextComponent
          value={value}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
        <BotonComponent
          nameButton={"Descargar QR"}
          className={styles.botonQr}
        />
      </div>
      <ImgComponent imgQr={imgQr} />
    </section>
  );
};

export default QrComponent;
