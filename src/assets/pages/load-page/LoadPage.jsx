import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UrlLinks from '../../domain/UrlLinks';
import styles from "./Load.module.css"

const LoadPage = () => {
    const { text } = useParams();
    useEffect(() => {
        const timer = setTimeout(() => {
            // 👇 Redirige al backend después de 3 segundos
            window.location.href = `${UrlLinks.URL_GENERAL}/${text}`;
        }, 3000); // 3000 ms = 3 segundos

        // Limpieza si el usuario se va antes del tiempo
        return () => clearTimeout(timer); // 👈 aquí la ejecutas
    }, [text]); // 👈 importante: incluye las dependencias

    return (
        <div className={styles.pageDiv}>
            <img className={styles.pageImg} src="image/load.gif" alt="Load" />
            <h1 className={styles.pageParra}>Redirigiendo...</h1>
        </div>
    )
}

export default LoadPage
