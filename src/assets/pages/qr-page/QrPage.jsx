import React, { useState } from "react";
import QrComponent from "../../component/qr-component/QrComponent";
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";
import styles from "../qr-page/QrPage.module.css";

const QrPage = () => {
  const [imgQr, setImgQr] = useState("");
  const [messa, setMessa] = useState("");

  const onClickE = async (mode, objeto) => {
    try {
      const result = await fetchPost(`${UrlLinks.URL_GENERAL}/${mode}`, objeto);
      setImgQr(result);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const onChange = (e) => {
    setMessa(e.target.value);
  };

  return (
    <div className={styles.pageGeneral}>
      <QrComponent
        placeholder={"Ingresa el texto para crear el QR"}
        imgQr={imgQr ? imgQr : ""}
        nameButtonCre={"Crear QR"}
        nameButtonDes={"Descargar QR"}
        onClickE={onClickE}
        onChange={onChange}
        value={messa}
      />
    </div>
  );
};

export default QrPage;
