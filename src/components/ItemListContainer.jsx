import React, { Fragment } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    return (
        <Fragment>
            <div className='itemListContainer'>
                <h3 className='itemListTitle'>Lista de productos</h3>
                <div className=''>{props.mensaje}</div>
                <ItemCount />
            </div>
        </Fragment>
    )

}

export default ItemListContainer;