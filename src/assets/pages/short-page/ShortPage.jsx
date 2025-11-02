import React, { useState } from 'react'
import ShorteComponent from '../../component/short-form/ShorteComponent'
import styles from "./ShortPage.module.css"
import { fetchPost } from "../../domain/Fetch.js";
import UrlLinks from "../../domain/UrlLinks.js";

const ShortPage = () => {
    const [messa, setMessa] = useState("");
    const [link, setLink] = useState("");
    const onChange = (e) => {
        setMessa(e.target.value);
    };
    const onClick = async (mode, objeto) => {
        try {
            const result = await fetchPost(`${UrlLinks.URL_GENERAL}/${mode}`, objeto);
            setLink(result);
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    }
    return (
        <div className={styles.divGeneral}>
            <ShorteComponent
                value={messa}
                placeholder={"Ingrese el link a acortar"}
                code={link}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    )
}

export default ShortPage
