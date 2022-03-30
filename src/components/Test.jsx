import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const Test = () => {

    const task = new Promise((resolve, reject) => {
        resolve(true);
        //reject("Mensaje de error");
    });

    task.then(result => {
        throw new Error("cometemos un error aqui");
        console.log("Este no es el error " + result);
    }, err => {
        console.log("Error: " + err);
    }).catch(err => {
        console.log("captura errores en el proceso");
    })




    return (
        <Fragment>
            <div>

            </div>


        </Fragment>
    )

}


export default Test;
