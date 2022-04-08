import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';

//const Item = ({ productId, productTitle, productDescription, productPrice, productPictureUrl, productStock }) => {
const Item = ({ producto }) => {
    const { id, title, description, price, image, stock } = producto
    //console.log(producto)
    const navigate = useNavigate()
    const goToProduct = () => {
        navigate(`/producto/${id}`)
    }

    return (
        <Fragment>
            <div className='item'>
                <p className='itemTittle'>{title}</p>
                <div><img className='itemImg' src={image} /> </div>
                <div><p className='itemText'> ${price}</p></div>
                <Button className='buttonCart' variant="primary" onClick={() => goToProduct()}>Ver detalle del producto</Button>
            </div>


        </Fragment>
    )

}

export default Item;