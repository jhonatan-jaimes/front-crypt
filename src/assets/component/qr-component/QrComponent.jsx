import React from "react";
import styles from "../qr-component/Qr.module.css";
import ImgComponent from "../img-qr/ImgComponent";
import BotonComponent from "../boton/BotonComponent";
import FormQrComponent from "../form-qr/FormQrComponent";
import InputTextComponent from "../input-text/InputTextComponent";

const QrComponent = ({
  imgQr,
  value,
  placeholder,
  onChange,
  nameButtonCre,
  nameButtonDes,
  onClickE,
  onClickD,
}) => {
  return (
    <section className={styles.imgDiv}>
      <div>
        <InputTextComponent
          value={value}
          placeholder={placeholder}
          className={styles.inputText}
          onChange={onChange}
        />
      </div>
      {imgQr.qr.startsWith("data:") ? imgQr.qr && <ImgComponent imgQr={imgQr?.qr} alt={value} /> : imgQr.qr && <p>{imgQr.qr}</p>}
      <div className={styles.boxBoton}>
        <BotonComponent
          nameButton={nameButtonCre}
          className={styles.botonQr}
          onClick={() => onClickE("get-qr", { text: value, size: 400 })}
        />
        <BotonComponent
          nameButton={nameButtonDes}
          className={styles.botonQr}
          onClick={() => onClickD(imgQr.qr, imgQr.qr.substring(24, 30))}
        />
      </div>
    </section>
  );
};

export default QrComponent;
