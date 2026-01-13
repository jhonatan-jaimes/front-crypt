import React, { useEffect } from 'react'
import TextHome from "../../component/text-home/TextHome"
import styles from "./Home.module.css"
import UrlLinks from '../../domain/UrlLinks';

const HomePage = () => {
    useEffect(() => {
        const wakeUp = async () => {
            await fetch(`${UrlLinks.URL_GENERAL}/${"wake-up"}`);
        }
        wakeUp();
    }, []);
    const texto = `
    Bienvenido a EDSQ, una plataforma creada para simplificar tus procesos digitales y ofrecerte herramientas inteligentes que optimicen tu día a día. En EDSQ reunimos en un solo lugar las funciones más útiles para trabajar con información digital: codificar y decodificar texto, acortar enlaces, y generar códigos QR personalizados de forma rápida, segura y gratuita. \n

    Nuestro objetivo es brindarte una experiencia fluida y eficiente, sin necesidad de instalaciones ni configuraciones complicadas. Con EDSQ puedes transformar tu información en segundos: convierte textos en cadenas codificadas para proteger datos, recupera fácilmente su contenido original, crea enlaces cortos listos para compartir en redes o campañas, y genera códigos QR profesionales que podrás usar en presentaciones, productos o materiales publicitarios. \n

    Diseñamos esta plataforma pensando en estudiantes, profesionales, desarrolladores y emprendedores que buscan soluciones confiables y accesibles. En EDSQ creemos que la tecnología debe estar al servicio de todos, por eso ofrecemos herramientas simples pero potentes, con una interfaz intuitiva y un enfoque centrado en la seguridad y la eficiencia. \n
    
    Explora todo lo que puedes hacer con EDSQ y descubre una nueva forma de gestionar tu información digital.`
    return (
        <div className={styles.pageGeneral}>
            <TextHome
                titulo={"EDSQ"}
                parrafo={texto}
                className={styles.divParrafo}
            />
        </div>
    )
}

export default HomePage;
