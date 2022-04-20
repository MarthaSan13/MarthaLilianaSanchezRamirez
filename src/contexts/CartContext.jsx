import React, { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const [nuevoItem, setNuevoItem] = useState([]);
    const [encontrado, setEncontrado] = useState({});


    const addProducto = (producto, ItemsCantidad) => {
        const nuevoItem = {
            ...producto, ItemsCantidad
        };

        const encontrar = items.find(item => item.id === nuevoItem.id)
        if (encontrar !== undefined) {
            const encontrar = items.find(item => item.id === nuevoItem.id)
            const index = items.indexOf(encontrar);
            const aux = [...items];
            aux[index].ItemsCantidad += ItemsCantidad;
            setItems(aux);
        } else {
            setItems([...items, nuevoItem]);
        }
    };

    const eliminarProducto = (idx) => {
        const filtrado = items.filter(item => item.id !== idx);
        setItems(filtrado);
        console.log(filtrado + " elque voa eliminar");
    };

    const getCantidadProductos = () => {
        return items.length
    };

    const limpiarProductos = () => {
        setItems([])
    }
    return (
        < Provider value={{ items, addProducto, eliminarProducto, getCantidadProductos, limpiarProductos }}> {children} </Provider >
    )
};

export default CustomProvider;