import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
    const { id, title, description, price, image, stock } = producto

    return (
        <Fragment>
            <div className='itemDetail'>
                <div className='itemImgContainer'><img className='itemImg' src={image} /></div>
                <div className='itemDescrip'>
                    <p className='itemTittle'>{title}</p>
                    { /*<p className='itemText'>Id: {id}</p>*/}
                    <p className='itemText'>Precio: {producto.price}</p>
                    <p className='itemText'> <strong> Características del producto:</strong> {description}</p>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </Fragment>
    )

}

export default ItemDetail;