import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [cargador, setCargador] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const URL = (`https://fakestoreapi.com/products/categories`);

        const getcategories = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setCategories(data);
                console.log(typeof data + " ,data");
            } catch {
                setError(true);
            } finally {
                setCargador(false);
            }
        };
        getcategories();
    }, []);

    const goToCategory = (unacategory) => {
        navigate(`/category/${unacategory}`)
    }

    return (

        <div className="categoriesContainer">
            {cargador ? <p className='cargador' >"Hey, momento que estoy cargando :D"</p> : null}
            {categories.map((unacategory) => (
                <div className='categoriesList itemsList--animated'>
                    {unacategory}
                    <Button className='buttonCart' variant="primary" onClick={() => goToCategory(unacategory)}>Ver productos</Button>
                </div>
            ))}
        </div>
    )
}

export default Categories;