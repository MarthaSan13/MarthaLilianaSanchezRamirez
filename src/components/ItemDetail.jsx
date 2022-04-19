import React, { Fragment, useContext } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';
import { contexto } from '../contexts/CartContext';

const ItemDetail = ({ producto }) => {
    const { id, title, description, price, image, stock } = producto
    const [ItemsCantidad, setItemsCantidad] = useState(0);
    const [showFinalizar, setShowFinalizar] = useState(false);
    const { addProducto } = useContext(contexto);

    const navigate = useNavigate()
    const goToCart = () => {
        navigate(`/cart`)
    }

    const onAddCart = (ItemsCantidad) => {
        if (ItemsCantidad > 0) {
            addProducto(producto, ItemsCantidad);
            setItemsCantidad(ItemsCantidad)
            console.log("Agregaste " + ItemsCantidad + " articulos al carrito")
            setShowFinalizar(true);
        } else {
            console.log("Oh nou nou nou nou")
            alert("Indica la cantidad que deseas comprar");
        }
    }

    return (
        <Fragment>
            <div className='itemDetail'>
                <div className='itemImgContainer'><img className='itemImg' src={image} /></div>
                <div className='itemDescrip'>
                    <p className='itemTittle'>{title}</p>
                    <p className='itemText'>Precio: {producto.price}</p>
                    <p className='itemText'> <strong> Características del producto:</strong> {description}</p>
                    <ItemCount stock={stock} onAddCart={onAddCart} />
                    {showFinalizar ? <Button className='buttonCart' onClick={() => goToCart()}>Finalizar compra</Button> : null}
                </div>
            </div>
        </Fragment>
    )

}

export default ItemDetail;