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
    const { items, eliminarProducto, limpiarProductos, buscarProducto } = useContext(contexto);

    console.log("son los " + items);

    //buscarProducto();

    const borradorHijo = (id) => {
        console.log("eliminar " + id);
        eliminarProducto(id)
    }
    const borrarTodo = () => {
        console.log("eliminar tooodo ");
        limpiarProductos()
    }

    const totalItems = items.length > 0;

    return (
        <Fragment>

            {totalItems
                ? (

                    items.map((item) => (
                        <>
                            <div className='muestraItems' key={item.id}>
                                <p> {item.id} </p>
                                <p> {item.title} </p>
                                <p> Precio:{item.price} </p>
                                <p> Cantidad: {item.ItemsCantidad} </p>
                                <button onClick={() => borradorHijo(item.id)}>Eliminar</button>
                            </div>

                        </>
                    ))


                )
                : <Link className='myLink' to={`/`}>Adiciona productos</Link>
            }

            < button onClick={() => borrarTodo()}>Eliminar todo</button>


        </Fragment>



    )
}

export default Cart;