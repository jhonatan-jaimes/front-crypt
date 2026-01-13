import React, { useEffect, useState } from "react";
import LinkComponent from "./LinkComponent";
import styles from "./Nav.module.css";

const NavComponent = ({ tipo }) => {

  const [mode, setMode] = useState("home");

  useEffect(() => {
    const t = tipo === "" ? "home" : tipo;
    setMode(t);
  }, [tipo]);

  const handleMode = (modo) => {
    return mode === modo ? styles.linkNavSelect : styles.linkNav;
  };

  const changeMode = (newMode) => {
    setMode(newMode);
  };
  return (
    <section className={styles.navContain}>
      <div>
        <h1 className={styles.tituloNav}>EDSQ</h1>
      </div>
      <div className={styles.navLinkCont}>
        <LinkComponent
          to="/"
          name="Home"
          className={handleMode("home")}
          onClick={() => changeMode("home")}
        />
        <LinkComponent
          to="/ed"
          name="Encriptar texto"
          className={handleMode("ed")}
          onClick={() => changeMode("ed")}
        />
        <LinkComponent
          to="/qr"
          name="Crear QR"
          className={handleMode("qr")}
          onClick={() => changeMode("qr")}
        />
        <LinkComponent
          to="/shorter"
          name="Acortar link"
          className={handleMode("shorter")}
          onClick={() => changeMode("shorter")}
        />
        <LinkComponent
          to="/hash"
          name="Crear hash"
          className={handleMode("hash")}
          onClick={() => changeMode("hash")}
        />
      </div>
    </section>
  );
};

export default NavComponent;
