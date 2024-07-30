import React from 'react';
import Product from './Product';

function Cart(props) {
    const { data, isCart, clickHandler } = props;

    return (
        <section>
            <h2>Cart</h2>
            <ul>
                {props.children}
                {/* {data.map(item => <Product isCart={isCart} key={item.id} data={item} />)} */}
            </ul>
        </section>
    );
}

export default Cart;
