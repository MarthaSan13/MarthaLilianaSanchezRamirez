import React, { Fragment, useState, useEffect } from 'react';
import ItemListContainer from "../containers/ItemListContainer";

const Home = ({ mensaje }) => {

    return (
        <Fragment>
            <div className='itemMessage'>{mensaje}</div>
            <div className='itemListContainer'>
                <ItemListContainer />
            </div>
        </Fragment>
    )

}

export default Home;