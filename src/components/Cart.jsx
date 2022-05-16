import React, { Fragment, useContext, useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { contexto } from '../contexts/CartContext';
import Form from './Form';

const Cart = () => {
    const { items, compradorFinal, enviado, eliminarProducto, limpiarProductos } = useContext(contexto);
    const [idVenta, setIdVenta] = useState("");
    const [compradorCart, setCompradorCart] = useState({});
    const [cartEmpty, setCartEmpty] = useState(true);
    const [success, setSuccess] = useState(false);
    const [totalOrden, setTotalOrden] = useState(0);
    const [totalCantidades, setTotalCantidades] = useState(0);

    const borradorHijo = (idx) => {
        eliminarProducto(idx)
    }
    const borrarTodo = () => {
        limpiarProductos()
    }

    const listadoItems = items.map((item) =>
        <div className='muestraItems' key={item.id}>
            <img className='imgOnCart' src={item.image} />
            <p className='titleOnCart'> {item.title} </p>
            <p> Precio: {item.price} </p>
            <p> Cantidad: {item.ItemsCantidad} </p>
            <p> Total: {item.ItemsCantidad * item.price} </p>
            <Button className='buttonCart' onClick={() => borradorHijo(item.id)}>Eliminar</Button >
        </div>
    );

    const totalItems = items.length > 0;

    useEffect(() => {
        if (totalItems) {
            const regresarTotal = (item) => {
                return (item.price * item.ItemsCantidad)
            }
            const totalXitem = items.map(regresarTotal);
            const totalGlobal = totalXitem.reduce(
                (previousScore, currentScore, index) => previousScore + currentScore, 0);

            const regresarCantidades = (item) => {
                return (item.ItemsCantidad)
            }
            const reduceCantidades = items.map(regresarCantidades);
            const cantidadesGlobal = reduceCantidades.reduce(
                (previousScore, currentScore, index) => previousScore + currentScore, 0);

            setTotalOrden(totalGlobal)
            setTotalCantidades(cantidadesGlobal)
            setCartEmpty(false)
        } else {
            setCartEmpty(true)
        }

    }, [items]);

    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            compradorFinal,
            items,
            date: serverTimestamp(),
            totalOrden
        }).then((result) => {
            setIdVenta(result.id);
            setSuccess(true)
        })

        items.forEach(element => {
            const updateStock = doc(db, "productos", element.id);
            updateDoc(updateStock, { stock: element.stock - element.ItemsCantidad })
        });
    };

    if (cartEmpty) {
        return (<Link className='myLink myLink--cart' to={`/`}>Adiciona productos</Link>)
    } else {
        return (
            <Fragment>
                <div className='itemsContainer'>
                    <p className='textDataMain'>Articulos agregados</p>
                    {listadoItems}
                    <p className='TotalOrden'><strong>Total orden: </strong>{totalOrden.toFixed(2)} </p>
                    < Button className='buttonCart' onClick={() => borrarTodo()}>Eliminar todo</Button>
                </div>
                <div className='formContainer'>
                    <Form />

                    {enviado ?
                        <div className='formData' >
                            <p className='textDataMain'>Resumen de tu orden</p>
                            <p className='textData'>Nombre: {compradorFinal.nombre} {compradorFinal.apellido}</p>
                            <p className='textData'>Email: {compradorFinal.Email}</p>
                            <p className='textData'>Cantidad articulos: {totalCantidades}</p>
                            <p className='textData'>Precio total: {totalOrden.toFixed(2)}</p>
                            < Button className='buttonCart' variant='success' onClick={() => finalizarCompra()}> Completa tu orden!</Button>

                        </div>
                        :
                        <div className='formData' >
                            <p className='textData' >Ingresa tus datos para proseguir con la compra</p>
                        </div>
                    }
                </div>
                <div className='itemsContainer'>
                    {success ?
                        <p className='textDataMain' >Tu compra fue realizada con exito, tu Id de compra es: {idVenta} </p>
                        : null
                    }
                </div>
            </Fragment >
        )
    }
}

export default Cart;