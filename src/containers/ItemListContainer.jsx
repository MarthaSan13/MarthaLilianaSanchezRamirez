import React, { Fragment, useState, useEffect } from 'react';
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos1, setProductos1] = useState([]);
    const [cargador, setCargador] = useState(true);

    const { unacategory } = useParams();
    //console.log(unacategory);
    useEffect(() => {
        if (unacategory) {
            fetch(`https://fakestoreapi.com/products/category/${unacategory}`)
                .then(data => data.json())
                .then(results => setProductos1(results))
                .catch(error => console.log(error))
                .finally(() => setCargador(false))
        } else {
            fetch("https://fakestoreapi.com/products")
                .then(data => data.json())
                .then(results => setProductos1(results))
                .catch(error => console.log(error))
                .finally(() => setCargador(false))
        }
    }, [unacategory]);

    //console.log(productos1);
    return (
        <Fragment>
            <h3 className='itemListTitle'>Lista de Productos</h3>
            <div className='itemListContainer'>

                {cargador
                    ? <p className='cargador' > "Hey, momento que estoy cargando :D"</p>
                    : <ItemList productos={productos1} />
                }
            </div>
        </Fragment>
    )
}

export default ItemListContainer;