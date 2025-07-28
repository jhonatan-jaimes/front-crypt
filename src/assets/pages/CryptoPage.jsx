import React from "react";
import FormComponent from "../component/form/FormComponent";
import styles from "./Crypto.module.css";
import { fetchPost } from "../domain/Fetch.js";

const CryptoPage = () => {
  const handleSubmit = (mode, objeto) => {
    return fetchPost(
      `https://encode-decode-jejo.onrender.com/api/${mode}`,
      objeto
    );
  };
  return (
    <div className={styles.cryptoContain}>
      <FormComponent handleSubmit={handleSubmit} />
    </div>
  );
};

export default CryptoPage;
