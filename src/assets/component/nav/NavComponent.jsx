import React from "react";
import LinkComponent from "./LinkComponent";
import styles from "./Nav.module.css";

const NavComponent = () => {
  return (
    <section className={styles.navContain}>
      <h1 className={styles.tituloNav}>EDSQ</h1>
      <LinkComponent to="/" name="Home" className={styles.linkNav} />
      <LinkComponent to="/qr" name="Codigo QR" className={styles.linkNav} />
      <LinkComponent
        to="/crypto"
        name="Encriptar texto"
        className={styles.linkNav}
      />
      <LinkComponent
        to="/shorter"
        name="Acortar link"
        className={styles.linkNav}
      />
    </section>
  );
};

export default NavComponent;
