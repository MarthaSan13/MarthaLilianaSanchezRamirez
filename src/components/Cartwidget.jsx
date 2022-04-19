import React, { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { contexto } from '../contexts/CartContext';

const CartWidget = () => {
    const { items } = useContext(contexto);

    const totalItems = items.length > 0;

    return (
        <Fragment>
            <div className='cartshop'>
                <FontAwesomeIcon icon={faShoppingCart} />

                {totalItems
                    ? <div className='cartshopNumber'>{items.length}</div>
                    : null
                }


            </div>
        </Fragment>
    )

}

export default CartWidget;

