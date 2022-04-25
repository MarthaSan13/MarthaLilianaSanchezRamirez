import React, { Fragment, useState, useEffect } from 'react';
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase";

const ItemListContainer = () => {
    const [productos1, setProductos1] = useState([]);
    const [cargador, setCargador] = useState(true);

    const { unacategory } = useParams();

    useEffect(() => {
        if (unacategory) {
            const productosCollection = collection(db, "productos");
            const myQuery = query(productosCollection, where("category", "==", `${unacategory}`))
            getDocs(myQuery)
                .then((result) => {
                    const docs = result.docs;
                    const lista = docs.map(producto => {
                        const id = producto.id
                        const product = {
                            id, ...producto.data()
                        }
                        return product;
                    })
                    setProductos1(lista)
                })
                .finally(() => setCargador(false))

        } else {
            const productosCollection = collection(db, "productos");
            getDocs(productosCollection)
                .then((result) => {
                    const docs = result.docs;
                    const lista = docs.map(producto => {
                        const id = producto.id
                        const product = {
                            id, ...producto.data()
                        }
                        return product;
                    })
                    setProductos1(lista)
                })
                .finally(() => setCargador(false))
        }
    }, [unacategory]);

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