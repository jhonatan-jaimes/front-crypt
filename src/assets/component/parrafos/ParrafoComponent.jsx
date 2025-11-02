import React from 'react'
import styles from "../parrafos/Parrafo.module.css";

const ParrafoComponent = ({ titulo, parrafo }) => {
    return (
        <div className={styles.parrafoDiv}>
            <h1 className={styles.tituloParra}>{titulo}</h1>
            {parrafo.split("\n").map((linea, i) => (
                <p key={i} className={styles.parraParra}>{linea}</p>
            ))}
        </div>
    )
}

export default ParrafoComponent;
