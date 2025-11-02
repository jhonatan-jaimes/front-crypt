import React from 'react'
import InputTextComponent from '../input-text/InputTextComponent'
import styles from "../../component/short-form/Short.module.css"
import BotonComponent from '../boton/BotonComponent'
import TextAreaComponent from "../area-text/TextAreaComponent"

const ShorteComponent = ({ value, placeholder, onChange, code, onClick }) => {
    return (
        <section className={styles.divForm}>
            <div>
                <InputTextComponent
                    value={value}
                    placeholder={placeholder}
                    className={styles.inputDiv}
                    onChange={onChange}
                />
            </div>
            <BotonComponent
                nameButton={"Acortar"}
                className={styles.botonAcortar}
                onClick={() => onClick("short", { text: value, link: "www.edsq.com/" })}
            />
            <TextAreaComponent
                value={code.text}
                className={styles.textArea}
                placeholder={`Aquí irá el link acortado`}
                readOnly
            />
        </section>
    )
}

export default ShorteComponent
