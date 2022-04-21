import React, { Fragment, useContext, useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Test from './Test';
import { uid } from "uid";
import { contexto } from '../contexts/CartContext';

const Cart = () => {

    const { items, eliminarProducto, limpiarProductos } = useContext(contexto);
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);
    ///  const { id, title, description, price, image, ItemsCantidad } = items

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
    console.log(totalXitem);

    const totalGlobal = totalXitem.reduce(
        (previousScore, currentScore, index) => previousScore + currentScore, 0);
    console.log(totalGlobal);

    return (
        <Fragment>

            {totalItems
                ?
                <>
                    {elMap}
                    <p className='TotalOrden'><strong>Total orden: </strong>{totalGlobal.toFixed(2)} </p>
                </>

                : (<Link className='myLink myLink--cart' to={`/`}>Adiciona productos</Link>)
            } < Button className='buttonCart' onClick={() => borrarTodo()}>Eliminar todo</Button>
        </Fragment >



    )
}

export default Cart;