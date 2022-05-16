import React, { Fragment, useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { contexto } from '../contexts/CartContext';

const Form = () => {
    const [comprador, setComprador] = useState({});
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const { addComprador, addEnviado } = useContext(contexto);

    const handleSubmit = (event) => {
        event.preventDefault();
        setComprador({ nombre: name, apellido: lastname, Email: email });
        addEnviado()
    }
    addComprador(comprador)

    return (
        <Fragment>
            <form className='formUser' >
                <label className='formLabel'>Nombre</label>
                <input className='formInput' type="text" value={name} onChange={(e) => setName(e.target.value)} required="required" />

                <label className='formLabel'>Apellido</label>
                <input className='formInput' type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required="required" />

                <label className='formLabel'>Email</label>
                <input className='formInput' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required="required" />

                <Button className='buttonCart' onClick={handleSubmit}> Ingresa tus datos </Button>
            </form>
        </Fragment >
    )

}

export default Form;