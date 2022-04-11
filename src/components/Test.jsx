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

    const perros = [
        {
            id: 1,
            nombre: "Boby",
            edad: 2,
        },
        {
            id: 2,
            nombre: "Pepe",
            edad: 4,
        },
        {
            id: 3,
            nombre: "Pelusa",
            edad: 1,
        },
    ];
    /*
    //const cosas = ["ele", "jew", "men's", "women's"];
    const cosas = ["ele", "jew", "men's", "women's"];
    const salida = cosas.map((nombre) => {
        return `El perror se llama {nombre}` + { nombre }
    })
    console.log(salida);
    console.log(categories + " despues del useEffect");



    let array = [1, 2, 3, 4];
    Array.isArray(array); // true
    //console.log(Array.isArray(categories))

    //const element = "lal";


    const ListItems = categories.map((number) =>
        <div key={number.toString()}>
            {number}
        </div>

    );

    const todoItems = categories.map((todo, index) =>
        // Only do this if items have no stable IDs
        <li key={index}>
            {todo}
        </li>
    );
    console.log(ListItems)
    console.log(todoItems)
    //const element = { number };

    {categories.map((category) => {
                return (
                    <div>
                        {category}
                    </div>
                )
            })}
*/

    return (
        <Fragment>
            <div>

            </div>


        </Fragment>
    )

}


export default Test;
