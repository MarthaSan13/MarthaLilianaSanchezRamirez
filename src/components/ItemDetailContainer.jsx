import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [id, setId] = useState([]);
    const [producto, setProducto] = useState([]);
    const [cargador, setCargador] = useState(true);

    const promesa3 = fetch(`https://fakestoreapi.com/products/1`);


    useEffect(() => {
        promesa3.then((data) => {
            const dataParseada = data.json();
            console.log(dataParseada + "hiiiii");
            return dataParseada;
        })
            .then(producto => {
                const myJSON = JSON.stringify(producto);
                console.log(myJSON + "yeapp");
                console.log(producto + "soy el producto");
                setProducto(myJSON);
                // setCargador(false);
            }).catch(() => {
                console.log("Algo va mallllll")
            })
    }, []);

    return (
        <div className="item-detail-container">
            <ItemDetail producto={producto} />

        </div>
    )
}

export default ItemDetailContainer;