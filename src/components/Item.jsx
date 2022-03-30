import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';

const Item = ({ productId, productTitle, productDescription, productPrice, productPictureUrl, productStock }) => {

    //console.log(producto)

    return (
        <Fragment>
            <div className='item'>
                <p className='itemTittle'>{productTitle}</p>
                <div><p className='itemText'>Id: {productId}</p></div>
                <div><p className='itemText'>Precio: {productPrice}</p></div>
                <div><img className='itemImg' src={productPictureUrl} /> </div>
                <div><p className='itemText'>Descripción: {productDescription}</p></div>
                <ItemCount productStock={productStock} />
            </div>


        </Fragment>
    )

}

export default Item;