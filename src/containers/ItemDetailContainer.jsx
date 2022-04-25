import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [cargador, setCargador] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const productosCollection = collection(db, "productos");
        const getItem = doc(productosCollection, `${id}`)
        getDoc(getItem)
            .then((result) => {
                const id = result.id
                setProducto({ id, ...result.data() });
            })
            .finally(() => setCargador(false))
    }, [id]);

    return (
        <div className="item-detail-container">
            {cargador ? <p className='cargador' >"Hey, momento que estoy cargando :D"</p> : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer;