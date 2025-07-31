import React from "react";
import styles from "../form/Form.module.css";

const QrComponent = () => {
  return (
    <div className={styles.imgDiv}>
      <ImgComponent className={styles.imgQr} />
      <BotonComponent nameButton={"Descargar QR"} className={styles.botonQr} />
    </div>
  );
};

export default QrComponent;
