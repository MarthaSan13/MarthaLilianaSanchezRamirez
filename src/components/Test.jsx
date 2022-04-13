import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';

const Test = ({ users, eliminarEnPadre }) => {

    const borradorHijo = (id) => {
        // console.log("eliminar " + id);
        eliminarEnPadre(id)
    }

    return (
        <Fragment>
            <div >
                {users.map((user) => (
                    <article key={user.id}>
                        <li key={user.id}>{user.name}</li>
                        <button onClick={() => borradorHijo(user.id)}>Eliminar</button>
                    </article>
                ))}
            </div>


        </Fragment>
    )

}

export default Test;