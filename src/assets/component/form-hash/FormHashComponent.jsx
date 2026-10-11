import styles from "./Form.hash.module.css";
import BotonComponent from '../boton/BotonComponent'
import TextAreaComponent from "../area-text/TextAreaComponent"
import InputTextComponent from "../input-text/InputTextComponent";

export const FormHashComponent = ({ value, code, onClick, onChange  }) => {
  return (
    <section className={styles.divForm}>
      <InputTextComponent
        value={value}
        type={"number"}
        min={8}
        max={128}
        placeholder={`Largo del hash (8 - 128)`}
        className={styles.inputHash}
        onChange={onChange}
      />
      <BotonComponent
        nameButton={"Crear hash"}
        className={styles.botonHash}
        onClick={() => onClick("get-hash", { value: Number(value) })}
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