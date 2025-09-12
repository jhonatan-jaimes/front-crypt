import React from "react";
import styles from "../form/Form.module.css";
import ImgComponent from "../img-qr/ImgComponent";
import BotonComponent from "../boton/BotonComponent";
import FormQrComponent from "../form-qr/FormQrComponent";
import InputTextComponent from "../input-text/InputTextComponent";

const QrComponent = ({
  imgQr,
  value,
  placeholder,
  className,
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
          className={className}
          onChange={onChange}
        />
        <InputTextComponent
          value={value}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </div>
      {imgQr && <ImgComponent imgQr={imgQr.qr} alt={value} />}
      <div className={styles.boxBoton}>
        <BotonComponent
          nameButton={nameButtonCre}
          className={styles.botonQr}
          onClick={() => onClickE("get-qr", { text: value, size: 250 })}
        />
        <BotonComponent
          nameButton={nameButtonDes}
          className={styles.botonQr}
          onClick={onClickD}
        />
      </div>
    </section>
  );
};

export default QrComponent;
