import React from "react";
import FormComponent from "../component/form/FormComponent";
import styles from "./Crypto.module.css";

const CryptoPage = () => {
  return (
    <div className={styles.cryptoContain}>
      <FormComponent />
    </div>
  );
};

export default CryptoPage;
