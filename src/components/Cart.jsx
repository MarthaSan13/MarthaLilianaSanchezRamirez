import React, { Fragment, useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Test from './Test';
import { uid } from "uid";
import { contexto } from '../contexts/CartContext';

const Cart = () => {
    const [productos, setProductos] = useState([]);
    const { items, eliminarProducto, limpiarProductos } = useContext(contexto);

    const borradorHijo = (idx) => {
        eliminarProducto(idx)
    }
    const borrarTodo = () => {
        limpiarProductos()
    }

    const totalItems = items.length > 0;

    return (
        <Fragment>
            {totalItems
                ?
                (
                    items.map((item) => (
                        <div className='muestraItems' key={item.id}>
                            <img className='imgOnCart' src={item.image} />
                            <p className='titleOnCart'> {item.title} </p>
                            <p> Precio: {item.price} </p>
                            <p> Cantidad: {item.ItemsCantidad} </p>
                            <Button className='buttonCart' onClick={() => borradorHijo(item.id)}>Eliminar</Button >
                        </div>
                    )
                    )

                )
                : (<Link className='myLink myLink--cart' to={`/`}>Adiciona productos</Link>)
            } < Button className='buttonCart buttonCart--Dw' onClick={() => borrarTodo()}>Eliminar todo</Button>
        </Fragment >



    )
}

export default Cart;