import React from 'react';

function Cart(props) {
    return (
        <>
            <h2>Cart</h2>
            <li>{props.name} {props.price}</li>
            <button>Delete</button>
        </>
    )
}

export default Cart;