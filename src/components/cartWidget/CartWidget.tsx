import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cartWidget.css'

const CartWidget: React.FC = () => {
    return (
        <>
            <i className="bi bi-cart"/>
            <span className="item-count">5</span>
        </>
    )
};

export default CartWidget;
