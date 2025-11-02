import React, { useState } from "react";
import FormComponent from "../../component/form/FormComponent.jsx";
import styles from "./Crypto.module.css";
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";

const CryptoPage = () => {
  const [code, setCode] = useState({});
  const handleSubmit = async (mode, objeto) => {
    try {
      const result = await fetchPost(`${UrlLinks.URL_GENERAL}/${mode}`, objeto);
      setCode(result);
    } catch (error) {
      console.error("Error in handleSubmit: 555", error);
    }
  };
  return (
    <div className={styles.cryptoContain}>
      <FormComponent handleSubmit={handleSubmit} code={code} />
    </div>
  );
};

export default CryptoPage;
