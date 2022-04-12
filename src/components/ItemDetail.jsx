import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
    const { id, title, description, price, image, stock } = producto
    const [ItemsCantidad, setItemsCantidad] = useState(0);

    const addItem = (producto, ItemsCantidad) => {
        console.log("hola somos los productos " + producto + " y soy la cantidad a comprar " + ItemsCantidad)
    }
    const navigate = useNavigate()
    const goToCart = () => {
        navigate(`/cart`)
    }
    return (
        <Fragment>
            <div className='itemDetail'>
                <div className='itemImgContainer'><img className='itemImg' src={image} /></div>
                <div className='itemDescrip'>
                    <p className='itemTittle'>{title}</p>
                    <p className='itemText'>Precio: {producto.price}</p>
                    <p className='itemText'> <strong> Características del producto:</strong> {description}</p>
                    <ItemCount stock={stock} ItemsCantidad={ItemsCantidad} setItemsCantidad={setItemsCantidad} />
                    <Button className='buttonCart' onClick={() => addItem(producto, ItemsCantidad)}> Agregar al Carrito </Button>
                    <Button className='buttonCart' onClick={() => goToCart()}>Finalizar compra</Button>
                </div>
            </div>
        </Fragment>
    )

}

export default ItemDetail;