import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [cargador, setCargador] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const URL = (`https://fakestoreapi.com/products/${id}`);

        const getitem = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setProducto({ ...data, stock: Math.floor((Math.random() * (100 - 1 + 1)) + 1) });
            } catch {
                setError(true);
            } finally {
                setCargador(false);
            }
        };
        getitem();
    }, [id]);

    return (
        <div className="item-detail-container">
            {cargador ? <p className='cargador' >"Hey, momento que estoy cargando :D"</p> : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer;