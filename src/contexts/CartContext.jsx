import React, { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto;
//console.log(contexto);

const CustomProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);
    const [items, setItems] = useState([]);

    const addProducto = (producto, ItemsCantidad) => {
        const nuevoItem = {
            ...producto, ItemsCantidad
        };
        //if (items.find(producto => producto.id === nuevoItem.id)) {
        if (buscarProducto(producto.id)) {
            const ItemFind = items.find(producto => producto.id === nuevoItem.id);
            const index = items.indexOf(ItemFind);
            const aux = [...items];
            aux[index].ItemsCantidad += ItemsCantidad;
            setItems(aux);
            //setItems([...items[index].ItemsCantidad += ItemsCantidad]);
            console.log("estaba y suma");
        } else
            // setItems([...items, { ItemsCantidad, ...producto }]);
            setItems([...items, nuevoItem]);
        console.log("lo adiciona sin mente");


    };

    const eliminarProducto = (id) => {
        const filtrado = items.filter(productos => productos.id !== id);
        setItems(filtrado);
        console.log(filtrado + " elque voa eliminar");
    };

    const buscarProducto = (id) => {
        // return true;

        const productoEncontrado = productos.find(productos => productos.id === id);
        setItems(productoEncontrado);
        console.log("aqui estoyyy");
    };

    const itemInCart = (id) => {
        //const ItemFind = items.find(productos => productos.id === id);
        //setItems(ItemFind);
        return false;
    };

    const getCantidadProductos = () => {
        return items.length
    };

    const limpiarProductos = () => {
        setItems([])
    }
    return (
        < Provider value={{ items, productos, addProducto, eliminarProducto, buscarProducto, getCantidadProductos, limpiarProductos }}> {children} </Provider >
    )
};

export default CustomProvider;