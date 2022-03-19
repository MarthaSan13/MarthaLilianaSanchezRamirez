import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (
        <Fragment>
            <div className='cartshop'>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </Fragment>
    )

}

export default CartWidget;

