import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cartWidget.css'

interface Props {
    itemCount: number;
}


const CartWidget: React.FC<Props> = ({itemCount}) => {
    return (
        <>
            <i className="bi bi-cart"/>
            <span className="item-count">{itemCount}</span>
        </>
    )
};

export default CartWidget;
