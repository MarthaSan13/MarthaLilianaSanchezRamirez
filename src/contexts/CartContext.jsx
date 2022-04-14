import React, { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto;
console.log(contexto);

const CustomProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);

    const addProducto = (producto, ItemsCantidad) => {
        setProductos([...productos, { ItemsCantidad: ItemsCantidad, ...producto }])
    };

    const eliminarProducto = (id) => {
        const filtrado = productos.filter(productos => productos.id !== id);
        setProductos(filtrado);
    };

    const buscarProducto = (id) => {
        const encontrado = productos.find(productos => productos.id === id);
        setProductos(encontrado);
    };

    const getCantidadProductos = () => {
        return productos.length
    };

    const limpiarProductos = () => {
        setProductos([])
    }
    return (
        < Provider value={{ productos, addProducto, eliminarProducto, buscarProducto, getCantidadProductos, limpiarProductos }}> {children} </Provider >
    )
};

export default CustomProvider;