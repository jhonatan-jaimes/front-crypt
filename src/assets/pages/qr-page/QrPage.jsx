import React, { useState } from "react";
import QrComponent from "../../component/qr-component/QrComponent";
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";

const QrPage = () => {
  const [imgQr, setImgQr] = useState("");
  const [messa, setMessa] = useState("");

  console.log(messa);

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
    <div>
      <QrComponent
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
