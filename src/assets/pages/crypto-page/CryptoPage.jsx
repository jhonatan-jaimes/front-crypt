import React, { useState } from "react";
import FormComponent from "../../component/form/FormComponent.jsx";
import styles from "./Crypto.module.css";
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";

const CryptoPage = () => {
  const [message, setMessage] = useState({ text: "" });
  const handleSubmit = async (mode, objeto) => {
    try {
      const result = await fetchPost(`${UrlLinks.URL_GENERAL}/${mode}`, objeto);
      const data = await result.json();
      if (!result.ok) {
        setMessage({ text: data?.error });
      } else {
        setMessage({ text: data?.text });
      }
    } catch (error) {
      console.error(error);
      setMessage({ text: error?.message || "An unexpected error occurred" });
    }
  };
  return (
    <div className={styles.cryptoContain}>
      <FormComponent handleSubmit={handleSubmit} message={message} />
    </div>
  );
};

export default CryptoPage;
