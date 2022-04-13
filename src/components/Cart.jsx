import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Test from './Test';
import { uid } from "uid";

const Cart = () => {

    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);

    const Change = (event) => {
        setUser(event.target.value);

        //console.log(event.target.value);
    }
    const Click = (event) => {
        //event.stopPropagation();
        //console.log("click boton")
        setUsers([...users, { name: user, id: uid() }]);
    };
    const eliminarEnPadre = (id) => {
        console.log("desde el padre: " + id);
        const filtrado = users.filter(user => user.id !== id);
        setUsers(filtrado);
    }
    return (
        <div>
            <input type="text" onChange={Change} />
            <button id="btn" onClick={Click}>Click</button>

            <Test users={users} eliminarEnPadre={eliminarEnPadre} />
        </div>
    )
}

export default Cart;