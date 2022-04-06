import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({ stock }) => {

    const [ItemsCantidad, setItemsCantidad] = useState(1);
    const [setup, setSetup] = useState(0);

    const setMinStock = (cantidad) => {
        if (cantidad >= 0) {
            setItemsCantidad(cantidad)
        }
    }
    const setMaxStock = (cantidad) => {
        if (cantidad <= stock) {
            setItemsCantidad(cantidad)
        }
    }

    useEffect(() => {
        console.log("se ejecuto el useEffect");

        setTimeout(() => {
            setSetup(setup + 1)
        }, 2000)

    }, [ItemsCantidad])

    return (
        <Fragment>
            <div className='itemCont'>


                <Button className='buttonCart' onClick={() => setMinStock(ItemsCantidad - 1)}><FontAwesomeIcon icon={faMinus} /> </Button>{' '}
                <span className='cantidad'>{ItemsCantidad}</span>
                <Button className='buttonCart' onClick={() => setMaxStock(ItemsCantidad + 1)}><FontAwesomeIcon icon={faPlus} /></Button>{' '}
                <div className='stockAviso'>Cantidad disponible: {stock}</div>
                <Button className='buttonCart'> Agregar al Carrito </Button>
            </div>
        </Fragment>
    )

}

export default ItemCount;

