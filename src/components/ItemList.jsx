import React, { Fragment } from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {

    return (
        <Fragment>
            {productos.map((producto) => (
                <div className='itemsList itemsList--animated' key={producto.id}>
                    <Item key={producto.id} producto={producto} />
                </div>
            ))}
        </Fragment>
    )

}

export default ItemList;    