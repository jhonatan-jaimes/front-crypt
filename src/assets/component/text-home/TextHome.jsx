import React from 'react'
import ParrafoComponent from '../parrafos/ParrafoComponent'

const TextHome = ({ titulo, parrafo, className }) => {
    return (
        <div className={className}>
            <ParrafoComponent
                titulo={titulo}
                parrafo={parrafo}
            />
        </div>
    )
}

export default TextHome
