import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchGet } from '../../domain/Fetch';
import UrlLinks from '../../domain/UrlLinks';

const LoadPage = () => {
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchGet(`${UrlLinks.URL_PARAMS}/${id}`);
            } catch (error) {
                console.error("Error in handleSubmit: 555", error);
            }
        };

        fetchData(); // 👈 aquí la ejecutas
    }, [id]); // 👈 importante: incluye las dependencias

    return (
        <div>

        </div>
    )
}

export default LoadPage
