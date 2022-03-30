import React, { Fragment } from 'react';
import { useState } from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {

    //console.log(productos)

    return (
        <Fragment>
            <div className='itemsList'>
                {productos.map(producto => {
                    return <Item productId={producto.id} productTitle={producto.title} productDescription={producto.description} productPrice={producto.price} productPictureUrl={producto.pictureUrl} productStock={producto.stock} />
                })}
            </div>
        </Fragment>
    )

}

export default ItemList;