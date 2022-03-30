import React, { Fragment, useState, useEffect } from 'react';
import ItemList from "./ItemList";

const productosIniciales = [
    { id: "101", title: "Aceite de coco", description: "Producto 100% orgánico", price: "10Uds", pictureUrl: 'https://funat.co/wp-content/uploads/2021/07/ACEITE-COCO-NACIONAL-1200X1200.jpg', stock: 5 },
    { id: "102", title: "Miel de abejas", description: "Producto 100% orgánico", price: "5Uds", pictureUrl: "https://www.productosdelbosqueseco.com/wp-content/uploads/2020/06/miel-630-copia.jpg", stock: 10 },
    { id: "103", title: "Quinua", description: "Molida, Producto orgánico ", price: "3Uds", pictureUrl: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3771879-1000-1000/7702011271273.jpg?v=637783113958200000", stock: 8 },
    { id: "104", title: "Moringa", description: "En polvo, Producto orgánico", price: "4Uds", pictureUrl: "https://m.media-amazon.com/images/I/71Wl3rUxkDL._AC_SY606_.jpg", stock: 5 }

]
const ItemListContainer = ({ mensaje }) => {

    const [productos, setProductos] = useState([]);
    const [cargador, setCargador] = useState("");

    const promesa = new Promise((res, rej) => {

        setTimeout(() => {
            res(productosIniciales);
        }, 3000)

    });

    useEffect(() => {
        setCargador("Hoola estoy cargando :)");

        promesa.then((productos) => {
            setProductos(productos);
            //console.log(promesa)
            setCargador(false);
        })
            .catch(() => {
                console.log("Algo va mal")
            })
    }, []);

    return (
        <Fragment>
            <div className='itemListContainer'>
                <h3 className='itemListTitle'>¡Ofertas de la semana!</h3>
                <h3>{cargador}</h3>
                <div className=''>{mensaje}</div>
                <ItemList productos={productos} />

            </div>
        </Fragment>
    )

}

export default ItemListContainer;