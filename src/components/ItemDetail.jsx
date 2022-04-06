import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


const ItemDetail = ({ producto }) => {
    const { id, title, description, price, image } = producto
    console.log("desde ItemD " + producto)

    return (
        <Fragment>
            <div className='item'>
                <p className='itemTittle'>{title}</p>
                {console.log("desde ItdTiltle " + { title })}
                <div><p className='itemText'>Id: {id}</p></div>
                <div><p className='itemText'>Precio: {price}</p></div>
                <div><img className='itemImg' src={image} /> </div>
                <div><p className='itemText'>Descripción: {description}</p></div>
                {/*<ItemCount stock={stock} />*/}
            </div>



        </Fragment>
    )

}

export default ItemDetail;