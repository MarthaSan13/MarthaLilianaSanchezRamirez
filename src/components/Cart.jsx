import React, { Fragment, useContext, useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { contexto } from '../contexts/CartContext';
import { isEmpty } from '@firebase/util';

const Cart = () => {
    const { items, eliminarProducto, limpiarProductos } = useContext(contexto);
    const [idVenta, setIdVenta] = useState("");
    const [comprador, setComprador] = useState();
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [enviar, setEnviar] = useState(false);



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

    const handleSubmit = (event) => {
        event.preventDefault();
        setComprador({ nombre: name, apellido: lastname, Email: email });
    }

    useEffect(() => {

        if (comprador !== undefined) {
            const finalizarCompra = () => {
                const ventasCollection = collection(db, "ventas");
                addDoc(ventasCollection, {
                    comprador,
                    items,
                    date: serverTimestamp(),
                    totalGlobal
                }).then((result) => {
                    setIdVenta(result.id);
                    console.log(idVenta);
                })
                // .finally(() => setCargador(false))
            };
            finalizarCompra()

        } else {
            console.log("no hay comprador");
        }

    }, []);

    return (
        <Fragment>
            {totalItems
                ?
                <>
                    {elMap}
                    <p className='TotalOrden'><strong>Total orden: </strong>{totalGlobal.toFixed(2)} </p>
                    < Button className='buttonCart' onClick={() => borrarTodo()}>Eliminar todo</Button>
                    {/* < Button className='buttonCart' onClick={() => finalizarCompra()}> Completa tu orden!</Button>*/}



                    <form className='formUser' onSubmit={handleSubmit}>
                        <label>Nombre:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
                        <label>Apellido:
                            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /></label>
                        <label>Email:
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                        <input type="submit" />
                    </form>
                </>
                : (<Link className='myLink myLink--cart' to={`/`}>Adiciona productos</Link>)
            }
        </Fragment >



    )
}

export default Cart;