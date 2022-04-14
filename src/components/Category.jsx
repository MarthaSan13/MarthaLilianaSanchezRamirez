import { useEffect, useState } from 'react';
import ItemListContainer from '../containers/ItemListContainer';
import { useParams } from 'react-router-dom';

const Category = () => {

    const [productos, setProductos] = useState([]);
    const [cargador, setCargador] = useState(true);
    const [error, setError] = useState(false);

    const { unacategory } = useParams();
    useEffect(() => {

        const URL = (`https://fakestoreapi.com/products/category/${unacategory}`);
        const getitem = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setProductos(data);
            } catch {
                setError(true);
            } finally {
                setCargador(false);
            }
        };
        getitem();
    }, [unacategory]);

    return (
        <div className="">
            {cargador ? <p className='cargador' >"Hey, momento que estoy cargando :D"</p> : <ItemListContainer productos={productos} />}
        </div>
    )
}

export default Category;