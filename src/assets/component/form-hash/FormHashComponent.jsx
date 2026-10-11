import styles from "./Form.hash.module.css";
import BotonComponent from '../boton/BotonComponent'
import TextAreaComponent from "../area-text/TextAreaComponent"

export const FormHashComponent = ({ value, code, onClick  }) => {
  return (
    <section className={styles.divForm}>
      <BotonComponent
        nameButton={"Crear hash"}
        className={styles.botonHash}
        onClick={() => onClick("get-hash", { value: value })}
      />
      <TextAreaComponent  
        value={code.hash}
        className={styles.textArea}
        placeholder={`Aquí irá el hash creado`}
        readOnly
      />
    </section>
  )
}