import React, { Fragment, useContext, useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { contexto } from '../contexts/CartContext';

const Cart = () => {
    const { items, eliminarProducto, limpiarProductos } = useContext(contexto);

    const borradorHijo = (idx) => {
        eliminarProducto(idx)
    }
    const borrarTodo = () => {
        limpiarProductos()
    }

    const totalItems = items.length > 0;

    const elMap = items.map((item) =>

        <div className='muestraItems' key={item.id}>
            <img className='imgOnCart' src={item.image} />
            <p className='titleOnCart'> {item.title} </p>
            <p> Precio: {item.price} </p>
            <p> Cantidad: {item.ItemsCantidad} </p>
            <p> Total: {item.ItemsCantidad * item.price} </p>
            <Button className='buttonCart' onClick={() => borradorHijo(item.id)}>Eliminar</Button >
        </div>
    );

    const regresarTotal = (item) => {
        return (item.price * item.ItemsCantidad)
    }
    const totalXitem = items.map(regresarTotal);

    const totalGlobal = totalXitem.reduce(
        (previousScore, currentScore, index) => previousScore + currentScore, 0);

    return (
        <Fragment>
            {totalItems
                ?
                <>
                    {elMap}
                    <p className='TotalOrden'><strong>Total orden: </strong>{totalGlobal.toFixed(2)} </p>
                    < Button className='buttonCart' onClick={() => borrarTodo()}>Eliminar todo</Button>
                </>
                : (<Link className='myLink myLink--cart' to={`/`}>Adiciona productos</Link>)
            }
        </Fragment >



    )
}

export default Cart;