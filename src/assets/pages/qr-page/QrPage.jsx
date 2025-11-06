import React, { useState } from "react";
import QrComponent from "../../component/qr-component/QrComponent";
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";
import styles from "../qr-page/QrPage.module.css";

const QrPage = () => {
  const [imgQr, setImgQr] = useState({ qr: "" });
  const [messa, setMessa] = useState("");

  const onClickE = async (mode, objeto) => {
    try {
      const result = await fetchPost(`${UrlLinks.URL_GENERAL}/${mode}`, objeto);
      const data = await result.json();
      if (!result.ok) {
        setImgQr({ qr: data?.error });
      } else {
        setImgQr({ qr: data?.qr });
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };
  const onClickD = (dataImage, nameImage) => {
    const a = document.createElement("a");
    a.href = dataImage;               // tu data:image/png;base64,...
    a.download = `${nameImage}.png`;      // nombre del archivo
    a.click();
  };

  const onChange = (e) => {
    setMessa(e.target.value);
  };

  return (
    <div className={styles.pageGeneral}>
      <QrComponent
        placeholder={"Ingresa el texto para crear el QR"}
        imgQr={imgQr ? imgQr : { qr: "" }}
        nameButtonCre={"Crear QR"}
        nameButtonDes={"Descargar QR"}
        onClickE={onClickE}
        onClickD={onClickD}
        onChange={onChange}
        value={messa}
      />
    </div>
  );
};

export default QrPage;
