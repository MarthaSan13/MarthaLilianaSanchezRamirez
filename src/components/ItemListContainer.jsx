import React, { Fragment, useState, useEffect } from 'react';
import ItemList from "./ItemList";

const ItemListContainer = ({ mensaje }) => {

    const [productos, setProductos] = useState([]);
    const [cargador, setCargador] = useState(true);

    const promesa2 = fetch("https://fakestoreapi.com/products");
    useEffect(() => {
        promesa2.then((data) => {
            const dataParseada = data.json();
            return dataParseada;
        })
            .then(productos => {
                setProductos(productos);
                setCargador(false);
            }).catch(() => {
                console.log("Algo va mal")
            })
    }, []);

    return (
        <Fragment>
            <p className='cargador' > {cargador ? "Hey, momento que estoy cargando :D" : null} </p>
            <h3 className='itemListTitle'>¡Ofertas de la semana!</h3>
            <div className='itemMessage'>{mensaje}</div>
            <div className='itemListContainer'>
                <ItemList productos={productos} />
            </div>
        </Fragment>
    )

}

export default ItemListContainer;