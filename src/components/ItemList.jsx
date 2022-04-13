import React, { Fragment } from 'react';
import { useState } from 'react';
import Item from './Item';
import Test from './Test';

const ItemList = ({ productos }) => {

    //console.log(productos)

    return (
        <Fragment>

            {productos.map((producto) => (
                <div className='itemsList itemsList--animated' key={producto.id}>

                    <Item key={producto.id} producto={producto} />

                    {producto.title}
                </div>
            ))}

        </Fragment>
    )

}

export default ItemList;    