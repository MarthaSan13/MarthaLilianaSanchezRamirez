import React, { Fragment, useState, useEffect } from 'react';
import ItemList from "./ItemList";

const ItemListContainer = ({ productos }) => {

    return (
        <Fragment>
            <div className='itemListContainer'>
                <ItemList productos={productos} />
            </div>
        </Fragment>
    )
}

export default ItemListContainer;