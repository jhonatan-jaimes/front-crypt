import { useState } from "react";
import { FormHashComponent } from "../../component/form-hash/FormHashComponent";
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";
import styles from "./Hash.module.css"

const HashPage = () => {

  const [code, setCode] = useState({ hash: "" })

  const onClick = async (mode, objeto) => {
    try {
      const result = await fetchPost(`${UrlLinks.URL_GENERAL}/${mode}`, objeto);
      const data = await result.json();
      setCode({ hash: data?.hash });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  }

  return(
    <section className={styles.divGeneral}>
      <FormHashComponent onClick={onClick} code={code} value={32}/>
    </section>
  )
}

export default HashPage;